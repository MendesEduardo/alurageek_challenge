import Container from '../Container'
import ButtonLink from '../ButtonLink'
import './BeginSession.scss'
import CustomInput from '../CustomInput'

function BeginSession() {
    return (
        <section className='login'>
            <Container>
                <article className='innerLogin'>
                    <h2>
                        Iniciar Sessão
                    </h2>
                    <CustomInput
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Escreva seu email"
                    />
                    <CustomInput
                        name="password"
                        id="password"
                        type="password"
                        placeholder="Escreva sua senha"
                    />
                    <ButtonLink to='/Produtos'>
                        <p>Entra</p>
                    </ButtonLink>
                </article>
            </Container>
        </section>
    )
}

export default BeginSession