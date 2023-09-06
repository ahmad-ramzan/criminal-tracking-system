from fastapi import FastAPI, Form,File,UploadFile,HTTPException,status,Depends
from pydantic import BaseModel
from typing import Optional,List
from database import Session
import crud, models, schemas
from fastapi.security import OAuth2PasswordRequestForm
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import shutil
import subprocess
import shlex
import os

upload_folder = "Images/"

app = FastAPI()
app.mount("/images", StaticFiles(directory="images"), name="images")

origins = [
    "http://localhost:3000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = Session()
    try:
        yield db
    finally:
        db.close()


@app.post("/api/adduser")
async def add_user(name:str,file: UploadFile, db: Session = Depends(get_db)):
    db_user = await crud.get_user_by_name(name, db)
    if db_user:
        raise HTTPException(status_code=400, detail="User already exists")
    try:
        file_path = f"images/{file.filename}"
        with open(file_path, "wb") as f:
            shutil.copyfileobj(file.file, f)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
    return await crud.create_user(name,file.filename,db)


@app.get("/api/allusers", response_model=List[schemas.UserFull])
async def get_users(db: Session = Depends(get_db)):
    return await crud.get_users(db)


@app.get("/api/user", response_model=schemas.UserFull)
async def get_user(user_id: int,db: Session = Depends(get_db)):
    user = await crud.get_user_by_id(user_id,db)
    if user is None:
        raise HTTPException(status_code=404, detail="User not Found")
    return user



@app.delete("/api/users/{user_id}", status_code=200)
async def delete_user(
    user_id: int,
    db: Session = Depends(get_db),
):
    user = await crud.get_user_by_id(user_id,db)
    if user is None:
        raise HTTPException(status_code=404, detail="User not Found")
    await crud.delete_user(user, db)
    return {"message", "Successfully Deleted"}


@app.put("/api/users/{user_id}",status_code=200)
async def update_user(
    user_id: int,
    name:str,file: UploadFile,
    db: Session = Depends(get_db),
):
    user_db = await crud.get_user_by_id(user_id,db)
    if user_db is None:
        raise HTTPException(status_code=404, detail="User not Found")
    
    try:
        file_path = f"images/{file.filename}"
        with open(file_path, "wb") as f:
            shutil.copyfileobj(file.file, f)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
    await crud.update_user(user_db,name,file.filename,db)
    return {"message", "Successfully Updated"}


@app.get("/api")
async def root():
    return {"message": "Awesome Leads Manager"}

@app.post("/detect")
async def detect(file: UploadFile):
    try:
        file_path = f"testing/{file.filename}"
        with open(file_path, "wb") as f:
            shutil.copyfileobj(file.file, f)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
    command = f"python detect.py --weights best.pt --conf 0.25 --source {file_path} --npz_file data.npz"
    args = shlex.split(command)
    process = subprocess.Popen(args, stdout=subprocess.PIPE)
    output, error = process.communicate()

    source_path = f"./runs/detect/exp/{file.filename}"
    target_path = "../frontend/public/images/exp"

    target_directory = os.path.dirname(target_path)
    if not os.path.exists(target_directory):
        os.makedirs(target_directory)
    # Move the file from source_path to target_path
    target_file_path = f"../frontend/public/images/exp/{file.filename}"
    if os.path.exists(target_file_path):
        os.remove(target_file_path)
    
    shutil.move(source_path, target_path)
    return {"output": output.decode("utf-8")}

@app.get("/webcam")
async def webcam():
    command = f"python detect.py --weights best.pt --conf 0.25 --source 0 --npz_file data.npz"
    args = shlex.split(command)
    process = subprocess.Popen(args, stdout=subprocess.PIPE)
    output, error = process.communicate()
    return {"output": output.decode("utf-8")}


@app.get("/preprocess")
async def preprocess(images:str):
    # Abdullah.jpg Ahmad.jpg Ibtasam.jpg
    command = f"python yolo.py --imgs {images}"
    args = shlex.split(command)
    process = subprocess.Popen(args, stdout=subprocess.PIPE)
    output, error = process.communicate()
    return {"output": output.decode("utf-8")}

