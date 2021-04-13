import React from 'react';
import { Container, Row } from 'react-bootstrap';
import InfoCard from './InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const infoData = [
    {
        title: 'Opening Hours',
        description: 'Lorem ipsum dolor sit amet consectetur',
        icon: faClock,
        bgColor: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklain, NY 10063, United State',
        icon: faMapMarker,
        bgColor: 'dark'
    },
    {
        title: 'Contact Us Now',
        description: '+000 123 897867',
        icon: faPhone,
        bgColor: 'primary'
    }
]
const HeaderBusinessInfo = () => {
    return (
        <Container>
            <Row>
                {
                    infoData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </Row>
        </Container>
    );
};

export default HeaderBusinessInfo;