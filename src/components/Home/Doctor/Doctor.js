import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Doctor.css';
const Doctor = ({doctor}) => {
    return (
        <div className="col-md-4 col-sm-6 text-center">
            <img src={doctor.img} style={{height: '200px'}} alt=""/>
            <h4>{doctor.name}</h4>
            <p><FontAwesomeIcon className="text-center" icon={faPhoneAlt}/>{doctor.phone}</p>

        </div>
    );
};

export default Doctor;