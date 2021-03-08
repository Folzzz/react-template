import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import classNames from "classnames";

import {menuData} from "../../data/menuData";
// import travel from "../../traveller-blue.svg";
import logo from "../../logo.svg";
import "./navbar.css"
import Button from '../button/Button';

const Navbar = () => {

    //state to check nav-menu click
    const [click, setClick] = useState(false);
    //sign-up btn state
    const [button, setButton] = useState(false);


    //icon styles
    let iconStyles = { fontSize: "2em", color: "white"};

    let navMenuList = classNames({
        'nav_menu_list': true,
        'active': click
    })

    //toggle click state with menu icon
    const handleMenuClick = () => {
        setClick(!click);
    }

    //click state to false on click of nav links
    const closeMobileMenu = () => {
        setClick(false);
    }

    //show button based on screensize
    const showBtn = () =>{
        //check screen size is less than 960px
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    //call showbtn() on pageload
    useEffect(() => {
        showBtn();
    },[])

    //call showBtn() on window resize
    window.addEventListener('resize', showBtn);


    return (
        <>
            <nav className="nav">
                <div className="nav_container">

                    <Link to="/" className="nav_company_logo" onClick={closeMobileMenu}>
                        <img src={logo} alt="company logo"/>
                    </Link>

                    <div className="nav_menu_icon" onClick={handleMenuClick}>
                        { click ? <FaTimes style={iconStyles}/> : <FaBars style={iconStyles}/>}
                    </div>

                    <ul className={navMenuList}>
                        {
                            menuData.map((item,index) => (
                                <li className="nav_menu_item" key={index} onClick={closeMobileMenu}>
                                    <Link to={item.link} className={ item.mobile ? "nav_menu_links-mobile" : "nav_menu_links"}>{item.title}</Link>
                                </li>
                            ))
                        }
                        {
                            button &&
                            <li className="nav_menu_item"><Button buttonStyle="btn--outline">SIGN UP</Button></li>
                        }
                    </ul>
                    {/* if button state is true display sign-up */}
                    {/* {button && <Button buttonStyle="btn--outline">SIGN UP</Button> } */}
                </div>
            </nav>
        </>
    )

}

export default Navbar;