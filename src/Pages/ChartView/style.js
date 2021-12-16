import {makeStyles} from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    chartContainer:{
        width: '100%',
        position: 'relative',
        '& > h2':{
            textAlign: 'center',
            margin: '100px auto 0px',
            textTransform: 'uppercase',
        }
    },
    chart:{
        minHeight: '90vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnBlock:{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginRight: '30px !important',
        justifyContent: 'flex-end',
        marginBottom: '-50px',
    },
    btnDownReport:{
        margin: '30px 200px 0px 30px !important',
        backgroundColor: '#a4c639 !important',
        color: 'white !important',
        fontWeight: 'bold !important',
        fontSize: '14px !important',
        textTransform: 'none !important'
    },
    btnDownReportDisabled:{
        margin: '30px 200px 0px 30px !important',
        backgroundColor: '#grey !important',
        color: 'white !important',
        fontWeight: 'bold !important',
        fontSize: '14px !important',
        textTransform: 'none !important'
    },
    infoBlock:{
        margin: '30px 50px 0px 0px',
        '& > p':{
            marginBottom: '10px'
        },
        '& > div > span':{
            marginRight: '10px',
        }
    }

}));