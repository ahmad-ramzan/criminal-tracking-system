import React,{useEffect, useState} from 'react';
import ClipLoader from "react-spinners/ClipLoader";

const Preprocess = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [checkedBoxes, setCheckedBoxes] = useState([]);

  const handleCheckboxChange = (checkboxId) => {
    if (checkedBoxes.includes(checkboxId)) {
     setCheckedBoxes(checkedBoxes.filter((id) => id !== checkboxId));
    } else {
     setCheckedBoxes([...checkedBoxes, checkboxId]);
    }
  };

  const handleStartPreprocess = () => {
    var result = checkedBoxes.join(' ').replace(/,/g, ' ');
    // console.log(result);
    const requestOptions = {
      method: "GET",
      headers: {'accept' : "application/json",},
    };
    async function fetchData() {
      const response = await fetch(`http://localhost:8000/preprocess?images=${result}`,requestOptions);
      if(response.ok){
        console.log("preprocess is ok.");
        setLoading(false);
      }
    }
    setLoading(true);
    fetchData();

  };

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
  }, []);

  return (
    <>
     <div className="control addrecord p-3 mt-6">
     <tr className="is-flex is-justify-content-space-between px-4 has-text-weight-bold has-background-black has-text-white">
          <span>ID {"=>"} NAME</span> <span>SELECT</span>
    </tr>
  {
    data.map((val,ind)=>{
      return <>
      <div className="container-fluid has-background-grey-lighter ">
        <tr key={ind} className="is-flex is-justify-content-space-between px-4">
          <span>{val['id']} {"=>"} {val['name']}</span> <input type="checkbox" onChange={() => handleCheckboxChange(val['image'])} checked={checkedBoxes.includes(val['image'])}/>
        </tr>
      </div>
      <hr className='my-0 has-background-gray'/>
      </>
    })
  }
  <button className='button is-primary mt-3' onClick={handleStartPreprocess}>Start Preprocess</button>
  <ClipLoader
        className='mt-3 ml-3'
        color="black"
        loading={loading}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <span className='is-size-4 pl-1'>{(loading)?("loading..."):(undefined)}</span>
    </div>
    
    </>
  )
}

export default Preprocess
// 8090100000