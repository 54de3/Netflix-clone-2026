import React from 'react';
import "./header.css";
import NetflixLogo from '../../assets/images/Netflix.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
    return (
        <div className='header_outer_container'>
            <div className='header_container'>
                <div className='header_left'>
                    <img src={NetflixLogo} alt="Netflix logo" className='netflix_logo'/>
                    <nav className='header_navigation'>
                        <ul>
                            <li className='active'>Home</li>
                            <li>TV Shows</li>
                            <li>Movies</li>
                            <li>Latest</li>
                            <li>My List</li>
                            <li>Browse by Languages</li>
                        </ul>
                    </nav>
                </div>
                <div className='header_right'>
                    <SearchIcon className='header_icon'/>
                    <NotificationsNoneIcon className='header_icon'/>
                    <div className='profile_section'>
                        <AccountBoxIcon className='profile_icon'/>
                        <ArrowDropDownIcon className='dropdown_icon'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;