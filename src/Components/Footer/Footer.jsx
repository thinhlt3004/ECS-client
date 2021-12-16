import React from 'react'
import {useStyles} from './style';
const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <span>Copyright © 2020 Financial Business Co., Ltd.</span>
        </div>
    )
}

export default Footer
