import {makeStyles} from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    leftBottom:{
        display: 'flex',
        '& > div':{
            marginRight: '20px'
        }
    },
    viewBtn:{
        padding: '10px 30px !important',
        borderRadius: '20px !important',
        backgroundColor: 'black !important',
        fontWeight: '700 !important',
        fontSize: '13px !important',
    }    
}))