import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    container:{
        minHeight: '100vh', 
        paddingBottom: '100px',      
        backgroundColor: '#f7f7f7',
        '& > h2':{
            color: '#1e1e1e',
            fontSize: '36px',
            fontweight: 600,
            lineHeight: '43.2px',
            textAlign: 'center',
            padding: '140px 205px 0px 205px',
        },
        '&  span':{
            fontSize: '36px',
            fontweight: 600,
            lineHeight: '43.2px',
            textAlign: 'center',
            color: '#a4c639',           
        },
        '& > h4': {
            color: '#666666',
            fontSize: '15px',
            letterSpacing: '1px',
            lineHeight: '22.5px',
            textAlign: 'center',
            textTransform: 'uppercase',
            marginTop: '25px',
            marginBottom: '70px',
            fontWeight:300,
        }
    },
    peopleContainer:{
        display: 'flex',
        padding: '0px 20px',
        alignItems: 'center',
        justifyContent: 'center',

    },
    people:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginRight: '10px',
        padding: ' 15px 10px',
    },
    topContainer:{
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: '0px 20px',
        width: '350px',
        height: '300px',
        paddingTop: '40px',
        '& > h2':{
            fontSize: '19px',
            fontWeight: 700,
            letterSpacing: '1px',
            lineHeight: '22.8px',
            paddingTop: '20px',
        },
        '& > h4':{
            color: '#a4c639',
            fontSize: '14px',
            fontWeight: 600,
            lineHeight: '21px',
            marginTop: '10px',
        },
        '& > p': {
            textAlign: 'center',
            fontSize: '14px',
            lineHeight: '30px',
            marginTop: '10px',
            paddingBottom: '20px',
        }
    },
    img:{
        borderRadius: '50%',
        marginTop: '25px',
        width: '230px',
        height: '230px',
        objectFit: 'cover',
    }
}))