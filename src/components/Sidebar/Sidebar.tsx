import React from 'react'
import { Link, useLocation } from 'react-router'
import classNames from 'classnames'
import SidebarIcon from '../../assets/sidebarIcon'
import { useGetChatsListQuery } from '../../services/chats/chats'
import SidebarItem from './components/SidebarItem'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { ISidebar } from './interfaces'
import { navLinks } from '../Layout/constants'
import { selectExpanded, setExpanded } from '../../services/global/globalSlice'

import './styles.scss'

const Sidebar: React.FC<ISidebar> = () => {
  const location = useLocation()
  const dispatch = useAppDispatch()
  const expanded = useAppSelector(selectExpanded)
  const { data, isLoading } = useGetChatsListQuery(null, { skip: !location.pathname.includes('terminal') })

  const isTerminal = location.pathname.includes('terminal')

  const toggleExpanded = () => {
    dispatch(setExpanded(!expanded))
  }

  if (isLoading) return <></>

  return (
    <div className={classNames('sidebar', {closed: !expanded})}>
      <button className='sidebar-button' onClick={toggleExpanded}>
        <SidebarIcon />
      </button>
      <div className='nav-container'>
        {navLinks.map(({ label, to }, index) => (
          <Link key={index} to={to}>{label}</Link>
        ))}
      </div>
      {isTerminal && (
        <div className='sidebar__items'>
          {data?.map((item) => <SidebarItem key={item.id} {...item} />)}
        </div>
      )}
    </div>
  )
}

export default Sidebar