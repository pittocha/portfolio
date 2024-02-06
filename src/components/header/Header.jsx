import './Header.scss';

function Header () {
    
    return (
        <div className='navContainer'>
            <span className='navLink'>
                <a href='#home'>home</a>
            </span>
            <span className='navLink'>
                <a href='#project'>Projects</a>
            </span>
            <span className='navLink'>
                <a href='#contact'>Contacts</a>
            </span>
        </div>
    )
}
export default Header