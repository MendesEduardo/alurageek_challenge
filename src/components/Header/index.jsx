import { Link } from 'react-router-dom'
import Container from '../Container'
import ButtonLink from '../ButtonLink'
import './Header.scss'

function Header() {
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
                    <ButtonLink to="/login">
                        Login
                    </ButtonLink>
                </div>
            </Container>
        </header>
    )
}

export default Header