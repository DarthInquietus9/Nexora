import sys
from os.path import dirname, abspath
sys.path.append(dirname(dirname(abspath(__file__))))

from app.db import SessionLocal, Base, engine
from app.models.user import User, RoleEnum
from app.core.auth import get_password_hash

def seed_database():
    print("Initializing database tables...")
    Base.metadata.create_all(bind=engine)

    db = SessionLocal()
    try:
        # Check if users already exist
        if db.query(User).first():
            print("Database already seeded.")
            return

        print("Seeding initial users...")

        # 1. Create Admin User
        admin = User(
            email="admin@platform.com",
            hashed_password=get_password_hash("AdminPass123!"),
            full_name="Platform Administrator",
            role=RoleEnum.ADMIN
        )

        # 2. Create Sponsor User
        sponsor = User(
            email="sponsor@acme.com",
            hashed_password=get_password_hash("SponsorPass123!"),
            full_name="Acme Corp Sponsor",
            role=RoleEnum.SPONSOR
        )

        # 3. Create Standard Developer User
        dev_user = User(
            email="developer@lab.com",
            hashed_password=get_password_hash("DevPass123!"),
            full_name="Lead Developer",
            role=RoleEnum.USER
        )

        db.add_all([admin, sponsor, dev_user])
        db.commit()
        print("Database seeded successfully!")
        print("Default accounts created:")
        print("  - Admin: admin@platform.com / AdminPass123!")
        print("  - Sponsor: sponsor@acme.com / SponsorPass123!")
        print("  - User: developer@lab.com / DevPass123!")

    except Exception as e:
        db.rollback()
        print(f"Error seeding database: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    seed_database()