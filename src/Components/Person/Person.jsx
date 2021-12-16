import React from 'react'
import { useStyles } from './style';
import {People} from './../../dummyData';
const Person = () => {
    const classes = useStyles();
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className={classes.container}>
            <h2>What they say <span>about us</span></h2>
            <h4>TESTIMONIALS FROM OUR GREATEST CLIENTS</h4>
            <div className={classes.peopleContainer}>
                {People.map((i, index) => (
                    <div key={index} className={classes.people}>
                        <div className={classes.topContainer}>
                            <h2>{i.name}</h2>
                            <h4>{i.position}</h4>
                            <p>{i.desc}</p>
                        </div>
                        <img src={PF + '/images/' + i.img} className={classes.img} alt="people" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Person
