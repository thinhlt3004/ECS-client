import React from 'react'
import { useStyles } from './style'
const Brand = () => {
    const classes = useStyles();
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className={classes.container}>
            <img src={`${PF}/images/Brand1.jpg`} height='200' width='400' style={{objectFit: 'cover'}} alt="Brand1" />
            <img src={`${PF}/images/Brand2.jpg`}  height='200' width='400' style={{objectFit: 'cover'}} alt="Brand2" />
            <img src={`${PF}/images/Brand3.jpg`}  height='200' width='400' style={{objectFit: 'cover'}} alt="Brand3" />
            <img src={`${PF}/images/Brand5.jpg`}  height='200' width='400' style={{objectFit: 'cover'}} alt="Brand4" />
            <img src={`${PF}/images/Brand6.jpg`}  height='200' width='400' style={{objectFit: 'cover'}} alt="Brand5" />
            <img src={`${PF}/images/Brand7.jpg`}  height='200' width='400' style={{objectFit: 'cover'}} alt="Brand7" />
        </div>
    )
}

export default Brand
