import React from "react"

import { Layout, Input, History, Suggestions, WelcomeMessage } from "../../components"

import './styles.scss';

const TerminalPage: React.FC = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const listRef = React.useRef<HTMLDivElement>(null);

  const handleScrollToBottom = () => {
    listRef.current?.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    })
  }

  const bringFocusToInput = () => {
    if (inputRef && inputRef.current) inputRef.current.focus()
  }

  return(
    <Layout withSidebar className="terminal-page">
      <div ref={listRef} onClick={bringFocusToInput} className="terminal-page__content">
        <WelcomeMessage />
        <Suggestions />
        <History handleScrollToBottom={handleScrollToBottom} />
        <Input ref={inputRef} />
      </div>
    </Layout>
  )
}

export default TerminalPage