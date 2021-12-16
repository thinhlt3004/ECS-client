import React from 'react'
import { useStyles } from './style'
const Circle = ({direction}) => {
    const classes = useStyles({direction});
    return (
        <div className={classes.circle}>
            
        </div>
    )
}

export default Circle
