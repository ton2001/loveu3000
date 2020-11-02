import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import './love1_copy.css'
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';

function love1_copy() {
    return (
        <div className="lovee2">
            <IconButton>
                <FavoriteRoundedIcon fontSize="large"  className="love1"/>
            </IconButton>
            <IconButton className="swipeButtons_repeat">
                <FavoriteRoundedIcon fontSize="large" className="love1" />
            </IconButton>

        </div>

        
        
    )
}

export default love1_copy