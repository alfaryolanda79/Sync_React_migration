import "./header.css";
import logo from "../../assets/images/logo.svg";

import Button from "../atoms/buttons/Button";


function Header(){
    return(
        <>
            <header className="header">
                    <a className="logo_navbar" href="/home">< img src={logo} alt="logo"/></a>
                    <nav className="navbar">
                        <a className="nav_list" href="#description">DESCRIPTION</a>
                        <a className="nav_list" href="#features">FEATURES</a>
                        <a className="nav_list" href="#screens">SCREENS</a>
                        <select id="nav_dropdown nav_list" name="nav_dropdown">
                                <option value="1">EXTRA</option>
                                <option value="2">ARTICLE DETAILS</option>
                                <option value="3">TERMS CONDITIONS</option> 
                                <option value="4">PRIVACY POLICY</option>
                        </select>
                    </nav>
                    <Button className={'nav_button'} button_content={'DOWNLOAD'}></Button>
            </header>
        </>
    )
}

export default Header;