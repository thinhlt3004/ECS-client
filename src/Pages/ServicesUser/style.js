import {makeStyles} from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    title:{
        textAlign: 'center',
        paddingTop: '50px',
        color: '#a4c639',
        textTransform: 'uppercase',
        fontSize: '30px'
    },
    serviceContainer:{
        position: 'relative',
        overflow: 'hidden',
    },
    serviceList:{
        display: 'flex',
        padding: '15px 150px',
        alignItems: 'center',
        // justifyContent: 'center',
        marginTop: '40px',
        flexDirection: 'column',
        minHeight: '80vh',
        position: 'relative',
        zIndex: 999,
    },
    msg:{
        fontSize: '20px',
        fontWeight: 'bold',
        textAlign: 'center',
        textDecoration: 'underline',
    },
    tableHeader:{
        color: 'white !important',
        backgroundColor: 'black !important',
    },
    tbHeader:{
        color: 'white !important',
        fontWeight: '700 !important',
        textTransform: 'uppercase',
        fontSize: '16px !important',
    }
}))