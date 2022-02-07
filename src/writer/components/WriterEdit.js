import { useEffect } from "react"
import { useState } from "react"
import { Alert } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useHistory } from "react-router-dom"
import { editWriter } from "../writerActions"

const WriterEdit = () => {
    const {id} = useParams()
    const writers = useSelector((state)=>state.writer)
    const [oldWriter, setOldWriter] = useState({
        id: ' ',
        firstName: " ",
        lastName: " ",
    })
    const [isDisabled, setIsDisabled] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory()
    const closeNotification = ()=>{
        setTimeout(() => {
            setIsDisabled(false)
            {isDisabled&& history.push('/')}
        }, 1500);
    } // this function closes the notification after 1 second
    useEffect(() => {
        const writer = writers.find(writer=> writer.id === id);
        setOldWriter({id:writer.id, firstName:writer.firstName, lastName:writer.lastName})
    },[id])
    useEffect( closeNotification,[isDisabled])
    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setOldWriter((prevform) => ({ ...prevform, [name]: value}))
    }
    const handleSubmit = () => {
        dispatch(editWriter(oldWriter));
        setIsDisabled(true)
        
    }
    return (
        <div className="container my-5">
        <h2>Add a Writer :</h2>
    <form className="border p-3 col-sm-8" onSubmit={(e)=>e.preventDefault()}>
    <div className="form-group row mb-2">
<label htmlFor="staticId" className="col-sm-1 col-form-label">ID :</label>
<div className="col-sm-6">
  <input type="text" readOnly className="form-control-plaintext" id="staticId" value={oldWriter.id} />
</div>
</div>

<div className="row my-2">
<div className="col">
    <label htmlFor="firstName" className="mb-2">Fisrt Name</label>
  <input type="text" className="form-control" id="firstName" name="firstName" placeholder="First name" value={oldWriter.firstName} onChange={handleChange} />
</div>
<div className="col">
<label htmlFor="lastName" className="mb-2">Last Name</label>
  <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Last name" value={oldWriter.lastName} onChange={handleChange}/>
</div>
</div>
<button className="btn btn-primary"  type="submit" onClick={handleSubmit} disabled={isDisabled}>Edit  </button>
    </form>
    <Alert show={isDisabled} variant="success" onClose={()=>setIsDisabled(false)} dismissible >
                <span > {`The Writer has been Edited.`} </span>
    </Alert>
    </div>
)
}

export default WriterEdit;