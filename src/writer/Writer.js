import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom";

export const Writer = (props) => {
    const writers = useSelector((state)=>state.writer);
    const books = useSelector((state)=>state.book);
    const history = useHistory()
    const getWriterBooks = (id) => {
        const bookCount = books.filter((item)=>item.writer.id === id);
        return bookCount.length
    }
    const handleClick = (writer) => {
        props.setShow((old)=>!old)
        props.setModalProps({
            message:`Are you sure to delete ${writer.firstName} ${writer.lastName} with him/her ${getWriterBooks(writer.id)} book(s)`,
            writer: writer,
        })
    }

    const handleEdit = (id) => {
        history.push(`/writer/edit/${id}`)
    }
    return (
        <table className="table">
            <thead>
					<tr>
						<th scope="col">ID</th>
						<th scope="col">Name</th>
						<th scope="col">Book's count</th>
					</tr>
			</thead>
            <tbody>
                    {writers.map((writer,index)=>(
                        <tr key={index}>
                            <td>{writer.id}</td>
                            <td>{`${writer.firstName} ${writer.lastName}`}</td>
                            { <td >{getWriterBooks(writer.id)}</td> }
                            <td><button className="btn btn-danger" onClick={()=>handleClick(writer)}>Delete</button></td>
                            <td><button className="btn btn-info" onClick={()=>handleEdit(writer.id)}>Edit</button></td>
                        </tr>
                    ))}
                </tbody>
        </table>
    )
}