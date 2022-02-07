import { useSelector } from "react-redux"

export const Book = (props) => {
    const state = useSelector((state)=>state.book);

    const handleClick = (book) => {
        props.setShow((old)=>!old)
        props.setModalProps({
            message:`Are you sure to delete ${book.title} Book`,
            book: book,
        })
    }
    return(
            <table className="table">
            <thead>
					<tr>
						<th scope="col">title</th>
						<th scope="col">publish date</th>
						<th scope="col">price</th>
						<th scope="col">rating</th>
						<th scope="col">writer</th>
					</tr>
				</thead>
                <tbody>
                    {state.length? state.map((item,index)=>(
                        <tr key={index}>
                            <td>{item.title}</td>
                            <td>{item.date}</td>
                            <td>$ {item.price}</td>
                            <td>{item.rate}</td>
                            <td>{`${item.writer.firstName} ${item.writer.lastName}`}</td>
                            <td><button className="btn btn-danger" onClick={()=>handleClick(item)}>Delete</button></td>
                        </tr>
                    )): <tr>
                            <td>No Result</td>
                        </tr>}
                </tbody>
            </table>
    )
}