import React, { useEffect, useMemo } from 'react'
import { useParams } from 'react-router'

import HistoryItem from './components/HistoryItem';
import { useGetChatDataQuery } from '../../services/chats/chats';

import './styles.scss'
import { useAppSelector } from '../../hooks';
import { selectLastMessage } from '../../services/global/globalSlice';

const History: React.FC<{handleScrollToBottom: () => void}> = ({ handleScrollToBottom }) => {
  const lastMessage = useAppSelector(selectLastMessage)
  const params = useParams();
  const { data } = useGetChatDataQuery(params?.id, { skip: !params?.id })

  const messagesList = useMemo(() => {
    if (!params?.id) return []
    if (data && data?.messages && data?.messages?.length) {
      return data?.messages.slice().sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
    }
    else return []
  }, [data?.messages, params?.id])

  useEffect(() => {
    handleScrollToBottom()
  }, [messagesList])

  if (!params?.id && !lastMessage) return <></>

  return (
    <div className='history'>
      {messagesList.map((item) => <HistoryItem key={item.id} question={item.question} response={item.response} created_at={item.created_at} />)}
      {!!lastMessage && <HistoryItem question={lastMessage} response='' created_at={''} withLoader/>}
    </div>
  )
}

export default History