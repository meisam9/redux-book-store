
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"

//action
import { deleteWriter } from "./writerActions"

// components
import { Button } from "../app/common/Button"
import { DeleteModal } from "../app/common/Modal"
import { Writer } from "./Writer"
import { WriterFilter } from "./components/WritreFilter"


 const WritersContainer = () => {
    const [show, setShow] = useState(false);
    const [modalProps, setModalProps] = useState({
        title:'Writer',
        message:'',
        writer: {},
    })
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteWriter(modalProps.writer));
        setShow(false);
    }
    const history = useHistory()
    const handleClick = () => history.push('/writer/add')
    
   return( <div className="container">
        <DeleteModal show={show} setShow={setShow} title={modalProps.title} message={modalProps.message} handleDelete={handleDelete}/>
        <div className="d-flex justify-content-between my-5 ">
            <h2>List Of Writers</h2>
            <Button name="Writer" onClick={handleClick}/>
        </div>
        <WriterFilter/>
        <Writer setShow={setShow} setModalProps={setModalProps}/>
    </div>)
}

export default WritersContainer;