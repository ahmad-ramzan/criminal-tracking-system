import React,{useEffect, useState} from 'react'
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";


const Viewrecord = () => {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [temp, setTemp] = useState([]);
  const [toggle, setToggle] = useState(false);

  const openModal = (val) => {
    setTemp(val);
    setName(val['name']);
    console.log(val);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setToggle(!toggle);
  };
  const saveChanges = () => {
    saveData();
    closeModal();
    setName('');
    setFile(null);
  };



  const opendel = (val)=> {
    deleteData(val['id']);
    setToggle(!toggle);
  }
  const deleteData = async (id) => {
    const requestOptions = {
      method: "Delete",
      headers: {'accept': 'application/json'}
    };
    
    try {
      const response = await fetch(`http://localhost:8000/api/users/${id}`, requestOptions);
      const jsonData = await response.json();
      console.log(jsonData);
      if (!response.ok) {
        console.log("response was not ok!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }



  const saveData = async () => {
    const formData = new FormData();
    formData.append('file', file);

    const requestOptions = {
      method: "PUT",
      headers: {'accept': 'application/json'},
      body: formData
    };
    
    try {
      const response = await fetch(`http://localhost:8000/api/users/${temp['id']}?name=${name}`, requestOptions);
      const jsonData = await response.json();
      console.log(jsonData);
      if (!response.ok) {
        console.log("response was not ok!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    }



  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {'accept' : "application/json",},
    };

    async function fetchData() {
      const response = await fetch('http://localhost:8000/api/allusers',requestOptions);
      const jsonData = await response.json();
      setData(jsonData);
    }
fetchData();
  }, [toggle]);

  return (
    <>
<table class="table is-hoverable is-fullwidth" id='table'>
  <thead>
    <tr>
      <th>ID#</th>
      <th>Criminal_Name</th>
      <th><span className='extrarow'>Image_name</span></th>
      <th><span className='pr-4'>Edit</span>  |  <span className='pl-4'>Delete</span></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
  {
    data.map((val,ind)=>{
      return <>
      <tr key={ind}>
      <td>{val['id']}</td>
      <td>{val['name']}</td>
      <td><span className='extrarow'>{val['image']}</span></td>
      <td><a className='is-size-4 has-text-success pr-5' onClick={()=>{openModal(val)}}><BiEdit/></a> | <a className='is-size-4 has-text-danger pl-5' onClick={()=>{opendel(val)}}><AiFillDelete/></a></td>
      <td></td>
    </tr>
      </>
    })
  }
  </tbody>
</table>


<div>
      <div className={`modal ${isOpen ? "is-active" : ""}`}>
        <div className="modal-background" onClick={closeModal}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Edit Record</p>
            <button className="delete" aria-label="close" onClick={closeModal}></button>
          </header>
          <section className="modal-card-body">
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  value={name}
                  placeholder='enter name'
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
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
            </div>
            <button className="button is-primary" onClick={saveChanges}>
              Save
            </button>
          </section>
        </div>
      </div>
    </div>
   
    </>
  )
}

export default Viewrecord
