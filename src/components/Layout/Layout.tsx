import React, { PropsWithChildren } from 'react'
import { Link, useLocation } from 'react-router'
import classNames from 'classnames'

import Sidebar from '../Sidebar'
import CTAButon from '../CTAButton'
import SidebarIcon from '../../assets/sidebarIcon'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { selectExpanded, setExpanded } from '../../services/global/globalSlice'
import { navLinks } from './constants'
import { ILayoutProps } from './interfaces'

import './styles.scss'


const Layout: React.FC<PropsWithChildren<ILayoutProps>> = ({ children, className, withSidebar = false }) => {
  const { pathname } = useLocation()
  const dispatch = useAppDispatch()
  const expanded = useAppSelector(selectExpanded)

  const toggleExpanded = () => {
    dispatch(setExpanded(!expanded))
  }

  return(
    <div className={classNames('main-layout', className)}>
      {withSidebar && <Sidebar expanded={expanded} toggleExpanded={toggleExpanded} />}
      <div className='main-layout__content'>
        <header>
          <div className='header-content'>
            {withSidebar && !expanded && (
              <button className='sidebar-button' onClick={toggleExpanded}>
                <SidebarIcon />
              </button>
            )}
            <Link to='/'>Home</Link>
            <div className='nav-container'>
              {navLinks.map(({ label, to }, index) => (
                <Link key={index} to={to}>{label}</Link>
              ))}
            </div>
            {!pathname.includes('/terminal') && <CTAButon />}
          </div>
        </header>
        <section className='body'>
          {children}
        </section>
      </div>
    </div>
  )
}

export default Layout