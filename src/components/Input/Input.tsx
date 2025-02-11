import React, { forwardRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import Ps1 from '../Ps1';
import { useCreateNewChatMutation, usePostMessageMutation } from '../../services/chats/chats';
import { useAppDispatch } from '../../hooks';
import { clearLastMessage, setLastMessage } from '../../services/global/globalSlice';

import './styles.scss'

export const Input = forwardRef<HTMLInputElement, object>((_props, ref) => {
  const dispatch = useAppDispatch()
  const param = useParams()
  const navigate = useNavigate()

  const [value, setValue] = useState<string>('')
  const [createNewChat, {isLoading: isNewChatLoading}] = useCreateNewChatMutation();
  const [postMessage, {isLoading}] = usePostMessageMutation()

  const onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(value);
  };

  const onSubmit = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' || event.code === '13' && (!isNewChatLoading && !isLoading)) {
      event.preventDefault();
      dispatch(setLastMessage(value))
      setValue('')
      if (param.id) {
        await postMessage({ chat_id: param.id, question: value })
        .then(() => {
          dispatch(clearLastMessage())
        })
      } else {
        await createNewChat({ question: value })
        .then(response => {
          if (response.data?.message.chat_id) navigate(`/terminal/${response.data?.message.chat_id}`)
          dispatch(clearLastMessage())
        })
      }
    }
  };

  return (
    <div className="input">
      <label htmlFor="prompt" className="flex-shrink">
        <Ps1 />
      </label>
      <input
        ref={ref}
        id="prompt"
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={onSubmit}
        autoFocus
        autoComplete="off"
        spellCheck="false"
      />
    </div>
  );
});

export default Input;