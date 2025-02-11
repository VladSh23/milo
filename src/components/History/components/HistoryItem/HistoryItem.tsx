import React from 'react'

import { IMessage } from '../../../../services/chats/interfaces'
import Ps1 from '../../../Ps1'
import TextLoader from '../../../TextLoader'
import Typewriter from '../../../Typewritter'

const HistoryItem: React.FC<Pick<IMessage, 'question' | 'response' | 'created_at'> & {withLoader?: boolean}> = ({ question, response, withLoader = false, created_at }) => {
  return (
    <div className='history__item'>
      <p className="history__item__question">
        <Ps1 /> 
        <span>{question}</span>
      </p>
      <p>{withLoader ? <TextLoader /> : <Typewriter created_at={created_at} response={response} />}</p>
    </div>
  )
}

export default HistoryItem