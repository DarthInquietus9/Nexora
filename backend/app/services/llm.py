import os
import json
from pydantic import BaseModel
import google.generativeai as genai

# Setup Gemini API key
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "")
if GEMINI_API_KEY:
    genai.configure(api_key=GEMINI_API_KEY)

class ScopingResult(BaseModel):
    summary: str
    tech_stack: list[str]
    deliverables: list[str]
    estimated_complexity: str

def generate_ai_scoping(title: str, description: str) -> ScopingResult:
    prompt = f"""
    You are an expert technical product manager. Analyze the following project request and break it down into a technical scope.

    Project Title: {title}
    Project Description: {description}

    Provide your response STRICTLY as a JSON object with this exact structure:
    {{
        "summary": "Concise 2-sentence summary of the core goal",
        "tech_stack": ["Tech1", "Tech2", "Tech3"],
        "deliverables": ["Deliverable 1", "Deliverable 2"],
        "estimated_complexity": "Low" | "Medium" | "High"
    }}
    """

    try:
        model = genai.GenerativeModel("gemini-3.5-flash")
        response = model.generate_content(
            prompt,
            generation_config={"response_mime_type": "application/json"}
        )
        data = json.loads(response.text)
        return ScopingResult(**data)
    except Exception as e:
        # Fallback response in case API keys are missing or invalid
        return ScopingResult(
            summary=f"Automated scoping analysis for: {title}",
            tech_stack=["Python", "FastAPI", "React", "PostgreSQL"],
            deliverables=["Core API endpoints", "Frontend interface", "Database migration"],
            estimated_complexity="Medium"
        )