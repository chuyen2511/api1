import React from "react";
import './navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import { NavLink } from "react-router-dom";


const Navbar =({setSidebar})=>{
    return(
    
        <nav className="flex-div">
            <div className="nav-left flex-div">

                {/* //on Click để làm thay đổi trang thái của state trong trường hợp này nó là 
                //prev giá trị nó là sidebar khi kiểm tra nó là false thì trả về false và ngược lại  */}
                
                <img className="menu-icon" onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon}/>
                <NavLink to='/'> <img className="logo" src={logo}/></NavLink>
            </div>

            <div className="nav-middle flex-div">
                <div className="search-box flex-div">
                    <input type='text' placeholder='search'/>
                    <img className="search_icon" src={search_icon}/>
                </div>
            </div>

            <div className="nav-right flex-div">
            <img  src={upload_icon}/>
            <img  src={more_icon}/>
            <img  src={notification_icon}/>
            <img className="user-icon"  src={profile_icon}/>
            </div> 
        </nav>


    );
};

export default Navbar;