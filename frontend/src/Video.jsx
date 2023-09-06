import React, { useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const Video = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const [fileName, setFileName] = useState('video.mp4');

  const saveChanges = async () => {
    if (file) {
      setLoading(true);
      try {
        await saveData();
        setStatus(true);
        setFile(null);
        setFileName('');
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    }
  };

  const saveData = async () => {
    const formData = new FormData();
    formData.append('file', file);

    const requestOptions = {
      method: 'POST',
      headers: { accept: 'application/json' },
      body: formData,
    };

    const response = await fetch('http://localhost:8000/detect', requestOptions);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    setLoading(false);
  };

  return (
    <>
      <div className="control addrecord p-3 mt-6 has-text-centered">
        <div className="is-flex is-justify-content-space-between">
          <label className="file-label">
            <input
              className="file-input"
              type="file"
              name="resume"
              onChange={(e) => {
                setFile(e.target.files[0]);
                setFileName(e.target.files[0].name);
                setStatus(false);
              }}
              value={file === null ? '' : undefined}
            />
            <span className="button is-primary mt-3 file-label">
              {fileName || 'Upload Video'}
            </span>
          </label>
          <button className="button is-primary mt-3" onClick={saveChanges}>
            Start
          </button>
        </div>
        <ClipLoader
          className="mt-3 ml-3"
          color="black"
          loading={loading}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        {loading ? (
          <span className="is-size-4">Loading...</span>
        ) : status ? (
          <>
            <hr />
            <p>
              Check output in this path: <span className="has-text-danger">'public/images/exp/__.mp4'</span>
            </p>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Video;
