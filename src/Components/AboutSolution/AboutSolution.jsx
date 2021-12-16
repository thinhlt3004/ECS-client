import { Button } from '@mui/material';
import React from 'react'
import  {useStyles} from './style';
import CountUp from 'react-countup';
import { useHistory } from 'react-router-dom';

const AboutSolution = () => {
    const classes = useStyles();
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const history = useHistory();
    const handleClick = () => {
        history.push('/about-us')
    }
    return (
        <div className={classes.container} style={{backgroundImage: `url(${PF}/images/fun-facts-bg.jpg)`, backgroundRepeat: 'none', backgroundSize: 'cover'}}>
            <div className={classes.left}>
                <h1>Our solutions for your business growth</h1>
                <p>We always listen and find the best solution to grow your business.</p>
                <p>As long as you give us the opportunity, the development and solution of our company will do it for you.</p>
                <Button onClick={handleClick}>read more</Button>
            </div>
            <div className={classes.right}>
                <div className={classes.rightItem}>
                    <CountUp className={classes.countUp} start={0} end={945} duration={3} />
                    <p>Work Hours</p>
                </div>
                <div className={classes.rightItem}>
                    <CountUp className={classes.countUp} start={0} end={1280} duration={3} />
                    <p>Great Reviews</p>
                </div>
                <div className={classes.rightItem}>
                    <CountUp className={classes.countUp} start={0} end={578} duration={3} />
                    <p>Projects Done</p>
                </div>
                <div className={classes.rightItem}>
                    <CountUp className={classes.countUp} start={0} end={26} duration={3} />
                    <p>Awards Won</p>
                </div>
            </div>
        </div>
    )
}

export default AboutSolution
