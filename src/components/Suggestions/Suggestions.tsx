import React from 'react';
import Ps1 from '../Ps1';
import { themes } from './constants';
import { useAppDispatch } from '../../hooks';
import { clearLastMessage, setLastMessage } from '../../services/global/globalSlice';
import { useNavigate, useParams } from 'react-router';
import { useCreateNewChatMutation, usePostMessageMutation } from '../../services/chats/chats';

import './style.scss'

const Suggestions: React.FC = () => {
  const param = useParams()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [createNewChat, {isLoading: isNewChatLoading}] = useCreateNewChatMutation();
  const [postMessage, {isLoading}] = usePostMessageMutation()

  const onThemeChoose = async (theme: string) => {
    if (!isNewChatLoading && !isLoading) {
      dispatch(setLastMessage(theme))
      if (param.id) {
        await postMessage({ chat_id: param.id, question: theme })
        .then(() => {
          dispatch(clearLastMessage())
        })
      } else {
        await createNewChat({ question: theme })
        .then(response => {
          if (response.data?.message.chat_id) navigate(`/terminal/${response.data?.message.chat_id}`)
          dispatch(clearLastMessage())
        })
      }
    }
  };

  if (param.id) return <></>

  return (
    <div className='suggestion'>
      <p className="suggestion__label not-link">
        <Ps1 /> 
        <span>Current Themes</span>
      </p>
      {themes.map((item, index) => <p onClick={() => onThemeChoose(item)} key={index}>-{'>'} {item}</p>)}
    </div>
  );
};

export default Suggestions