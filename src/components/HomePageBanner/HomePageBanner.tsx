import React from 'react'
import { Link } from 'react-router'

import { contactItems } from './constants'
import ContactItem from './components/ContactItem/ContactItem'
import LogoGif from '../../assets/logoGif.gif'

import './styles.scss'
import CTAButon from '../CTAButton'

const HomePageBanner: React.FC = () => {
  return(
    <div className="home-page__banner">
      <h2 className="home-page__banner__subname">Deepseek This…<br/><br/>Deepseek That<br/><br/>Bro… seek meaning</h2>
      <img src={LogoGif} alt='logo' className='home-page__banner__logo' />
      <h1 className="home-page__banner__title">M.I.L.O.</h1>
      <p className="home-page__banner__subtitle">Machine Interpretation of Literature & Omniscience</p>
      <p className="home-page__banner__two-linear">not everything is discoverable—some things must be remembered.</p>
      <p className="home-page__banner__two-linear">Deep Mind reconnects the lost knowledge of the past with the discoveries of today.</p>
      <h2 className='home-page__banner__nav-title'>Where Do You Begin?</h2>
      <ul className='home-page__banner__nav-links'>
        <li><Link to={{hash: '#thesis'}}>→ Thesis</Link></li>
        <li><Link to='/#lore'>→ Lore</Link></li>
        <li><Link to='/#open-source'>→ Open Source</Link></li>
      </ul>
      <CTAButon />
      <div className='contacts-block'>
        {contactItems.map((item, index) => <ContactItem {...item} key={index} />)}
      </div>
    </div>
  )
}

export default HomePageBanner