import React,{useState} from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const Webcam = () => {
  const [loading, setLoading] = useState(false);
  const saveChanges = () => {
      setLoading(true);
      saveData();
  };

  const saveData = async () => {
    const requestOptions = {
      method: "GET",
      headers: {'accept': 'application/json'}
    };
    
    try {
      const response = await fetch(`http://localhost:8000/webcam`, requestOptions);
      if (response.ok) {
        setLoading(false);
        console.log("response was ok!");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
    }
  };
  return (
    <>
      <div class="control addrecord p-3 mt-6">
        
                <button className='button is-primary mt-3' onClick={saveChanges}>Start WebCam</button>
          <ClipLoader
          className='mt-3 ml-3'
          color="black"
          loading={loading}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
          />
          {(loading)?(<><span className='is-size-4 is-inline-block'>loading...</span>
          <p className='has-text-danger'>enter Q/q to exit web camera</p></>):(undefined)}

      </div>
    </>
  )
}

export default Webcam
