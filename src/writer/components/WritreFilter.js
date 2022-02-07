import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterWriter, removeFilterWriters } from "../writerActions";

//actions


export const WriterFilter = () => {
    const [form,setForm] = useState({
        name: ' ',
    });
    const [showBtn, setShowBtn] = useState(false);
    const dispatch = useDispatch();
    const onSubmit =()=> {
        dispatch(filterWriter(form))
        setShowBtn(true); // after filter the state, showAllBooks button will appear.
    }
    const handleShowAll = () => {
        dispatch(removeFilterWriters())
        document.getElementById('writer').value= ' ';
        setShowBtn(false);

    }
    return (
        <>
            <h5>Search writer:</h5>
            <form className="d-flex gap-2 flex-wrap my-4 align-items-end" onSubmit={(e)=>e.preventDefault()}>
                <div className="d-flex flex-column ">
                    <label htmlFor="writer" className="mb-1">Name:</label>
                    <input type="text" id="writer" placeholder="Name" onChange={(e)=>setForm((prevform)=>({...prevform, name:e.target.value.trim()}))}/>
                </div>
                <div>
                    {showBtn && <button type="button" className="btn btn-primary mx-2" onClick={handleShowAll}>Show All Writers</button>}
                    <button className="btn btn-primary" type="submit" onClick={onSubmit}>Search</button>
                </div>
            </form>
        </>
    )
}