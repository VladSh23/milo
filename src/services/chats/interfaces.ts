export interface IChat {
  id: number
  title: string
  user_ip: string
  created_at: string
  messages: IMessage[]
}

export interface IResponseCreateNewChat {
  message: {
    id: number
    chat_id: number
    question: string
    response: string
    created_at: string
  }
}

export interface IMessage {
  chat_id: number
  created_at: string
  id: number
  question: string
  response: string
}