import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    container:{
        minHeight: '100vh',
        backgroundColor: '#f7f7f7',
        '& > h2':{
            paddingTop: '120px',
            textAlign: 'center',
            fontSize: '36px',
            fontWeight: 600,
            lineHeight: '43.2px',
        },
        '& > h2 > span':{
            fontSize: '36px',
            fontWeight: 600,
            lineHeight: '43.2px',
            color: '#a4c639',
        },
        '& > h4':{
            color :'#666666',
            textAlign: 'center',
            letterSpacing: '1px',
            fontSize: '15px',
            textTransform: 'uppercase',
            lineHeight: '22.5px',
            marginTop: '15px',
        }
    },
    teamList:{
        display: 'flex',
        padding : '80px 180px 120px',
        justifyContent : 'space-between',       
    },
    teamMember:{
        width: '330px',
        marginRight: '30px',
        zIndex: 3,
    },
    content:{
        padding: '30px 30px 50px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        height : '250px',
        '& > h3':{
            fontSize: '20px',
            fontWeight: 700,
            letterSpacing: '0.25px',
            lineHeight: '24px',
            marginBottom: '10px',
        },
        '& > h5': {
            fontSize: '14px',
            fontWeight: 600,
            lineHeight: '21px',
            marginBottom: '15px',
            color: '#a4c639',
        },
        '& > p':{
            color: '#666666',
            fontSize: '14px',
            lineHeight: '30px',
            marginBottom: '20px',
        }
    }
}));