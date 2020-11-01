import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person'; 
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link, useHistory } from 'react-router-dom';

function Header({ backButton, backPage }) {
    const history = useHistory();
    return (
        <div className="header">
            { backButton ? (
                <IconButton onClick = {() => history.replace(backButton)}>
                  <ArrowBackIosIcon fontSize="large" className="header_icon"/>
                </IconButton>
            ):(
                <Link to="/setting">
                  <IconButton>
                    <PersonIcon fontSize="large" className="header_icon"/>
                  </IconButton>
                </Link>
            )}
            <Link to="/">
            <img
                className="header_logo"
                src="https://www.vectorico.com/wp-content/uploads/2018/02/Tinder-Logo-506x458.png"
                alt=""
            
            />
            </Link>
            { backPage ? (
                <IconButton onClick = {() => history.replace(backPage)}>
                  <ArrowForwardIosIcon fontSize="large" className="header_icon"/>
                </IconButton>
            ):(
                <Link to="/chat">
            <IconButton>
                <ForumIcon fontSize="large" className="header_icon"/>
            </IconButton>
            </Link>

            )}
            
            
        </div>
    )
}

export default Header
