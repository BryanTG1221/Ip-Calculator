import './home.css'
import { Nav } from './Nav/Nav.jsx'
import { LandingInfo } from './LandingInfo/LandingInfo'
import { SocialMedia } from './SocialMedia/SocialMedia'

export function HomePage ({ themeUI }) {
  return (
    <div className={themeUI === 'Light' ? 'HomePage HomePage-Light' : 'HomePage HomePage-Dark'}>
      <Nav theme={themeUI} />
      <div className='LandingInfo__Content'>
        <LandingInfo theme={themeUI} />
        <SocialMedia theme={themeUI} />
      </div>
    </div>
  )
}
