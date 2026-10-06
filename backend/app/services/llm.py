import os
from dotenv import load_dotenv
from pydantic import BaseModel
from google import genai

load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

if not GEMINI_API_KEY:
    raise RuntimeError("GEMINI_API_KEY is not configured")


client = genai.Client(api_key=GEMINI_API_KEY)


class ScopingResult(BaseModel):
    summary: str
    tech_stack: list[str]
    deliverables: list[str]
    estimated_complexity: str


def generate_ai_scoping(title: str, description: str) -> ScopingResult:

    prompt = f"""
You are an expert technical project scoping AI agent.

Analyze the following research/project problem.

Project Title:
{title}

Project Description:
{description}

Return ONLY a valid JSON object with exactly these fields:

{{
    "summary": "A concise 2-3 sentence summary of the project goal",
    "tech_stack": ["technology 1", "technology 2", "technology 3"],
    "deliverables": ["deliverable 1", "deliverable 2", "deliverable 3"],
    "estimated_complexity": "Low"
}}

The estimated_complexity value must be exactly one of:
Low, Medium, High
"""

    try:
        response = client.models.generate_content(
            model="gemini-3.5-flash-lite",
            contents=prompt,
            config={
                "response_mime_type": "application/json"
            }
        )

        return ScopingResult.model_validate_json(response.text)

    except Exception as e:
        print(f"AI scoping error: {e}")

        return ScopingResult(
            summary=f"AI scoping analysis for: {title}",
            tech_stack=[
                "Python",
                "FastAPI",
                "React"
            ],
            deliverables=[
                "Project scope",
                "Technical implementation",
                "Research deliverables"
            ],
            estimated_complexity="Medium"
        )