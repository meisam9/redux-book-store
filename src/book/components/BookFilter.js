import { useState } from "react"
import { useDispatch } from "react-redux"
import { filterBook, removeFilterBooks } from "../bookActions";

export const BookFilter = () => {
    const [form, setForm] = useState({
        title:'',
        writer:'',
        rate:'',
    });
    const [showBtn, setShowBtn] = useState(false);
    const dispatch = useDispatch();
    const onSubmit = () => {
        dispatch(filterBook(form));
        setShowBtn(true); // after filter the state, showAllBooks button will appear.
    }
    const handleShowAll = () => {
        dispatch(removeFilterBooks())
        document.getElementById('title').value= ' ';
        document.getElementById('writer').value= ' ';
        document.getElementById('rate').value= '0';
        setShowBtn(false);

    }
    return (
        <>
        <h4>Filter Books:</h4>
        <form className="d-flex justify-content-between flex-wrap my-4" onSubmit={(e)=> e.preventDefault()}>
            <input type="text" placeholder="title" id="title" onChange={(e)=>setForm((prevform)=>({...prevform, title:e.target.value.trim()}))}/>
            <input type="text" placeholder="writer" id="writer" onChange={(e)=>setForm((prevform)=>({...prevform, writer:e.target.value.trim()}))}/>
            <select className="custom-select" id="rate" onChange={(e)=>setForm((prevform)=>({...prevform, rate:e.target.value}))}>
                <option value="0" defaultValue>rating (gt)</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <div>
            {showBtn && <button type="button" className="btn btn-primary mx-2" onClick={handleShowAll}>Show All Books</button>}
            <button className="btn btn-primary" type="submit" onClick={onSubmit}>Search</button>
            </div>
        </form>
        </>
    )
}