import Container from '../Container'
import ButtonLink from '../ButtonLink'
import './BeginSession.scss'

function BeginSession() {
    return (
        <section className='login'>
            <Container>
                <article className='innerLogin'>
                    <h2>
                        Iniciar Sessão
                    </h2>
                    <input
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Escreva seu email"
                    />
                    <input
                        name="password"
                        id="password"
                        type="password"
                        placeholder="Escreva sua senha"
                    />
                    <ButtonLink to='/Products'>
                        <p>Entra</p>
                    </ButtonLink>
                </article>
            </Container>
        </section>
    )
}

export default BeginSession