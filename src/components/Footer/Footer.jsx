import React from 'react';
import { FooterSection, FooterGrid, FooterBrand, FooterLinks, FooterBottom } from './style';
import { Code2, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <FooterSection id="kontak">
      <FooterGrid>
        <FooterBrand>
          <h2> Digital<span>Collision</span></h2>
          <p>Membangun masa depan digital Anda dengan solusi website yang inovatif dan profesional.</p>
        </FooterBrand>
        <FooterLinks>
          <h4>Layanan</h4>
          <ul>
            <li>Desain Website</li>
            <li>E-Commerce</li>
            <li>Pemeliharaan</li>
            <li>SEO</li>
          </ul>
        </FooterLinks>
        <FooterLinks>
          <h4>Perusahaan</h4>
          <ul>
            <li>Tentang Kami</li>
            <li>Portofolio</li>
            <li>Karir</li>
            <li>Blog</li>
          </ul>
        </FooterLinks>
        <FooterLinks>
          <h4>Kontak</h4>
          <ul>
            <li><Mail size={16} style={{ marginRight: '10px' }} /> digitalcollision14@gmail.com</li>
            <li><Phone size={16} style={{ marginRight: '10px' }} /> +62 812 2856 597</li>
            <li><MapPin size={16} style={{ marginRight: '10px' }} /> Bandung, Indonesia</li>
          </ul>
        </FooterLinks>
      </FooterGrid>
      <FooterBottom>
        &copy; {new Date().getFullYear()} DigitalCollision Software Solution. All rights reserved.
      </FooterBottom>
    </FooterSection>
  );
};

export default Footer;
