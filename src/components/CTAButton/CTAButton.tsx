import React from 'react'
import { Link } from 'react-router'

import './styles.scss'

const CTAButon: React.FC = () => {
  return(
    <Link to='/terminal' className='cta-button'>Talk to MILO</Link>
  )
}

export default CTAButon