import datas from '../../json/data.json';
import { useParams } from 'react-router-dom';
import SelectedProduct from '../../components/SelectedProduct';
import NotFound from "../../page/NotFound"
import RecommendedProducts from '../../components/RecommendedProducts';

function SeeProduct() {
    const { id } = useParams();
    const data = datas;
    const selected =
        data.starWars.find(selected => selected.id === parseInt(id))
        ||
        data.consoles.find(selected => selected.id === parseInt(id))
        ||
        data.diversos.find(selected => selected.id === parseInt(id));

    let category = '';
    if (data.starWars.find(selected => selected.id === parseInt(id))) {
        category = 'starWars';
    } else if (data.consoles.find(selected => selected.id === parseInt(id))) {
        category = 'consoles';
    } else if (data.diversos.find(selected => selected.id === parseInt(id))) {
        category = 'diversos';
    }

    const similarProducts = data[category].filter(product => product.id !== parseInt(id));

    return selected ? (
        <>
            <SelectedProduct
                id={selected.id}
                image={selected.image}
                title={selected.title}
                value={selected.value}
                info={selected.info}
            />
            <RecommendedProducts products={similarProducts} />
        </>
    ) :
        (
            <NotFound />
        );
};

export default SeeProduct;