import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';


export default function Header() {
    return (
        <div className="header">

            <h1>This is the header</h1>

            <div className="header__left">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt=""/>
                <div className="header__search">
                <SearchIcon />
                
                    <input type="text"/>
                </div>
            </div>
            <div className="header__left"></div>


        </div>
    )
}
