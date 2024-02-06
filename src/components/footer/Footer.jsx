import './Footer.scss';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Footer() {
    return (
        <div className='social-icons'>
            <a href='https://www.linkedin.com/in/nicolas-martinez-770521295/' target='_blank'  rel='noopener noreferrer' className='social-link'>
            <FaLinkedin />
            </a>
            <a href='https://github.com/pittocha' target='_blank' rel='noopener noreferrer' className='social-link'>
            <FaGithub />
            </a> 
            <a href='mailto:kurulimpah@gmail.com' className='social-link'>
            <FaEnvelope />
            </a>
        </div>
        
    )
}

export default Footer;