import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = ({ title }) => {

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
            <div className="navbar-header">
                   <h1> {title}</h1>
                </div>
                <div className="float-right">
                <ul className="navbar-nav  mr-auto">
                    <li className="nav-item">
                        <h3><Link to='/'>Home</Link></h3>
                    </li>
                    <li className="nav-item">
                    <h3><Link to='/editPost'>Edit post</Link></h3>
                    </li>
                    <li className="nav-item">
                    <h3><Link to='/newPost'>NewPost</Link></h3>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )

}
Navbar.defaultProps = {
    title: 'Blog Alkemy'
};
export default Navbar