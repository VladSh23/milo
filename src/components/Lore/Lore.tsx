import React from 'react'
import { imageBlocks, references } from './constants'

import './style.scss'

const Lore: React.FC = () => {
  return (
    <div id='lore' className='lore-container'>
      <h2>Lore</h2>
      <div className='lore-container__blocks'>
        {imageBlocks.map((item, index) => (
          <div key={index} className='lore-container__block'>
            <img src={item.image} alt='picture' />
          </div>
        ))}
      </div>
      <div className='lore-container__references'>
        <h3>References:</h3>
        <ol>
          {references.map((item, index) => (
            <li key={index}>
              <a href={item} target='_blank' rel='noreferrer'>{item}</a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default Lore