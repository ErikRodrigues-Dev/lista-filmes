import './style.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <Link className='logo' to="/">Prime Flix</Link>
            <Link className='favoritos' to="/favoritos">Meus Filmes</Link>
            <h1>teste</h1>
        </header>
    )
}

export default Header;