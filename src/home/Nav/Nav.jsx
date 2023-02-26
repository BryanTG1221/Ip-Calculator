import { Link } from 'react-router-dom'
import './Nav.css'

export function Nav ({ theme }) {
  console.log(theme)
  return (
    <nav className='Nav-Container'>
      <div className='Nav__Content'>
        <h3 id='nismoLogo' className={theme === 'Dark' ? 'logoNismo logoDark' : 'logoNismo logoLight'}>nismo</h3>
        <Link to='/calculator'>
          <button className='btnLinkApp'>Go to app</button>
        </Link>
      </div>
    </nav>
  )
}
