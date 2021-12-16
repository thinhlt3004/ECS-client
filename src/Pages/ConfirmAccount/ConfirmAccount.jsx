import React, { useEffect } from 'react'
import {Header, TeamMember} from './../../Components';
import { useParams } from 'react-router-dom';
import {confirmAccount} from './../../Api/index';
import { useHistory } from 'react-router-dom';
const ConfirmAccount = () => {
    const param = useParams().token;
    const history = useHistory();
    useEffect(() => {
        if(param){
            const confirm = async () => {
                try {
                    const res = await confirmAccount(param);
                    if(res.status === 200){
                        console.log('done');
                    }
                } catch (error) {
                    history.push('/not-found');
                }
            }
            confirm();
        }
    },[param, history]);
    return (
        <div>
            <Header type="confirm-account"/>
            <TeamMember/>
        </div>
    )
}

export default ConfirmAccount
