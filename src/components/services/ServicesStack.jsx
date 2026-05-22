import React from 'react';
import Nginx from "../../assets/nginx.png";
import VSCode from "../../assets/VSCode.png";
import MYSQL from "../../assets/MYSQL.png";
import SQL from "../../assets/SQL.png";

const ServicesStack = () => {
    const stack = {
        FRONTEND: [
            { name: 'HTML', icon: 'fa-brands  fa-html5' },
            { name: 'CSS', icon: 'fa-brands  fa-css3-alt' },
            { name: 'SASS', icon: 'fa-brands  fa-sass' },
            { name: 'JavaScript', icon: 'fa-brands  fa-js' },
            { name: 'ReactJS & Native', icon: 'fa-brands  fa-react' },
        ],
        BACKEND: [
            { name: 'Node.js', icon: 'fa-brands  fa-node' },
            { name: 'Java', icon: 'fa-brands  fa-java' },
            { name: 'MySQL' },
            { name: 'SQL Server' },
            { name: 'Nginx' },
        ],
        TOOLS: [
            { name: 'Git', icon: 'fa-brands  fa-git-alt' },
            { name: 'VSCode' },
            { name: 'NPM', icon: 'fa-brands  fa-npm' },
            { name: 'Github', icon: 'fa-brands  fa-github' },
            { name: 'Figma', icon: 'fa-brands  fa-figma' },
        ],
    };

    return (
        <div className="services__stack-container">
            {Object.entries(stack).map(([category, technologies]) => (
                <div key={category} className="services__category">
                    <h2 className="services__category-title">{category}</h2>
                    <div className="services__stack grid">
                        {technologies.map((tech) => (
                            <div key={tech.name} className="services__stack__item">
                                { tech.name === 'Nginx' && (
                                    <img src={Nginx} alt="" style={{width: '65%'}}/>
                                )}
                                {tech.name === 'VSCode' && (
                                    <img src={VSCode} alt="" style={{ width: '60%' }} />
                                )}
                                {tech.name === 'MySQL' && (
                                    <img src={MYSQL} alt="" />
                                )}
                                {tech.name === 'SQL Server' && (
                                    <img src={SQL} alt="" style={{ width: '55%' }} />
                                )}
                                <i className={`services__stack__icon ${tech.icon}`}></i>
                                
                                <h3 className="services__stack__title">{tech.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ServicesStack;
