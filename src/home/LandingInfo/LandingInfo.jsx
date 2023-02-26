import LandingVector from '../../assets/LandingSubNeting.png'
import './LandingInfo.css'

export function LandingInfo (themeUI) {
  const { theme } = themeUI
  console.log(theme + ' Hola Mundo')
  return (
    <div className='LandingInfo'>
      <h1 className={theme === 'Light' ? 'title titleLight' : 'title titleDark'}>
        <span className={theme === 'Light' ? 'third thirdTitleLight' : 'third thirdTitleDark'}>Introducing nismo</span>
        Subneting Calculator
        <span className={theme === 'Light' ? 'second secondTitleLight' : 'second secondTitleDark'}>nismo is a calculator of IP blocks - IP ranges and broadcast address</span>
      </h1>
      <div className='Landing__ImageVector'>
        <div className='Landing__Circle' />
        <img src={LandingVector} alt='shapeNetwork' className='imgVector' />
      </div>
    </div>
  )
}
