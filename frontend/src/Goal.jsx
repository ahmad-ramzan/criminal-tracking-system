import React from 'react'
import Footer from "./Footer";
import Navbar from "./Navbar";
import Lgcard from "./Lgcard";

const Goal = () => {
    const content1 = `
    The face identification system using MTCNN and FaceNet consists of two steps: face detection and face recognition.
    MTCNN is a deep learning-based face detection algorithm that accurately detects faces by generating candidate regions, refining them to localize facial features, and identifying facial landmarks.
    FaceNet is a face recognition algorithm that maps facial images into a high-dimensional feature space. It extracts embeddings that capture unique face characteristics. These embeddings are compared with known faces to identify matches based on distance metrics.
    By combining MTCNN for face detection and FaceNet for face recognition, the system can accurately locate and recognize faces. It has applications in face authentication, surveillance systems, and social media tagging.`;

    const content2 = `The mission of a criminal identification system based on facial recognition is to assist law enforcement agencies in identifying and apprehending individuals involved in criminal activities. The system aims to leverage the power of facial recognition technology to achieve the following objectives:
    Accurate Identification: The system should employ robust facial recognition algorithms to accurately match faces captured in surveillance footage, images, or videos against a database of known criminals or persons of interest. High accuracy is vital to minimize false positives and ensure the correct identification of individuals.
    Rapid Identification: The system should provide fast and efficient identification capabilities, enabling law enforcement to quickly match and identify suspects or persons involved in criminal activities. Timely identification can significantly aid investigations and enhance public safety.`;

  return (
    <div className='main'>
        <Navbar/>

        <Lgcard heading="ALGORITHM" image="./images/algo.jpg" content={content1}/>
        
        <Lgcard heading="MISSION" image="./images/mis.jpg" content={content2}/>

        <Footer/> 
    </div>
  )
}

export default Goal
