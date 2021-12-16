import React from 'react'
import {Header, ServiceList, TeamMember} from './../../Components';
const ServicePage = () => {

    return (
        <div>
            <Header type="our-services" />
            <ServiceList/>
            <TeamMember/>
        </div>
    )
}

export default ServicePage
