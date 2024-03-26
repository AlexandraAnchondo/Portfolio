import React from 'react';
import "./services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";
import ServicesStack from './ServicesStack';

const data = [
    {
        id: 1,
        image: Image1,
        title: "UI/UX Design",
        description:
        "Crafting visually appealing and user-friendly interfaces for your web applications, ensuring an optimal user experience.",
    },
    {
        id: 2,
        image: Image2,
        title: "Web Development",
        description:
        "Building and maintaining high-quality web applications using Node.js, React, and MySQL, tailored to meet your specific requirements.",
    },
    {
        id: 3,
        image: Image3,
        title: "Database Management",
        description:
        "Efficiently organizing and managing your data with MySQL databases, ensuring data integrity and optimal performance for your applications.",
    },
];



const Services = () => {
    return <section className="services container section" id="services">
        <h2 className="section__title">Services</h2>

        <div className="services__container grid">
            {data.map(({id, image, title, description}) => {
                return (
                    <div className="services__card" key={id}>
                        <img src={image} alt="" className="services__img" />

                        <h3 className="services__title">{title}</h3>
                        <p className="services_description">{description}</p>
                    </div>
                )
            })}
        </div>

        <h3 className="section__subtitle">Tools and frameworks</h3>
        <ServicesStack />
    </section>
}

export default Services;