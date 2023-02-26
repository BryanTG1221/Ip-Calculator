import './home.css'
import { Nav } from './Nav/Nav.jsx'
import { LandingInfo } from './LandingInfo/LandingInfo'
import { SocialMedia } from './SocialMedia/SocialMedia'

export function HomePage () {
  const date = new Date()
  const hours = date.getHours()
  let themeUI
  hours >= 19 ? themeUI = 'Dark' : themeUI = 'Light'
  console.log(themeUI)
  return (
    <div className={hours < 19 ? 'HomePage-Light' : 'HomePage-Dark'}>
      <Nav />
      <div className='LandingInfo__Content'>
        <LandingInfo theme={themeUI} />
        <SocialMedia />
      </div>
    </div>
  )
}
