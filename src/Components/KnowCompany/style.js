import {makeStyles} from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    container:{
        height: '100vh',
        padding: '140px 205px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    left:{
        flex:1,
        display: 'flex',
        flexDirection: 'column',
        marginRight: '45px',
        justifyContent: 'center',
        // justifyContent: 'space-around',
        height: '100%',
        '& > h3':{
            color: '##666666',
            fontSize: '15px',
            letterSpacing: '1px',
            lineHeight: '22.5px',
            textTransform: 'uppercase',
            marginBottom: '10px',
        },
        '& > h2': {
            fontSize: '36px',
            fontWeight: 600,
            lineHeight: '43.2px',
        },
        '& span':{
            color: '#a4c639',
            fontSize: '36px',
            fontWeight: 600,
            lineHeight: '43.2px',
        },
        '& > p':{
            color: '#666666',
            fontSize: '14px',
            lineHeight: '30px',
            marginTop: '30px',
        },
        '& > Button':{
            marginTop: '30px',
            width: 'fit-content',
            backgroundColor: '#a4c639 !important',
            color : 'white !important',
            padding: '12px 30px !important',
            fontSize: '13px !important',
            fontWeight: '700 !important',
            borderRadius: '30px !important',
        }
    },
    right:{
        flex:1,
        zIndex: 3,
    }
}));