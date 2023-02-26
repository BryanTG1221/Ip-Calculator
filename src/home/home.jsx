import './home.css'
import { Nav } from './Nav/Nav.jsx'
import { LandingInfo } from './LandingInfo/LandingInfo'
import { SocialMedia } from './SocialMedia/SocialMedia'

export function HomePage () {
  const date = new Date()
  const hours = date.getHours()
  console.log(hours)
  let themeUI
  hours < 19 && hours > 7 ? themeUI = 'Light' : themeUI = 'Dark'
  console.log(themeUI)
  return (
    <div className={hours < 19 && hours > 7 ? 'HomePage HomePage-Light' : 'HomePage HomePage-Dark'}>
      <Nav theme={themeUI} />
      <div className='LandingInfo__Content'>
        <LandingInfo theme={themeUI} />
        <SocialMedia theme={themeUI} />
      </div>
    </div>
  )
}
