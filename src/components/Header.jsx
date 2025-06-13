
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { FaInfoCircle, FaHome, FaUser } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {

    const linkClass = ({ isActive }) =>
        `px-4 fw-semibold nav-link d-flex align-items-center ${isActive ? 'text-white' : 'text-black'}`;

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="warning" data-bs-theme="dark" className="d-flex justify-content-between px-4 ">
                <div><img src="/src/assets/logo.png" alt="Logo" height="50" /></div>
                <Nav>
                    <NavLink to="/" className={linkClass}><FaHome size={15} className="mx-1" /> Home </NavLink>
                    <NavLink to="/about" className={linkClass}><FaInfoCircle size={15} className="mx-1" /> About</NavLink>
                    <NavLink to="/users" className={linkClass}><FaUser size={15} className="mx-1" /> Users</NavLink>
                </Nav>
            </Navbar>
        </>
    )

}

export default Header;