import './Competences.scss';
import css from '../../assets/5351-css3_102605 .png';
import html from '../../assets/file_type_html_icon_130541.png';
import javascrpit from '../../assets/javascript_original_logo_icon_146455.png';
import Reacticon from '../../assets/react_original_logo_icon_146374.png';
import nodejs from '../../assets/nodejs_plain_logo_icon_146409.png';
import apache from '../../assets/apache_original_wordmark_logo_icon_146643.png';
import linux from '../../assets/linux_81610.png';
import git from '../../assets/git_plain_logo_icon_146507.png';
import Tooltip from '../Tooltip/Tooltip';

function Competences () {
    return (
        <div className='skills'>
            <p className='skillHead'>Mes compétences</p>
            <p className='skillsTitle'>développement</p>
            <div className='skill-list'>
            <div className='skill-box'>
            <Tooltip text='HTML'>
            <img  className='skillIcon' src={html} alt='logo html' />
            </Tooltip>
            <ul className='skill-details'>
                <li>Implémentation des outils SEO</li>
                <li>Prsie en compte des outils d'accessibilité</li>
            </ul>
            </div>
            <div className='skill-box'>
            <Tooltip text='CSS'>
            <img  className='skillIcon' src={css} alt='logo css' />
            </Tooltip>
            <ul className='skill-details'>
                <li>Responsive design</li>
                <li>Utilisation de SASS</li>
            </ul>
            </div>
            <div className='skill-box'>
            <Tooltip text='Javascript'>
            <img  className='skillIcon' src={javascrpit} alt='logo javascript' />
            </Tooltip>
            <ul className='skill-details'>
                <li>Récupérer les données utilisateurs via des formulaires</li>
                <li>Manipuler les éléments du DOM</li>
                <li>Gérer les événements utilisateurs</li>
            </ul>
            </div>
            <div className='skill-box'>
            <Tooltip text='React'>
            <img  className='skillIcon' src={Reacticon} alt='logo react' />
            </Tooltip>
            <ul className='skill-details'>
                <li>Initialiser une application avec Create React App</li>
                <li>Développer des éléments de l'interface d'un site web grâce à des composants</li>
                <li>Configurer la navigation entre les pages de l'application avec React Router</li>
            </ul>
            </div>
            <div className='skill-box'>
            <Tooltip text='Nodejs'>
            <img  className='skillIcon' src={nodejs} alt='logo nodejs' />
            </Tooltip>
            <ul className='skill-details'>
                <li>Mettre en œuvre des opérations CRUD de manière sécurisée</li>
                <li>Stocker des données de manière sécurisée</li>
                <li>implémenter un système d'authentification sécurisé</li>
                <li>gérer l'optimisation des fichiers en utilisant multer et sharp</li>
            </ul>
            </div>
            </div>
            <p className='skillHead'>Mes autre skills</p>
            <div  className='skill-list'>
            <div className='skill-box'>
            <Tooltip text='Apache'>
            <img className='skillIcon' src={apache} alt='logo apache' />
            </Tooltip>
            <ul className='skill-details'>
                <li>Configurer un serveur http pourl'hebergement d'un site statique</li>
            </ul>
            </div>
            <div className='skill-box'>
            <Tooltip text='Linux'>
            <img className='skillIcon' src={linux} alt='logo linux' />
            </Tooltip>
            <ul className='skill-details'>
                <li>Systeme de fichier</li>
                <li>utilisation de la console</li>
                <li>configuration de NAS</li>
            </ul>
            </div>
            <div className='skill-box'>
            <Tooltip text='Git'>
            <img className='skillIcon' src={git} alt='logo git' />
            </Tooltip>
            <ul className='skill-details'>
                <li>gestion et maintenance de version</li>
            </ul>
            </div>
            </div>
        </div>
    )

}

export default Competences