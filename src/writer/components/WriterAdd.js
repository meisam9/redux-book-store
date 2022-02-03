import { useState } from "react";
import { useDispatch } from "react-redux";
import { addWriter } from "../writerActions";

export const AddWriter = () => {
    const dispatch = useDispatch();
    let randomId = () => {
        let s4 = () => {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        //return id of format 'aaaaaaaa
        return s4() + s4() 
    }
    const [form,setForm] = useState({
        id: randomId(),
        firstName: " ",
        lastName: " ",
    })
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

        </div>
    )
}