import { Link } from "react-router-dom"
export const Navbar = () => {
    return(
        <div className="bg-dark flex-row" >
            <nav className="nav ">
                <Link to={'/'} className="nav-link" aria-current="page" href="#">books</Link>
                <Link to='/writers' className="nav-link" href="#">writers</Link>
            </nav>
        </div>
    )
}