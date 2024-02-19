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

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
                console.log(event,'click outside')
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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slideToShow: 1,
        slideToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PreviousArrow />
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

    const projects = [
        {
            title: 'Site codé en javascript',
            image: BluelCard,
            description: 'Recupérater des données utilisateur via des formulaires, Manipuler les éléments du DOM, gérer les événements utilisateur avec javascript',
            githubRepo: 'https://github.com/pittocha/sophiebluel',
            gallery: bluelGallery
        },
        {
            title: 'Site codé gràce à React',
            image: KasaCard,
            description: 'Configurer ls navigation avec React Router, Développer les éléments du site avec des composants React',
            githubRepo: 'https://github.com/pittocha/Kasa',
            gallery: kasaGallery

        },
        {
            title: 'Backend du site codé en Node.js',
            image: GrimmoireCard,
            description: "Mettre en œuvre les opération crud de manière sécurisé, stocker des données de manière sécurisé, Implémenter un système d'authentification sécurisé, gérer l'optimisation de fichier avec multer et sharp",
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