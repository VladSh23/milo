import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IChat, IResponseCreateNewChat } from './interfaces'

export const chatsApi = createApi({
  reducerPath: 'chatsApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  tagTypes: ['Chat List', 'Chat'],
  endpoints: (builder) => ({
    getChatData: builder.query<IChat, string | undefined>({
      query: (chat_id) => {
        if (chat_id) return `/chat/${chat_id}`
        throw new Error("chat_id is required.");
      },
      providesTags: ['Chat']
    }),
    postMessage: builder.mutation<IResponseCreateNewChat, { question: string, chat_id: string }>({
      query: ({question, chat_id}) => ({
        url: `/chat/${chat_id}`,
        method: 'POST',
        body: { question }
      }),
      invalidatesTags: ['Chat'],
    }),
    getChatsList: builder.query<Omit<IChat, "messages">[], null>({
      query: () => `/chats`,
      providesTags: ['Chat List']
    }),
    createNewChat: builder.mutation<IResponseCreateNewChat, { question: string }>({
      query: (body) => ({
        url: '/chat',
        method: 'POST',
        body,
        responseHandler: (response) => response.text()
      }),
      invalidatesTags: ['Chat List'],
      transformResponse: (response: IResponseCreateNewChat) => {
        const text = response.toString()
        const jsonPart = text.split("final||")[1];

        if (jsonPart) {
          return JSON.parse(jsonPart);
        } else {
          throw new Error("Invalid JSON format received");
        }
      },
    }),
    removeChat: builder.mutation<string, string>({
      query: (chat_id) => ({
        url: `/chat/${chat_id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Chat List']
    }),
  }),
})

export const { useGetChatsListQuery, useCreateNewChatMutation, useRemoveChatMutation, usePostMessageMutation, useGetChatDataQuery } = chatsApi