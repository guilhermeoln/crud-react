import './header.css'
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <Link to='/' className='logo'>Academy</Link>
        </header>
    );
}


export default Header;