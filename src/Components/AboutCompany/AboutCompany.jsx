import React from 'react'
import { useStyles } from './style'
const AboutCompany = () => {
    const classes = useStyles();
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className={classes.container}>
            <div className={classes.left}>
                <img className={classes.img} src={`${PF}/images/more-info.jpg`} alt="more-info" />
            </div>
            <div className={classes.right}>
                <h4>WHO WE ARE</h4>
                <h3>Get to know about <span className={classes.Our}>our company</span></h3>
                <p>We are the world's leading enterprise development and solution support company, established in 1999, now have more than 20 years of experience in this field.</p>
                <p>We provide domestic and international services, telephone services, and related services to meet all customer needs and requirements in the field we are providing.</p>
            </div>
        </div>
    )
}

export default AboutCompany
