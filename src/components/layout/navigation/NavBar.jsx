import React from 'react';
import { Button } from '../../../styles/Buttons.styled.js';
import { NavLink } from '../../../styles/Buttons.styled.js';

const NavBar = () => {
  return (
    <header class='header'>
      <a href='#'>
        <img src='' alt='' />
      </a>

      <nav className='main-nav'>
        <ul className='main-nav-list'>
          <li>
            <NavLink className='main-nav-link' href='#how'>
              How it works
            </NavLink>
          </li>
          <li>
            <NavLink className='main-nav-link' href='#sessions'>
              Sessions
            </NavLink>
          </li>
          <li>
            <NavLink className='main-nav-link' href='#pricing'>
              Pricing
            </NavLink>
          </li>
        </ul>
      </nav>

      <Button primary type='button'>
        <ion-icon class='icon-mobile-nav' name='menu-outline'>
          test
        </ion-icon>
        <ion-icon class='icon-mobile-nav' name='close-outline'>
          test{' '}
        </ion-icon>
      </Button>
    </header>
  );
};

export default NavBar;
