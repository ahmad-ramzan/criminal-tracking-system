from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine

engine = create_engine("postgresql://postgres:ahmad@localhost:8888/Person",echo=True)

# A sessionmaker to communicate with the database
Session = sessionmaker(autocommit=False, autoflush=False,bind=engine)