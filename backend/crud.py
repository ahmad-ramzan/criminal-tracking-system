from passlib.hash import bcrypt
import database
from sqlalchemy.orm import Session
import model, schemas
from datetime import datetime, timedelta
from fastapi import UploadFile


async def get_users(db: Session):
    return db.query(model.Criminal).all()

async def get_user_by_name(name: str, db: Session):
    return db.query(model.Criminal).filter(model.Criminal.name == name).first()

async def get_user_by_id(user_id: int, db: Session):
    return db.query(model.Criminal).filter(model.Criminal.id == user_id).first()

async def create_user(name: str,image: str, db: Session):
    user_obj = model.Criminal(
        name=name, image=image
    )
    db.add(user_obj)
    db.commit()
    db.refresh(user_obj)
    return user_obj

async def delete_user(user: schemas.User, db: Session):
    db.delete(user)
    db.commit()
    return user

async def update_user(user_db:schemas.User,name: str, image: str, db: Session):
    user_db.name = name
    user_db.image = image
    
    db.commit()
    db.refresh(user_db)
    return user_db

