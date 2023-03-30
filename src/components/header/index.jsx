import React from 'react'
import { ReactComponent as LogoIcon } from '../../images/logo.svg'
import { ReactComponent as MenuIcon } from '../../images/icon-menu.svg'
import { Button } from '../button'
import { NavItem } from '../nav-item'
import { NavMenu } from '../nav-menu'
import { COMPANY, FEATURES } from './constatnt'

export const Header = () => {
  return (
    <header className='flex items-center'>
        <LogoIcon className='cursor-pointer'/>
        <nav className='hidden xl:flex space-x-6 ml-8 items-center'>
            <NavItem text='Feature'>
              <NavMenu items={FEATURES} />
            </NavItem>
            <NavItem text='Company'>
            <NavMenu items={COMPANY} />
            </NavItem>
            <NavItem text='Careers'/>
            <NavItem text='about'/>
        </nav>
        <div className='hidden xl:flex ml-auto space-x-5'>
      <Button>Loggin</Button>
      <Button hasBorder={true}>Register</Button>
        </div>
        <div className='flex xl:hidden ml-auto cursor-pointer z-30'>
    <MenuIcon/>
        </div>
    </header>
  )
}
