import {  useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { Button } from "../../app/common/Button";
import {Notification} from "../../app/common/Notification";
import { addBook } from "../bookActions";


const BookAdd = () => {
    const writers = useSelector((state)=>state.writer);
    const dispatch = useDispatch();
    const history = useHistory();

    //states
    const [book, setBook] = useState({
        title:'',
        writer:{
            id:'',
            firstName:'',
            lastName:'',
        },
        date:'',
        rate:'',
        price: ' ',
    })
    const [show, setShow] =useState(false);
    const setClose = useCallback(() => setShow(false),[]); // passing to notification component to close the alert.
    
    //functions
    const handlGoToWriter = () => {
        history.push('/writer/add')
    }
    const goToWriter = () => (
        <div className="container mt-4">
        <div className="mb-1">please add atleast a writer first</div>
        <div>go to <Button name="Writer" onClick={handlGoToWriter}/> </div>
        </div>
        
    )
    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setBook((prevBook) => ({ ...prevBook, [name]: value}))
    }
    const handleWriterChange = (e) => {
        e.preventDefault()
        const newWriter = writers.filter(writer=>writer.id === e.target.value)
        setBook(prevBook=>({...prevBook, writer:newWriter[0]}))
    }
    const  handleClick = () => {
        dispatch(addBook(book))
        document.querySelector('#title').value = " ";
        document.querySelector('#price').value = " ";
        setShow(true);
      }
    return (
        <>
        {writers.length ?<form className="container" onSubmit={(e)=>e.preventDefault()}> 
        <div className="form">
            <div >
                <label htmlFor="title">title</label>
                <br/>
                <input 
                    type="text"
                    placeholder={"title"}
                    id="title"
                    name="title"
                    onChange={handleChange}
                    
                    />
            </div>
            <div >
                <label htmlFor="writer">writer</label>
                <br/>
                <select className="custom-select" onChange={handleWriterChange} id="writer" name="writer">
                <option defaultValue={''}>writer</option>
                {writers.map((writer,index) => (
                    <option value={writer.id} key={index}>{`${writer.firstName}  ${writer.lastName}`}</option>
                ))}
                </select>
            </div>
            <div >
                <label htmlFor="price">price</label>
                <br/>
                <input 
                    type="text"
                    placeholder={"price"}
                    id="price"
                    name="price"
                    onChange={handleChange}
                    />
            </div>
            <div >
                <label htmlFor="date">publish date</label>
                <br/>
                <input 
                    type="date"
                    placeholder={"publish date"}
                    id="date"
                    name="date"
                    onChange={handleChange}
                    />
            </div>
            <div >
                <label htmlFor="rating">rating</label>
                <br/>
                <select className="custom-select" onChange={handleChange} id="rating" name="rate">
                    <option defaultValue={'0'}>rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
        </div>
        <button type="button" className="btn btn-primary mt-2" onClick={handleClick}>add</button>
        <Notification show={show} message={'Book'} onClose={setClose} />
    </form> : goToWriter() // if we dont have an author go to writer function runs, its warns you to pls add an author first.
        
        }
        </>
        
    )
}

export default BookAdd;