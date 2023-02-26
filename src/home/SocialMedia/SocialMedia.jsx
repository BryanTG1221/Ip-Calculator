import './SocialMedia.css'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BsTwitter, BsTwitch } from 'react-icons/bs'

export function SocialMedia ({ theme }) {
  return (
    <ul className={theme === 'Dark' ? 'SocialMedia-list SocialMedia-Dark' : 'SocialMedia-list SocialMedia-Light'}>
      <li className={theme === 'Dark' ? 'lineSocialMedia lineSocialMedia-Dark' : 'lineSocialMedia lineSocialMedia-Light'} />
      <li><AiFillGithub /></li>
      <li><AiFillLinkedin /></li>
      <li><BsTwitter /></li>
      <li><BsTwitch /></li>
      <li className={theme === 'Dark' ? 'lineSocialMedia lineSocialMedia-Dark' : 'lineSocialMedia lineSocialMedia-Light'} />
    </ul>
  )
}
