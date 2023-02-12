import datas from '../../json/data.json'
import CardPost from '../CardPost'
import Container from '../Container'
import ButtonLink from '../ButtonLink'
import './AllPosts.scss'

function AllPosts() {
    return (
        <Container>
            <section className='allPosts'>
                <div className='postsTop'>
                    <h2>
                        Todos os produtos
                    </h2>
                    <ButtonLink>
                        <p>Adicionar produto</p>
                    </ButtonLink>
                </div>
                <div className='postsCompra'>
                    {datas.starWars.map((data) =>
                        <CardPost
                            id={data.id}
                            title={data.title}
                            image={data.image}
                            value={data.value | '1111111'}
                        />
                    )}
                    {datas.consoles.map((data) =>
                        <CardPost
                            id={data.id}
                            title={data.title}
                            image={data.image}
                            value={data.value | '1111111'}
                        />
                    )}
                    {datas.diversos.map((data) =>
                        <CardPost
                            id={data.id}
                            title={data.title}
                            image={data.image}
                            value={data.value | '1111111'}
                        />
                    )}
                </div>
            </section>
        </Container>
    )
}

export default AllPosts