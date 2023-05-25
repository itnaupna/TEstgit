import React from 'react';
import { Link } from 'react-router-dom';
function Header (){
    return (
        <header className='header'>
            <strong>Header</strong>
            <ul>
                <li>
                    <Link to={"/"}>홈</Link>
                </li>
                <li>
                    <Link to={"/profile"}>프로필</Link>
                </li>
            </ul>
        </header>
    );
}
export default Header;