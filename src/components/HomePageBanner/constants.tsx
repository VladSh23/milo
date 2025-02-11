import { ReactElement } from 'react'
import GithubLogo from '../../assets/githubLogo'
import TwitterLogo from '../../assets/twitterLogo'

export interface IContactItem {
  logo?: ReactElement,
  label: string,
  link: string
}

export const contactItems: IContactItem[] = [
  { label: 'Github', logo: <GithubLogo />, link: '/' },
  { label: 'Twitter', logo: <TwitterLogo />, link: 'https://x.com/milo_opensource?s=21' },
  { label: 'CA', link: '/' },
]