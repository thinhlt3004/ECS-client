import React, { useLayoutEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {authState$} from './../../redux/selectors/index';
import * as notifcationsActions from './../../redux/actions/NotificationActions';
import {AboutSolution, Brand, ServicesForm, Header, TeamMember} from './../../Components';
import { useHistory } from 'react-router-dom';
const Payment = () => {
    const user = useSelector(authState$).data;
    const dispatch = useDispatch();
    const history = useHistory();
    useLayoutEffect(() => {
        if(!user){
            dispatch(notifcationsActions.openNotifications('Payment need login to continue'));
            history.push('/');
        }
    },[user, dispatch, history])
    return (
        <div>
            <Header type="payment"/>
            <ServicesForm/>
            <AboutSolution/>
            <Brand/>
            <TeamMember/>
        </div>
    )
}

export default Payment
