import React from 'react'
import HeroImage from '../../assets/Hero.svg'
import './hero.css'

export default function hero() {
    return (
        <div className='c1'>
            <div classname="container ">
                <img className="hero-img" src={HeroImage} />
                <h1 className='head text-white fw-bold'>START BOOTSTRAP</h1>
                <div className="star">
                    <div className="horizental-line  " />
                    <div className="symp-star text-white fw-bold">★</div>
                    <div className="horizental-line " />
                </div>
                <p className='h-p text-white '>Graphic Artist - Web Designer - Illustrator</p>
            </div>

        </div>
    )
}
