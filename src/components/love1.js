import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import './love1.css'
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';

function love1() {
    return (
        <div className="lovee22">
            <IconButton>
                <FavoriteRoundedIcon fontSize="large"  className="love11"/>
            </IconButton>
            <IconButton className="swipeButtons_repeat">
                <FavoriteRoundedIcon fontSize="large" className="love11" />
            </IconButton>

        </div>

        
        
    )
}

export default love1