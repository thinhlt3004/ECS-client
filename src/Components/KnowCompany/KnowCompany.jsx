import React from 'react'
import {useStyles} from './style';
const KnowCompany = () => {
    const classes = useStyles();
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className={classes.container}>
            <div className={classes.left}>
                <h3>OUR SOLID BACKGROUND ON FINANCE</h3>
                <h2>Get to know about <span>our company</span></h2>
                <p>We are the world's leading enterprise development and solution support company, established in 1999, now have more than 20 years of experience in this field.</p>
                <p>We provide domestic and international services, telephone services, and related services to meet all customer needs and requirements in the field we are providing.</p>
            </div>
            <div className={classes.right}>
                <img src={`${PF}/images/about-image.jpg`} alt="about" />
            </div>
        </div>
    )
}

export default KnowCompany
