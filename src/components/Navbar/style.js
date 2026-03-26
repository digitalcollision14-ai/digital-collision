import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`;

export const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  font-family: 'Outfit', sans-serif;
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    height: 40px;
    width: auto;
  }

  span {
    color: #1e293b;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.li`
  font-weight: 500;
  color: #64748b;
  transition: color 0.3s;

  &:hover {
    color: #2563eb;
  }
`;

export const ContactBtn = styled.button`
  background-color: #1e293b;
  color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ddd8d8;
    color: #1e293b;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
