import React, { useState, useEffect, useRef } from 'react';
import './Projects.scss';
import BluelCard from '../../assets/imgbluel/0index.webp';
import KasaCard from '../../assets/kasaimg/0index.webp';
import GrimmoireCard from '../../assets/grimoireimg/0index.webp';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const bluelImages = require.context('../../assets/imgbluel/', false, /\.(webp)$/)
const bluelGallery = bluelImages.keys().map(bluelImages);

const kasaImages = require.context('../../assets/kasaimg/', false, /\.(webp)$/)
const kasaGallery = kasaImages.keys().map(kasaImages);

const grimmoireImage = require.context('../../assets/grimoireimg/', false, /\.(webp)$/)
const grimmoireGallery = grimmoireImage.keys().map(grimmoireImage);

function Projects () {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const modalRef = useRef();
    //ce useeffect permet de fermer le modal quand on clique en dehors de la fenetre
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const openModal  = (project) => {
        setSelectedProject(project);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProject(null);
        setModalOpen(false);
    };

    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{...style, display: "block", background: "black", borderRadius: "100%"}}
                onClick={onClick}
            />
        )
    }

    function PreviousArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{...style, display: "block", background: "black", borderRadius: "100%",}}
                onClick={onClick}
            />
        )
    }
    //objet de configuration de react-slick
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slideToShow: 1,
        slideToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PreviousArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    }

    const ProjectModal = ({ project }) => (
        <div className='modal-overlay'>
        <div ref={modalRef} className='modal'>
            <button onClick={closeModal} className='close-button'>Fermer</button>
                <Slider className='gallery' {...settings}>
                    {project.gallery.map((image, index) => (
                        <img key={index} className='modal-image' src={image} alt={`${index}`} />
                    ))}
                </Slider>
            <p className='modal-description'>{project.description}</p>
            <a href={project.githubRepo} target='_blank' rel='noopener noreferrer'><button className='github-button'  target='_blank' rel='noopener noreferrer'>Voir sur github</button></a>
        </div>
        </div>
    );
    //liste des data des projets, pour ajouter un projet il n'y à plus qu'à suivre le modèle
    const projects = [
        {
            title: 'portfolio de photographe en javascript',
            image: BluelCard,
            description: "Récupérer des données utilisateur via des formulaires, Manipuler les éléments du DOM, gérer les événements utilisateur avec javascript. Le plus gros challenge que j'ai rencontré sur ce projet était le codage du modal from scratch en javascript natif.",
            githubRepo: 'https://github.com/pittocha/sophiebluel',
            gallery: bluelGallery
        },
        {
            title: "front-end d'un site de réservation en React",
            image: KasaCard,
            description:"Configurer la navigation avec React Router, Développer les éléments du site avec des composants React. Sur ce projet la plus grosse difficulté était l'apprentissage de SASS et tout particuliérement des animations et de l'utilisation de fonctions. ",
            githubRepo: 'https://github.com/pittocha/Kasa',
            gallery: kasaGallery

        },
        {
            title: "Backend d'un site de notation de livres en Node.js",
            image: GrimmoireCard,
            description: "Mettre en œuvre les opération crud de manière sécurisé, stocker des données de manière sécurisé, Implémenter un système d'authentification sécurisé, gérer l'optimisation de fichier avec multer et sharp.Dans le projet Back End la plus grosse dificulté était l'intégration d'outils de green code ici multer qui est un outils relativement puissant et qui à nécessité un certain temps d'apprentissage pour comprendre l'étendue des possibilité qu'il offre.",
            githubRepo: 'https://github.com/pittocha/grimoireback',
            gallery: grimmoireGallery
        }
    ]
    
    return (
        <div>
            <p className='sectionTitle' id='project'>Mes réalisation notable</p>
            <div className='projects'>
                {projects.map((project, index) => (
                    <div key={index} className='project-card'>
                        <span className='card-title'>{project.title}</span>
                        <button onClick={() => openModal(project)} className='project-button'>
                            <img className='project-img' src={project.image} alt={project.title} />
                        </button>
                    </div>
                ))}
            </div>
            {modalOpen && <ProjectModal project={selectedProject} />}
        </div>
    );
}

export default Projects;