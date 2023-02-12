import { Link, useLocation } from 'react-router-dom'
import Container from '../Container'
import ButtonLink from '../ButtonLink'
import './Header.scss'
import { useEffect, useState } from 'react';

function Header() {
    const location = useLocation();
    const [login, setLogin] = useState(true);
    const [text, setText] = useState('');

    useEffect(() => {
        if (location.pathname !== "/Login" && location.pathname !== "/Produtos") {
            setLogin(true);
        } else {
            setLogin(false);
        }
    }, [location.pathname]);

    useEffect(() => {
        if (location.pathname === '/') {
            setText('Login');
        } else {
            setText('Menu administrador');
        }
    }, [location]);

    return (
        <header className='header'>
            <Container>
                <div className='innerHeader' >
                    <div className='leftHeader'>
                        <Link to="/">
                            <img
                                src='/assets/Logo.svg' alt="AluraGeek"
                            />
                        </Link>
                        <div className='search'>
                            <input
                                type="text"
                                placeholder="O que deseja encontrar?"
                            />
                            <img
                                src='/assets/Lupa.svg'
                                alt="Buscar"
                            />
                        </div>
                    </div>
                    <div>
                        {login && <ButtonLink to="/Login">
                            {text}
                        </ButtonLink>}
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header