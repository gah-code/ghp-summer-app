import styled from 'styled-components';
// import { variant } from 'styled-system';

export const Button = styled.button`
   {
    display: inline-block;
    text-decoration: none;
    font-size: 2rem;
    font-weight: 600;
    padding: 1.6rem 3.2rem;
    border-radius: 10rem;

    border: none;
    cursor: pointer;
    font-family: inherit;
    transition: all 0.3s;

    background: ${(props) => (props.primary ? '#84a598' : 'white')};
    color: ${(props) => (props.primary ? 'white' : '#354c44')};
  }
`;

//  &:hover,
//   &:active {
//     background-color: var(--color-background-shade);
//     /* Trick to add border inside */
//     box-shadow: inset 0 0 0 3px #fff;
//   }

export const NavLink = styled.a`
   {
    &:link,
    &:visited {
      display: inline-block;
      text-decoration: none;
      color: #333;
      font-weight: 500;
      font-size: 1.6rem;
      transition: all 0.3s;
      padding: 1.6rem 3.2rem;
      border-radius: 10rem;
    }

    &:hover,
    &:active {
      color: var(--color-primary);
    }
  }
`;

export const NavButton = styled.a`
   {
    &:link,
    &:visited {
      display: inline-block;
      text-decoration: none;
      color: #333;
      font-weight: 500;
      font-size: 1.6rem;
      transition: all 0.3s;
      padding: 1.3rem 2.8rem;
      border-radius: 10rem;
      background: var(--color-btn);
    }

    &:hover,
    &:active {
      background: var(--color-btn-hover);
    }
  }
`;

export const ButtonMobileNav = styled.button`
   {
    display: inline;
    border: none;
    background: none;
    cursor: pointer;

    display: none;
  }
`;

export const Link = styled.a`
   {
    display: inline;
  }
`;
