import React, { useState, useEffect, useRef } from 'react';
import './Projects.scss';
import BluelCard from '../../assets/imgbluel/index.webp';
import KasaCard from '../../assets/kasaimg/index.webp';
import GrimmoireCard from '../../assets/grimoireimg/index.webp';

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

    const ProjectModal = ({ project }) => (
        <div className='modal-overlay'>
        <div ref={modalRef} className='modal'>
            <button onClick={closeModal} className='close-button'>Fermer</button>
            <img className='modal-image' src={project.image} alt={project.title} />
            <p>{project.description}</p>
            <a href={project.githubRepo} target='_blank' rel='noopener noreferrer'>Voir sur github</a>
        </div>
        </div>
    );

    const projects = [
        {
            title: 'Site codé en javascript',
            image: BluelCard,
            description: 'description',
            githubRepo: 'https://github.com/pittocha/sophiebluel'
        },
        {
            title: 'Site codé gràce à React',
            image: KasaCard,
            description: 'description',
            githubRepo: 'https://github.com/pittocha/Kasa'
        },
        {
            title: 'Backend du site codé en Node.js',
            image: GrimmoireCard,
            description: 'description',
            githubRepo: 'https://github.com/pittocha/grimoireback'
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