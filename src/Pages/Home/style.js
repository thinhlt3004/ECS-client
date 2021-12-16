import {makeStyles} from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    container:{
        overflowX: 'hidden !important',
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
    },
    request:{
        margin: '0px',
        padding: '0px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '139px',
        width: '100%',
        backgroundColor: '#a4c639',
        color: '#ffffff',
    },
    content:{
        marginTop: '10px',
        lineHeight: '22.5px',
        fontSize: '15px',        
    },
    title:{
        fontSize: '22px',
        fontWeight: '600',
    },
    btn:{
        color: '#ffffff !important',
        border : '2px solid #ffffff !important',
        borderRadius: '30px !important',
        fontWeight: '700 !important',
        fontSize: '13px !important',
        lineHeight: '19.5px !important',
        padding: '10px 28px !important',
    }
}));