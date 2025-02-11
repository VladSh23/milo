import React from 'react'
import { IContactItem } from '../../constants'

const ContactItem: React.FC<IContactItem> = ({ logo, label, link }) => {
  return (
    <a href={link} target='_blank' className='contact-item'>
      {logo}
      <span>{label}</span>
    </a>
  )
}

export default ContactItem