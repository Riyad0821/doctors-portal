import React from 'react';
import './Doctors.css';
import doctorImg from '../../../images/doctor.png';
import Doctor from '../Doctor/Doctor';

const doctorsData = [
    {
        name: 'Dr. Fakhrul Islam',
        phone: '+0123456789', 
        img: doctorImg
    },
    {
        name: 'Dr. Rafiqul Islam',
        phone: '+0123456789', 
        img: doctorImg
    },
    {
        name: 'Dr. Jamal Islam',
        phone: '+0123456789', 
        img: doctorImg
    }
]
const Doctors = () => {
    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center text-main mb-5"> Our Doctors</h5>
                <div className="row">
                    {
                        doctorsData.map(doctor => <Doctor doctor={doctor} key={doctor.name}></Doctor>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;