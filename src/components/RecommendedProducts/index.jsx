import CardPost from '../CardPost'
import Container from '../Container'
import './RecommendedProducts.scss'

const RecommendedProducts = ({ products }) => {
    return (
        <section className='recommendedProducts'>
            <Container>
            <article className='innerRecommendedProducts'>
                {products.map((data) =>
                    <CardPost
                        id={data.id}
                        title={data.title}
                        image={data.image}
                        value={data.value}
                    />
                )}
            </article>
        </Container>
        </section>
    );
};

export default RecommendedProducts;
