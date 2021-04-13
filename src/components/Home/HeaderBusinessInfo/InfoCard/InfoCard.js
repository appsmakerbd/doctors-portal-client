import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../Home.css';

const InfoCard = (props) => {
    const { title, description, icon, bgColor } = props.info;
    return (
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 mb-2 infoCard text-white">
            <div className={` inner-box  d-flex justify-content-center custom-${bgColor}`}>
                <div>
                    <FontAwesomeIcon className="icon-size" icon={icon} />
                </div>
                <div className="ml-3">
                    <h4>{title}</h4>
                    <small>{description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;