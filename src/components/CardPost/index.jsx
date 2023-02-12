import React from 'react'
import SeeAllButton from '../SeeAllButton'
import './CardPost.scss'

function CardPost({ id, image, title, value }) {
    return (
        <div key={id} className='cardPost'>
            <img src={image} alt={title} />
            <h4>{title}</h4>
            <p>
                {value}
            </p>
            <SeeAllButton />
        </div>
    )
}

export default CardPost