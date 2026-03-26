import styled from 'styled-components';

export const FooterSection = styled.footer`
  background-color: #1e293b;
  color: #fff;
  padding: 80px 40px 40px;
  border-radius: 40px 40px 0 0;

  @media (max-width: 768px) {
    padding: 60px 20px 30px;
  }
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 60px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterBrand = styled.div`
  h2 {
    font-size: 1.8rem;
    margin-bottom: 20px;
    color: #2563eb;
    display: flex;
    align-items: center;
    gap: 10px;

    span {
      color: #fff;
    }
  }

  p {
    color: #94a3b8;
    line-height: 1.6;
    max-width: 300px;
  }
`;

export const FooterLinks = styled.div`
  h4 {
    font-size: 1.2rem;
    margin-bottom: 20px;
    color: #fff;
  }

  ul {
    li {
      margin-bottom: 12px;
      color: #94a3b8;
      transition: color 0.3s;

      &:hover {
        color: #2563eb;
      }
    }
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid #334155;
  padding-top: 30px;
  text-align: center;
  color: #64748b;
  font-size: 0.9rem;
`;
