from sqlalchemy import Boolean, Column, ForeignKey, Integer, String,DateTime, LargeBinary
from sqlalchemy.orm import declarative_base

Base = declarative_base()

class Criminal(Base):
    __tablename__ = "criminals"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True)
    image = Column(String)

# from models import Criminal
# new_record = Criminal(id=1,name="ahmad")
# python create_db.py

