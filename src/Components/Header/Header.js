import { Search } from '@material-ui/icons'
import React from 'react'
import Logo from "../../logo.svg"
import "./Header.css"

function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={Logo} alt="robinhood logo" width={25}/>
            </div>
            <div className="header__searchBar">
                <div className="header__search__container">
                    <Search />
                    <form action="search">
                        <input type="text" name="searchBar" placeholder="Search..."/>
                    </form>
                </div>
            </div>
            <div className="header__menu">
                <a href="/">Free Stocks</a>
                <a href="/">Portfolio</a>
                <a href="/">Cash</a>
                <a href="/">Messages</a>
                <a href="/">Account</a>
            </div>
        </div>
    )
}

export default Header
