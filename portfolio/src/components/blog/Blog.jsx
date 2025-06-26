import React from "react";
import "./blog.css";
import Image1 from "../../assets/blog-1.svg";
import Image2 from "../../assets/blog-2.svg";
import Image3 from "../../assets/blog-3.svg";
import Image4 from "../../assets/blog-4.svg";
import Card from "./InterestCard";

const Blog = () => {
    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Interests</h2>

            <div className="blog__container grid">
                <Card classNanme="blog__card" image={Image1} description={"Traditional and digital drawing"} color={"#3097e1" }/>
                <Card classNanme="blog__card" image={Image2} description={"Read and write novels"} color={"#ff9966" }/>
                <Card classNanme="blog__card" image={Image3} description={"Go to the gym"} color={"#ff3e92" }/>
                <Card classNanme="blog__card" image={Image4} description={"Play videogames"} color={"#2c3b46" }/>
            </div>
        </section>
    );
}

export default Blog;