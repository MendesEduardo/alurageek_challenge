import ButtonLink from '../ButtonLink'
import Container from '../Container'
import './Banner.scss'

function Banner() {
    return (
        <section className='bannerImage'>
            <Container>
                <h1>
                    Dezembro Promocional
                </h1>
                <p>
                    Produtos selecionados com 33% de desconto
                </p>
                <ButtonLink>
                    <p>Ver Consoles</p>
                </ButtonLink>
            </Container>
        </section>
    )
}

export default Banner