# example of face detection with mtcnn
import argparse
import ast

from matplotlib import pyplot
from PIL import Image
from numpy import asarray
from mtcnn.mtcnn import MTCNN
from keras_facenet import FaceNet
import os
import cv2
import numpy as np

embedder = FaceNet()
def get_embedding(face_img):
    face_img = np.asarray(face_img)
    face_img = face_img.astype('float32') # 3D(160x160x3)
    face_img = np.expand_dims(face_img, axis=0) 
    # 4D (Nonex160x160x3)
    yhat= embedder.embeddings(face_img)
    return yhat # 512D image (1x1x512)

def extract_face(image):
    pixels = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    # create the detector, using default weights
    detector = MTCNN()
    # detect faces in the image
    results = detector.detect_faces(pixels)
    # extract the bounding box from the first face
    x1, y1, width, height = results[0]['box']
    x2, y2 = x1 + width, y1 + height
    # extract the face
    face = pixels[y1:y2, x1:x2]
    # resize pixels to the model size
    image = Image.fromarray(face)
    face_array = asarray(image)
    #pyplot.imshow(face_array)
    return face_array


def accessImages():
    myList = opt.imgs
    path = 'Images'
    images = []
    classNames = []
    #myList = os.listdir(path)
    print(myList)
    for cl in myList:
        curImg = cv2.imread(f'{path}/{cl}')
        images.append(curImg)
        classNames.append(os.path.splitext(cl)[0])
    print(classNames)
    
    encodeListKnown = findEncodings(images)
    data = {'Names': classNames, 'Features': encodeListKnown}
    np.savez('data.npz', **data)


def findEncodings(images):
    encodeList = []
    for img in images:
        face = extract_face(img)
        img = cv2.resize(face,(160,160))
        feature = get_embedding(img)
        encodeList.append(feature)
    return encodeList         


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--imgs', nargs='+', type=str, help='imgs list')
    opt = parser.parse_args()
    
    accessImages()

''' python yolo.py --imgs Ahmad.jpg Abdullah.jpg Ibtasam.jpg '''

