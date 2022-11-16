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
      transition: all 0.2s;
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
      color: #ffffff;
      border-color: rgba(0, 0, 0, 0);
      border-radius: 100px;

      background-color: #ff4d54;
      text-decoration: none;
      font-weight: 500;
      font-size: 1.6rem;
      transition: letter-spacing all 0.3s;
      padding: 1.3rem 2.8rem;

      /* background: var(--color-btn); */
    }

    &:hover,
    &:after {
      transform: translateY(-3px);
      background: var(--color-btn-hover);
      box-shadow: 0 1rem 2rem rgba(#333, 0.2);
    }

    &:active,
    &:focus {
      outline: none;
      transform: translateY(-1px);
      box-shadow: 0 0.5rem 1rem rgba(#333, 0.2);
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
