import React from 'react'
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <nav id='navbar' className="navbar px-1 navbar-dark " style={{ background: 'black', color: 'white', zIndex: '1', position: 'sticky', top: '0' }}   >
    <div className="container-fluid">
        <Link to='/' className="navbar-brand text-dark bg-info rounded-3 p-1" >
            {/* <img src={Logo} width='70px' alt="Logo" /> */}
            <h2>Logo</h2>
        </Link>

        <div className="justify-content-end " >
            <ul className="navbar-nav ">
                <li className="nav-item ">
                <Link className="nav-link bg-success p-1 text-light rounded-2 mx-1" to='/content' > Employee</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>  )
}

export default Nav