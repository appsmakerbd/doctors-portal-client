import React from 'react';

const ServiceCard = (props) => {
    const { title, description, image } = props.service;
    return (

        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 mb-2 serviceCard text-center">
            <div className="inner-box">
                <img src={image} alt={title} className="img-fluid"/>
                <h4>{title}</h4>
                <small className="text-secondary">{description}</small>
            </div>
        </div>
    );
};

export default ServiceCard;