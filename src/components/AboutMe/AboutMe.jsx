import React from "react";
import './AboutMe.scss';
import illustration from '../../assets/web-developer.512x373.png'

function AboutMe () {
    return (
        <div className="presentation">
        <div className="presentation-text">
        <h1>Nicolas Martinez</h1>
        <p>Développeur/intégrateur web.
           Je travaille en HTML, CSS, JavaScript, REACT et nodejs,
           mon objectif est de donner forme à votre projet jusqu'à son déploiement,
           je suis bassiste amateur et j'ai un intérêt grandissant pour la communauté open-source, cherchant des solutions efficaces pour la Musique Assistée par Ordinateur (MAO).</p>
        </div>
           <div><img className="about-illustration" src={illustration} alt="logo d'illustration" /></div>
        </div>
    )
}

export default AboutMe;