import React, { useState } from "react";
import "./Navbar.css"
// import MenuIcon from "@mui/icons-material/Menu";
import { Link } from 'react-router-dom'
const SidebarData = [
    {
        title: 'Home',
        path: '/',
        cName: 'nav-text'
    },
    {
        title: 'Liked videos',
        path: '/likedVidPage',
        cName: 'nav-text'
    },
    {
        title: 'Watch Later',
        path: '/watchLater',
        cName: 'nav-text'
    }
]

// const Menu = () => {
//     return(
//     <button>Menu</button>)
// }

export function Navbar(){
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () =>{
        setSidebar(!sidebar)
    }
    return(
        <div className="nav-container">
            <div className="menu-items">
                <ul className="menu-items">
                    <Link to = "#"><li className="list-item-left"><Link to ="#" onClick ={showSidebar}>Menu</Link></li></Link>
                    <nav className = { sidebar ? "nav-menu active" : "nav-menu"}>
                        <ul className="nav-menu-items">
                            <li className = "navbar-toggle">
                                <Link to = "#" className="menu-bars" onClick={showSidebar} >
                                    Close
                                </Link>
                            </li>
                            {SidebarData.map((item, index) => {
                                return (
                                    <li key ={index} className={item.cName}>
                                        <Link to ={item.path} className="nav-text-link">
                                            {item.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    <li className="list-item-left"><a href ="/" className="logo-link">
                        <div className="logo">Animedio</div>
            </a></li>
                </ul>
            </div>
            
            
            <div className="serch-bar">
                <input className="nav-input" type="text" placeholder="Search" />
            </div>
            <div className="menu-items">
                <ul className="menu-items">
                    <li className="list-item"><Link className="menu-link" to ="/login">Login</Link></li>
                </ul>
            </div>
        </div>
    )
}