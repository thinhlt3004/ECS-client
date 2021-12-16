import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    container: {
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        '& > h2':{
            padding: '100px 205px 15px',
            textAlign: 'center',
            fontSize: '36px',
            fontWeight: 600,
            lineHeight: '43.2px',          
        },
        '& > h2 > span':{
            color: '#a4c639',
        },
        '& > h4':{
            color: '#666666',
            fontSize: '15px',
            letterSpacing: '1px',
            lineHeight: '22.5px',
            textTransform: 'uppercase',
            textAlign: 'center',
        },
    },
    payment:{
        display: 'flex',
        margin: '50px 100px 70px',
    },
    paymentForm:{
        flex: 2,
        backgroundColor: '#f7f7f7',
        marginRight: '20px',
        padding: '30px 100px',
        borderRadius: '30px',
        '& > h3':{
            fontSize: '20px',
            fontWeight: 600,
            marginBottom: '10px',
        },
        '& > div':{
            marginBottom: '10px',
        }
        
    },
    paypal:{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    bill:{
        backgroundColor: '#f7f7f7',
        padding: '30px',
        borderRadius: '30px',
        width: '100%',
        marginBottom: '10px',
        '& > h3':{
            marginBottom: '10px',
        }
    },
    billItem:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '20px',
    },
    billTotal:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontWeight: 700,
        fontSize: '25px',
    },
    serviceDiv:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& > div > h3': {
            marginBottom: '15px',
        }
    },
    TextField:{
        width: "300px",
    },
    inputProduct:{
        width: "300px",
        // padding: '17px 15px'
    }
}));