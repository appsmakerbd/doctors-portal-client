import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import chair from '../../../images/chair.png';

const HeaderMiddle = () => {
    return (
        <main className="container header-middle">
            <Row className="d-flex align-items-center">
                <div className="col-lg-4 col-md-4 col-sm-6 content-box">
                    <h1 className="text-capitalize">Your new smile<br/>starts here</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat  temporibus  accusamus distinctio! quasi molestias minima repudiandae distinctio eius tempore praesentium a, autem optio non!</p>
                    <Link to="/" className="btn btn-primary">Get Appointment</Link>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 offset-lg-2 offset-md-2 image-box">
                    <img src={chair} alt="Chair" className="img-fluid"/>
                </div>
            </Row>
        </main>
    );
};

export default HeaderMiddle;