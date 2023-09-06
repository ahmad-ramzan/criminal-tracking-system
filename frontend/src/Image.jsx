import React,{useState} from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const Image = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const [fileName, setFileName] = useState('');
  const [imgPath, setImgPath] = useState('');

  const saveChanges = (e) => {
    if(file){
      setLoading(true);
      saveData();
      setFile(null);
      setStatus(true);
      const path = `../images/exp/${fileName}`;
      setImgPath(path);
      setFileName('');
    }
  };

  const saveData = async () => {
    const formData = new FormData();
    formData.append('file', file);

    const requestOptions = {
      method: "POST",
      headers: {'accept': 'application/json'},
      body: formData
    };
    
    try {
      const response = await fetch(`http://localhost:8000/detect`, requestOptions);
      if (response.ok) {
        console.log("response was ok!");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <div class="control addrecord p-3 mt-6 has-text-centered">
        <div className='is-flex is-justify-content-space-between'>
        <label class="file-label">
        <input class="file-input" type="file" name="resume" onChange={(e) => {setFile(e.target.files[0]);setFileName(e.target.files[0].name);setStatus(false);}} value={file === null ? '' : undefined}/>
          <span className='button is-primary mt-3 file-label'>{fileName || 'Upload Image'}</span>
        </label>
        <button className='button is-primary mt-3' onClick={saveChanges}>Start</button>
        </div>
        <ClipLoader
        className='mt-3 ml-3'
        color="black"
        loading={loading}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      {(loading)?(<span className='is-size-4'>loading...</span>):((status) &&
       <><hr/>
      <img className='output' src={imgPath} alt="img" /></>)}
      </div>
    </>
  )
}

export default Image
