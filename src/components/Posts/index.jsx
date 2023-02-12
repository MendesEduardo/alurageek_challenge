import datas from '../../json/data.json'
import CardPost from '../CardPost'
import Container from '../Container'
import SeeAllButton from '../SeeAllButton'
import './Posts.scss'

function Posts() {
    return (
        <Container>
            <main className='posts'>
                <div className='postsTop'>
                    <h2>
                        Star Wars
                    </h2>
                    <div className='seeAll'>
                        <SeeAllButton />
                        <img src='/assets/arrow.svg' alt='seta ver tudo' />
                    </div>
                </div>
                <div className='postsCompra' id='starWars'>
                    {datas.starWars.map((data) =>
                        <CardPost
                            id={data.id}
                            title={data.title}
                            image={data.image}
                            value={data.value}
                        />
                    )}
                </div>
                <div className='postsTop'>
                    <h2>
                        Consoles
                    </h2>
                    <div className='seeAll'>
                        <SeeAllButton />
                        <img src='/assets/arrow.svg' alt='seta ver tudo' />
                    </div>
                </div>
                <div className='postsCompra' id='consoles'>
                    {datas.consoles.map((data) =>
                        <CardPost
                            id={data.id}
                            title={data.title}
                            image={data.image}
                            value={data.value}
                        />
                    )}
                </div>
                <div className='postsTop'>
                    <h2>
                        Diversos
                    </h2>
                    <div className='seeAll'>
                        <SeeAllButton />
                        <img src='/assets/arrow.svg' alt='seta ver tudo' />
                    </div>
                </div>
                <div className='postsCompra' id='diversos'>
                    {datas.diversos.map((data) =>
                        <CardPost
                            id={data.id}
                            title={data.title}
                            image={data.image}
                            value={data.value}
                        />
                    )}
                </div>
            </main>
        </Container>
    )
}

export default Posts