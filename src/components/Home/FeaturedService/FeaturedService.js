import React from 'react';
import './FeaturedService.css';
import featured from '../../../images/featured.png';
const FeaturedService = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                    <img className="img-fluid" src={featured} alt=""/>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Dental Care, on Your Terms</h1>
                        <p className="text-secondary my-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using lorem ipsumis that it has a more-or-less normal distribution of letters, a s opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;