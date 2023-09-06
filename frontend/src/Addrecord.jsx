import React,{useState} from 'react'

const Addrecord = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);

  const saveChanges = () => {
    console.log("Name:", name);
    console.log("File:", file);
    if(name && file){
      saveData();
      setFile(null);
      setName('');
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
      const response = await fetch(`http://localhost:8000/api/adduser?name=${name}`, requestOptions);
      const jsonData = await response.json();
      console.log(jsonData);
      if (!response.ok) {
        console.log("response was not ok!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    }

  return (
    <>
      <div className="addrecord p-6 mt-6">
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Image</label>
          <div className="control">
            <input
              className="input"
              type="file"
              accept="image/jpeg, image/png"
              onChange={(e) => setFile(e.target.files[0])}
              value={file === null ? '' : undefined}
            />
          </div>
        </div>
        <button className="button is-primary" onClick={saveChanges}>
          Save
        </button>
      </div>
    </>
  )
}

export default Addrecord
