import ButtonLink from '../ButtonLink'
import Container from '../Container'
import CustomInput from '../CustomInput'
import './AddNewProduto.scss'

function AddNewProduto() {
    return (
        <section className='addNewProduto'>
            <Container>
                <form className='innerAddNewProduto'>
                    <h2>Adicionar novo produto</h2>
                    <CustomInput
                        label="URL de imagem"
                        name='URLImagem'
                        id='URLImagem'
                        type='text'
                    />
                    <CustomInput
                        label="Categoria"
                        name='Categoria'
                        id='Categoria'
                        type='text'
                    />
                    <CustomInput
                        label="Nome do produto"
                        name='NomeProduto'
                        id='NomeProduto'
                        type='text'
                    />
                    <CustomInput
                        label="Preço do produto"
                        name='PreçoProduto'
                        id='PreçoProduto'
                        type='text'
                    />
                    <CustomInput
                        label="Descrição do produto"
                        name='DescricaProduto'
                        id='DescricaProduto'
                        type='text'
                    />
                    <ButtonLink>
                        <p>Adicionar produto</p>
                    </ButtonLink>
                </form>
            </Container>
        </section>
    )
}

export default AddNewProduto