import React from 'react'
import {useStyles} from './style';
import {Services} from './../../dummyData';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
const Service = () => {
    const classes = useStyles();
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const history = useHistory();
    const handleClick = () => {
        history.push('/our-services');
    }
    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Financial Services</h1>
            <h4 className={classes.description}>ALIQUAM ID URNA IMPERDIET LIBERO MOLLIS HENDRERIT</h4>
            <div className={classes.listService}>
                {Services.map((i, index) => (
                    <div className={classes.serviceItem} key={index}>
                        <img className={classes.img} src={PF + '/images/' + i.img} alt={i.img} />
                        <div className={classes.content}>
                            <h2>{i.name}</h2>
                            <p className={classes.desc}>{i.desc}</p>
                            <Button variant="contained" onClick={handleClick}>Read More</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Service
