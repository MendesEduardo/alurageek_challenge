import { Link } from 'react-router-dom'
import './SeeAllButton.scss'

function SeeAllButton() {
  return (
    <button className='seeAllButton'>
      <Link to="/Produtos" className='lin'>
        Ver tudo
      </Link>
    </button>
  )
}

export default SeeAllButton