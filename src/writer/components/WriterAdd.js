import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Notification } from "../../app/common/Notification";
import { addWriter } from "../writerActions";
import {randomId} from "../../app/common/Utils";

 const AddWriter = () => {
    const dispatch = useDispatch();

    const [form,setForm] = useState({
        id: randomId(),
        firstName: " ",
        lastName: " ",
    })
    const [show, setShow] =useState(false);
    const setClose = useCallback(() => setShow(false),[]); // passing to notification component to close the alert.

    //functions 
    
    
    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setForm((prevform) => ({ ...prevform, [name]: value}))
    }
    const handleSubmit=(e)=> {
        e.preventDefault()
        dispatch(addWriter(form))
        document.querySelector('#lastName').value = " ";
        document.querySelector('#firstName').value = " ";
        setForm((prevform) => ({ ...prevform, id: randomId()}))
        setShow(true)
    }
    return (
        <div className="container my-5">
            <h2>Add a Writer :</h2>
        <form className="border p-3 col-sm-8" onSubmit={(e)=>e.preventDefault()}>
        <div className="form-group row mb-2">
    <label htmlFor="staticId" className="col-sm-1 col-form-label">ID :</label>
    <div className="col-sm-6">
      <input type="text" readOnly className="form-control-plaintext" id="staticId" value={form.id} />
    </div>
  </div>
   
  <div className="row my-2">
    <div className="col">
        <label htmlFor="firstName" className="mb-2">Fisrt Name</label>
      <input type="text" className="form-control" id="firstName" name="firstName" placeholder="First name"  onChange={handleChange}/>
    </div>
    <div className="col">
    <label htmlFor="lastName" className="mb-2">Last Name</label>
      <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Last name" onChange={handleChange}/>
    </div>
  </div>
  <button className="btn btn-primary"  type="submit" onClick={handleSubmit}>submit </button>
        </form>
        <Notification show={show} message={'Writer'} onClose={setClose}/>
        </div>
    )
}

export default AddWriter;