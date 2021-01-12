import React from 'react';
import './Testimonials.css';
import wilson from '../../../images/wilson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';
import Testimonial from '../Testimonial/Testimonial';

const testimonialData = [
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi doloremque quia provident eveniet asperiores voluptatibus, quae dolorum sed magnam.',
        name: 'Wilson Harry',
        from: 'California',
        img: wilson
    },
    {
        quote: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nesciunt necessitatibus hic voluptas porro dicta, voluptatibus aperiam nostrum fugit beatae. ', 
        name: 'Ema Gomez',
        from: 'California',
        img: ema
    },
    {
        quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad esse quis nisi ea officia nesciunt neque quam aliquid consequatur vel!',
        name: 'Aliza Farari',
        from: 'California',
        img: aliza
    }
]
const Testimonials = () => {
    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 className="text-primary text-uppercase">Testimonial</h5>
                   <h1>What Our Patients <br/> Says</h1>
               </div>
               <div className="card-deck mt-5">
                   {
                       testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                   }
               </div>
           </div>
       </section>
    );
};

export default Testimonials;