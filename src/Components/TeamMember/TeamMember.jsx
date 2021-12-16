import React from 'react'
import {useStyles} from './style';
import  {teamMembers} from './../../dummyData';
const TeamMember = () => {
    const classes = useStyles();
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className={classes.container}>
            <h2>Our team <span>members</span></h2>
            <h4>Top management of the company</h4>
            <div className={classes.teamList}>
                {teamMembers.map((i, index) => (
                    <div className={classes.teamMember} key={index}>
                        <img style={{width: '100%'}} src={`${PF}/images/${i.img}`} alt={i.img} />
                        <div className={classes.content}>
                            <h3>{i.name}</h3>
                            <h5>{i.position}</h5>
                            <p>{i.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TeamMember
