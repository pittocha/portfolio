import './Competences.scss';
import css from '../../assets/5351-css3_102605 .png';
import html from '../../assets/file_type_html_icon_130541.png';
import javascrpit from '../../assets/javascript_original_logo_icon_146455.png';
import Reacticon from '../../assets/react_original_logo_icon_146374.png';
import nodejs from '../../assets/nodejs_plain_logo_icon_146409.png';
import apache from '../../assets/apache_original_wordmark_logo_icon_146643.png';
import linux from '../../assets/linux_81610.png';
import git from '../../assets/git_plain_logo_icon_146507.png';

function Competences () {
    return (
        <div className='skills'>
            <p className='skillHead'>Mes compétences</p>
            <p className='skillsTitle'>développement</p>
            <div>
            <img  className='skillIcon' src={html} alt='logo html' />
            <img  className='skillIcon' src={css} alt='logo css' />
            <img  className='skillIcon' src={javascrpit} alt='logo javascript' />
            <img  className='skillIcon' src={Reacticon} alt='logo react' />
            <img  className='skillIcon' src={nodejs} alt='logo nodejs' />
            </div>
            <p className='skillsTitle'>autres skills</p>
            <div>
            <img className='skillIcon' src={apache} alt='logo apache' />
            <img className='skillIcon' src={linux} alt='logo linux' />
            <img className='skillIcon' src={git} alt='logo github' />
            </div>
        </div>
    )

}

export default Competences