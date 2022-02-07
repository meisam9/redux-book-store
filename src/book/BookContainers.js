
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"
import { Button } from "../app/common/Button"
import {DeleteModal} from '../app/common/Modal';
import {BookFilter} from './components/BookFilter';
import { Book } from "./Book"
import {deleteBook} from "./bookActions"
export const BookContainer = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [modalProps, setModalProps] = useState({
        book: {},
        message:'',
    })
    const handleClick = () => history.push('/book/add');
    const handleDelete = () => {
        dispatch(deleteBook(modalProps.book));
        setShow(false);
    }

   return( <div className="container">
       <DeleteModal show={show} setShow={setShow} message={modalProps.message} handleDelete={handleDelete}/>
        <div className="d-flex justify-content-between my-5 ">
            <h2>List Of Books</h2>
            <div>
            <Button name="Book" onClick={handleClick}/>
            </div>
        </div>
        <BookFilter />
        <Book setShow={setShow} setModalProps={setModalProps}/>
    </div>)
}