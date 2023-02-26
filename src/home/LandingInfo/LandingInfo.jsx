import LandingVector from '../../assets/LandingSubNeting.png'
import './LandingInfo.css'

export function LandingInfo (themeUI) {
  const { theme } = themeUI
  console.log(theme + ' Hola Mundo')
  return (
    <div className='LandingInfo'>
      <h1 className={theme === 'Light' ? 'titleLight' : 'titleDark'}>
        <span className={theme === 'Light' ? 'thirdTitleLight' : 'thirdTitleDark'}>Introducing nismo</span>
        Subneting Calculator
        <span className={theme === 'Light' ? 'secondTitleLight' : 'secondTitleDark'}>nismo is a calculator of IP blocks - IP ranges and broadcast address</span>
      </h1>
      <div className='Landing__ImageVector'>
        <div className='Landing__Circle' />
        <img src={LandingVector} alt='shapeNetwork' className='imgVector' />
      </div>
    </div>
  )
}
