import React from 'react';

const ServicesStack = () => {
    return (
        <div className="services__stack grid">
            <div className="services__stack__item">
                <i class="services__stack__icon fa-brands fa-js"></i>
                <h3 className="services__stack__title">JavaScript</h3>
            </div>

            <div className="services__stack__item">
                <i class="services__stack__icon fa-brands fa-python"></i>
                <h3 className="services__stack__title">Python</h3>
            </div>

            <div className="services__stack__item">
                <i class="services__stack__icon fa-brands fa-java"></i>
                
                <div>
                    <h3 className="services__stack__title">Java</h3>
                </div>
            </div>

            <div className="services__stack__item">
                <i class="services__stack__icon fa-brands fa-node"></i>
                
                <div>
                    <h3 className="services__stack__title">Nodejs</h3>
                </div>
            </div>

            <div className="services__stack__item">
                <i class="services__stack__icon fa-brands fa-html5"></i>
                
                <div>
                    <h3 className="services__stack__title">HTML</h3>
                </div>
            </div>

            <div className="services__stack__item">
                <i class="services__stack__icon fa-brands fa-css3-alt"></i>
                
                <div>
                    <h3 className="services__stack__title">CSS</h3>
                </div>
            </div>

            <div className="services__stack__item">
                <i class="services__stack__icon fa-solid fa-database"></i>
                
                <div>
                    <h3 className="services__stack__title">MySQL</h3>
                </div>
            </div>

            <div className="services__stack__item">
                <i class="services__stack__icon fa-brands fa-react"></i>
                
                <div>
                    <h3 className="services__stack__title">React</h3>
                </div>
            </div>

            <div className="services__stack__item">
                <i class="services__stack__icon fa-brands fa-vuejs"></i>
                
                <div>
                    <h3 className="services__stack__title">Vue</h3>
                </div>
            </div>

            <div className="services__stack__item">
                <i class="services__stack__icon fa-brands fa-git-alt"></i>
                
                <div>
                    <h3 className="services__stack__title">Git</h3>
                </div>
            </div>

        </div>
    )
}

export default ServicesStack;