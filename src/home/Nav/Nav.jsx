import { Link } from 'react-router-dom'
import './Nav.css'

export function Nav () {
  return (
    <nav className='Nav-Container'>
      <div className='Nav__Content'>
        <h3 id='nismoLogo' className='logoNismo'>nismo</h3>
        <Link to='/calculator'>
          <button className='btnLinkApp'>Go to app</button>
        </Link>
      </div>
    </nav>
  )
}
