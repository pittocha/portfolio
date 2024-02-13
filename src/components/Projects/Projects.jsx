import './Projects.scss';
import BluelCard from '../../assets/imgbluel/index.webp';
import KasaCard from '../../assets/kasaimg/index.webp';
import GrimmoireCard from '../../assets/grimoireimg/index.webp';

function Projects () {
    
    return (
        <div>
            <p className='sectionTitle' id='project'>Mes réalisation notable</p>
            <div className='projects'>
                <div className='project-card'>
                <span className='card-title'>Site codé en javascript</span>
                    <button className='project-button'><img className='project-img' src={BluelCard} alt='index du site en javascript'/></button>
                </div>
                <div className='project-card'>
                <span className='card-title'>Site coder garce à react</span>
                    <button className='project-button'><img className='project-img' src={KasaCard} alt='index de la page en react' /></button>
                </div>
                <div className='project-card'>
                <span className='card-title'>Backend du site coder en nodejs</span>
                    <button className='project-button'><img className='project-img' src={GrimmoireCard} alt='index de la page en nodejs' /></button>
                </div>
            </div>
        </div>
    )
}

export default Projects;