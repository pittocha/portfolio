import './Header.scss';

function Header () {
    
    return (
        <div className='navContainer'>
            <span className='navLink'>
                <a href=''>home</a>
            </span>
            <span className='navLink'>
                <a href=''>Projects</a>
            </span>
            <span className='navLink'>
                <a href=''>Contacts</a>
            </span>
        </div>
    )
}
export default Header