import React from 'react'
import { ReactComponent as LogoIcon } from '../../images/logo.svg'
import { NavItem } from '../nav-item'
import { NavMenu } from '../nav-menu'
import { COMPANY, FEATURES } from './constatnt'

export const Header = () => {
  return (
    <header className='flex items-center'>
        <LogoIcon/>
        <nav className='flex space-x-6 ml-8 items-center'>
            <NavItem text='Feature'>
              <NavMenu items={FEATURES} />
            </NavItem>
            <NavItem text='Company'>
            <NavMenu items={COMPANY} />
            </NavItem>
            <NavItem text='Careers'/>
            <NavItem text='about'/>
        </nav>
    </header>
  )
}
