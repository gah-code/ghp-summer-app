import React from 'react';
import { Button } from '../../../styles/Buttons.styled.js';
import { NavLink } from '../../../styles/Buttons.styled.js';
import { NavButton } from '../../../styles/Buttons.styled.js';

const NavBar = () => {
  return (
    <header class='header'>
      <a href='#'>
        <img src='' alt='' />
      </a>

      <nav className='main-nav'>
        <ul className='main-nav-list'>
          <li>
            <NavLink href='#how'>How it works</NavLink>
          </li>
          <li>
            <NavLink href='#sessions'>Sessions</NavLink>
          </li>

          <li>
            <NavButton variant='secondary' className='' href='#cta'>
              Book Today
            </NavButton>
          </li>
        </ul>
      </nav>

      {/* <button type='button'>
        <ion-icon class='icon-mobile-nav' name='menu-outline'></ion-icon>
        <ion-icon class='icon-mobile-nav' name='close-outline'></ion-icon>
      </button> */}
    </header>
  );
};

export default NavBar;
