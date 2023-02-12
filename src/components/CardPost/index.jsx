import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SeeAllButton from '../SeeAllButton'
import './CardPost.scss'

function CardPost({ id, image, title, value }) {
    const [edit, setEdit] = useState(true);

    useEffect(() => {
        if (location.pathname === "/Produtos") {
            setEdit(true);
        } else {
            setEdit(false);
        }
    }, [location.pathname]);

    return (
        <Link to={`/Produtos/${id}`} className='lin'>
            <div key={id} className='cardPost'>
                {edit &&
                    <div className='confing'>
                        <img src='/assets/Lixeira.svg' alt='Delete' />
                        <img src='/assets/Editar.svg' alt='Delete' />
                    </div>}
                <img src={image} alt={title} />
                <h4>{title}</h4>
                <p>
                    {value}
                </p>
                <SeeAllButton />
            </div>
        </Link>
    )
}

export default CardPost