import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import './Blogs.css';
import wilson from '../../../images/wilson.png';

const blogData = [
    {
        title: 'Check at least a doctor in a year for your teeth',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At optio accusamus nesciunt iusto. Cupiditate, sequi. ', 
        author: 'Dr. Cudi',
        authorImg: wilson,
        date: '25 Oct 2020'
    },
    {
        title: 'Two time brush in a day can keep you healthy',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem aut vero nostrum quibusdam temporibus numquam? ',
        author: 'Dr. Sinthia',
        authorImg: wilson,
        date: '25 Oct 2020'
    },
    {
        title: 'The tooth cancer is taking a challenge',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, illum! Quos ea nesciunt doloribus similique! ',
        author: 'Dr. Fahad',
        authorImg: wilson,
        date: '25 Oct 2020'
    }
]
const Blogs = () => {
    return (
        <section className="blogs my-5">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="text-uppercase text-primary">our blog</h5>
                    <h1>From Our Blog News</h1>
                </div>
                <div className="card-deck mt-5">
                    {
                        blogData.map(blog => <BlogPost blog = {blog} key = {blog.title}/>)
                    }

                </div>
            </div>

        </section>
    );
};

export default Blogs;