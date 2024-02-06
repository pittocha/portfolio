import './Footer.scss';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Footer() {
    return (
        <div className='social-icons'>
            <FaLinkedin />
            <a href='https://github.com/pittocha' target='_blank' rel='noopener noreferrer'>
            <FaGithub />
            </a> 
            <FaEnvelope />
        </div>
    )
}

export default Footer;