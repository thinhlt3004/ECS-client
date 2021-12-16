import {makeStyles} from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    container:{
        height: '100vh',
    },
    title:{
        color: '#a4c639',
        fontSize: '36px',
        fontWeight: 600,
        lineHeight: '43.2px',
        textAlign: 'center',
        marginTop: '140px',
    },
    description:{
        color: '#666666',
        fontSize: '15px',
        letterSpacing: '1px',
        lineHeight: '22.5px',
        textAlign: 'center',
        textTransform: 'uppercase',
        marginTop: '15px',
    },
    listService:{
        display: 'flex',
        margin: '80px 205px 140px 205px',
        justifyContent: 'space-between',

    },
    img:{
        width: '100%',
    },
    content:{
        backgroundColor: '#f7f7f7',
        color: '#212529',
        padding: '30px',
        '& h2':{
            fontSize: '20px',
            fontWeight: 'bold',
            letterSpacing: '0.25px',
            lineHeight: '25px',
            marginBottom: '15px',
        },
        '& p':{
            fontSize: '14px',
            marginBottom: '20px',
            lineHeight: '30px',
        },
        '& Button':{
            backgroundColor: '#a4c639 !important',
            color: '#ffffff !important',
            borderRadius: '30px !important',
            fontSize: '13px !important',
            padding: '12px 30px !important',
            textTransform: 'uppercase',
            fontWeight: 700,
        }
    },
    serviceItem:{
        width: '350px',
        marginRight: '30px'
    },
    desc:{
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        overflow:'hidden',
        '-webkit-line-clamp': 3,
        '-webkit-box-orient': 'vertical',
    }
}));