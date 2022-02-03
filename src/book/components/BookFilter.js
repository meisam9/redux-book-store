import { useState } from "react"

export const BookFilter = () => {
    const [form, setForm] = useState({
        title:'',
        writer:'',
        date:'',
        rate:'',
    })
    return (
        <form className="d-flex justify-content-between flex-wrap" onSubmit={(e)=> e.preventDefault()}>
            <input type="text" placeholder="title" onChange={(e)=>setForm((prevform)=>({...prevform, title:e.target.value.trim()}))}/>
            <input type="text" placeholder="writer" onChange={(e)=>setForm((prevform)=>({...prevform, writer:e.target.value.trim()}))}/>
            <input type="date" placeholder="publish date" onChange={(e)=>setForm((prevform)=>({...prevform, date:e.target.value}))}/>
            <select class="custom-select" onChange={(e)=>setForm((prevform)=>({...prevform, rate:e.target.value}))}>
                <option selected>rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button type="submit">Search</button>
        </form>
    )
}