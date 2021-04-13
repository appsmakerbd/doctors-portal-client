import React from 'react';
import { Container, Row } from 'react-bootstrap';
import s1 from '../../../images/s1.png';
import s2 from '../../../images/s2.png';
import s3 from '../../../images/s3.png';
import ServiceCard from './ServiceCard/ServiceCard';
const serviceData = [
    {
        title: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur. dolor sit amet consectetur',
        image: s1
    },
    {
        title: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur. dolor sit amet consectetur',
        image: s2
    },
    {
        title: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur. dolor sit amet consectetur',
        image: s3
    }
]


const HomeServices = () => {
    return (
        <Container className="home-service-area w-75">
            <Row>
                {
                    serviceData.map(service => <ServiceCard service={service}></ServiceCard>)
                }
            </Row>
        </Container>
    );
};

export default HomeServices;