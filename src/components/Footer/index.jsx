import Container from '../Container'
import ButtonLink from '../ButtonLink'
import './Footer.scss'
import CustomInput from '../CustomInput'

function Footer() {
    return (
        <>
            <footer className='footer'>
                <Container>
                    <section className='innerFooter'>
                        <img
                            src='/assets/Logo.svg' alt="AluraGeek"
                        />
                        <ul>
                            <li>
                                <a href='#'>Quem somos nós</a>
                            </li>
                            <li>
                                <a href='#'>Política de privacidade</a>
                            </li>
                            <li>
                                <a href='#'>Programa fidelidade</a>
                            </li>
                            <li>
                                <a href='#'>Nossas lojas</a>
                            </li>
                            <li>
                                <a href='#'>Quero ser franqueado</a>
                            </li>
                            <li>
                                <a href='#'>Anuncie aqui</a>
                            </li>
                        </ul>
                        <form className='messageField'>
                            <h3>Fale Conosco</h3>
                            <CustomInput
                                label="Nome"
                                name="name"
                                id="name"
                                type="text"
                            />
                            <CustomInput
                                name="mensagem"
                                id="mensagem"
                                type="text"
                                placeholder="Escreva sua mensagem"
                            />
                            <ButtonLink>
                                <p>Enviar mensagem</p>
                            </ButtonLink>
                        </form>
                    </section>
                </Container>
            </footer>
            <footer className='footerEnd'>
                <h5>Desenvolvido por Mendes Edüardo</h5>
                <p>2023</p>
            </footer>
        </>
    )
}

export default Footer