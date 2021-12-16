import React from 'react'
import {AboutSolution, Brand, ContactInformation, Header} from './../../Components';
const Contact = () => {
    return (
        <div>
            <Header type="contact-us"/>
            <ContactInformation/>
            <AboutSolution/>
            <Brand/>
            <iframe title="maps" src="https://maps.google.com/maps?q=Av.+Lúcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="500px" frameborder="0" style={{border: 0, marginTop: '100px'}} allowfullscreen></iframe>
        </div>
    )
}

export default Contact
