import React from "react";
import "./blog.css";
import Image1 from "../../assets/blog-1.svg";
import Image2 from "../../assets/blog-2.svg";
import Image3 from "../../assets/blog-3.svg";
import Image4 from "../../assets/blog-4.svg";

const Blog = () => {
    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Interests</h2>

            <div className="blog__container grid">
                <div className="blog__card">
                    <div className="blog__thumb">
                        <img src={Image1} alt="" className="blog__img"/>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Traditional and digital drawing</h3>
                    </div>
                </div>

                <div className="blog__card">
                    <div className="blog__thumb">
                        <img src={Image2} alt="" className="blog__img"/>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Read and write novels</h3>
                    </div>
                </div>

                <div className="blog__card">
                    <div className="blog__thumb">
                        <img src={Image3} alt="" className="blog__img"/>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Go to the gym</h3>
                    </div>
                </div>

                <div className="blog__card">
                    <div className="blog__thumb">
                        <img src={Image4} alt="" className="blog__img"/>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Play videogames</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog;