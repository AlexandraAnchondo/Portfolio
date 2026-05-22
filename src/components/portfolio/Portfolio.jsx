import React, { useState } from 'react';
import "./portfolio.css";
import Menu from './Menu';

const Portfolio = () => {
    const [items, setItems] = useState(Menu);
    const [videoUrl, setVideoUrl] = useState(null); // guarda la url del video activo

    const filterItem = (category) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setItems(updatedItems);
    };

    const isVideo = (url) => {
        return url.endsWith(".mp4") || url.endsWith(".webm") || url.endsWith(".ogg");
    };

    const handleClick = (url) => {
        if (isVideo(url)) {
            setVideoUrl(url);
        } else {
            window.open(url, "_blank", "noopener,noreferrer"); // abre link en nueva pestaña
        }
    };

    return (
        <section className="work container section" id="portfolio">
            <h2 className="section__title">Recent Works</h2>

            <div className="work__filters">
                <span className="work__item" onClick={() => setItems(Menu)}>Everything</span>
                <span className="work__item" onClick={() => filterItem("Fullstack")}>Fullstack</span>
                <span className="work__item" onClick={() => filterItem("Frontend")}>Frontend</span>
            </div>

            <div className="work__container grid">
                {items.map((item) => {
                    const { id, image, title, category, url, description, technologies } = item;
                    return (
                        <div key={id} className="work__item-wrapper">
                            {/* Card principal */}
                            <div className="work__card">
                                <div className="work__thumbnail">
                                    <img src={image} alt="" className="work__img" />
                                    <div className="work__mask"></div>
                                </div>

                                <span className="work__category">{category}</span>
                                <h3 className="work__title">{title}</h3>

                                {/* Botón mantiene el mismo diseño */}
                                <button
                                    onClick={() => handleClick(url)}
                                    className="work__button"
                                >
                                    <i className="icon-link work__button-icon"></i>
                                </button>
                            </div>

                            {/* Información adicional debajo */}
                            <div className="work__info">
                                <p className="work__description">{description}</p>
                                <div className="work__technologies">
                                    {technologies.map((tech) => (
                                        <span key={tech} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Modal de video */}
            {videoUrl && (
                <div className="video-modal">
                    <div className="video-content">
                        <button className="close-btn" onClick={() => setVideoUrl(null)} style={{marginBottom: '3rem'}}>✖</button>
                        <video controls autoPlay className="video-player" style={{ marginTop: '1rem' }}>
                            <source src={videoUrl} type="video/mp4" />
                            Tu navegador no soporta el video.
                        </video>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Portfolio;
