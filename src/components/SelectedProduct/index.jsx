import Container from '../Container'
import CardPost from '../CardPost'
import datas from '../../json/data.json'
import './SelectedProduct.scss'

function SelectedProduct({ id, image, title, value, info }) {
    return (
        <section className='selectedProduct'>
            <Container>
                <article key={id} className='innerSelectedProduct'>
                    <div className='product'>
                        <img src={image} alt={title} />
                        <div className='description'>
                            <h2>{title}</h2>
                            <h6>{value}</h6>
                            <p>{info}</p>
                        </div>
                    </div>
                        <h2>Produtos similares</h2>
                    <div className='produtosSimilares'>
                    </div>
                </article>
            </Container>
        </section>
    )
}

export default SelectedProduct