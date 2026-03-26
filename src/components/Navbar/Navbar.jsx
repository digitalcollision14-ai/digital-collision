import React from 'react';
import { NavContainer, Logo, NavLinks, NavLink, ContactBtn } from './style';
import imgLogo from '../../../assets/logo/Logo3.png';

const Navbar = () => {
  return (
<NavContainer>
  <Logo href="/">
    <img src={imgLogo} alt="logo" />
  </Logo>

  <NavLinks>
    <li><a href="#layanan">Layanan</a></li>
    <li><a href="#mengapa-kami">Mengapa Kami</a></li>
    <li><a href="#harga">Harga</a></li>
    <li><a href="#kontak">Kontak</a></li>
  </NavLinks>

  <ContactBtn>Hubungi Kami</ContactBtn>
</NavContainer>
  );
};

export default Navbar;