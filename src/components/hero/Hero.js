import React from 'react'
import './Hero.css'
import { FaShareAlt } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>
                <div className='left'>
                    <h1>WE HEAR <br />WE MAKE IT HAPPEN</h1>
                    <h2>Website Development and Graphic Designing</h2><br />
                    <p>We provide a complete web and app solution by providing you the esential services including branding, graphic design, UX/UI design, web development, content, social media integration, SEO, and online marketing.</p>
                    <div className='input-container'>
                        <div className='btn-one'>
                            <button className='btn-one'>Connect Now <FaShareAlt /></button> 
                        </div>
                    </div>

                </div>

                <div className='right'>
                    <div className='img-container'>
                        <img src={require('/Users/saura/Desktop/101infotech-assignment/src/assets/hero.png')} alt='' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero