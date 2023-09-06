from pydantic import BaseModel
from fastapi import UploadFile

class UserBase(BaseModel):
    id: int 

class User(BaseModel):
    name: str 
    image: str

    class Config:
        orm_mode = True

class UserFull(UserBase):
    name: str 
    image: str

    class Config:
        orm_mode = True