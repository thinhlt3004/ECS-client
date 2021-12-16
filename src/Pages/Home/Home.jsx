import { Button } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { AboutCompany, AboutSolution, Brand, Header, Person, Service } from '../../Components';
import {useStyles} from './style';
const Home = () => {
    const classes = useStyles();
    const history = useHistory();
    const handleClick = () => {
        history.push('/contact-us');
    }
    return (
        <div className={classes.container}>
            <Header type="home"/>
            <div className={classes.request}>
                <div className={classes.left}>
                    <div className={classes.title}>Request a call back right now ?</div>
                    <div className={classes.content}>Mauris ut dapibus velit cras interdum nisl ac urna tempor mollis.</div>
                </div>
                <div className={classes.right}>
                    <Button variant="outlined" className={classes.btn} onClick={handleClick}>Contact Us</Button>
                </div>
            </div>
            <Service/>
            <AboutSolution/>
            <AboutCompany/>
            <Brand/>
            <Person/>
        </div>
    )
}

export default Home
