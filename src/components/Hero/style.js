import styled from 'styled-components';

export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  min-height: 80vh;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding-top: 40px;
  }
`;

export const HeroContent = styled.div`
  flex: 1;

  h1 {
    font-size: 3.5rem;
    line-height: 1.1;
    margin-bottom: 20px;
    color: #1e293b;
    text-transform: uppercase;
    letter-spacing: -1px;

    span {
      color: #2563eb;
    }
  }

  p {
    font-size: 1.25rem;
    color: #64748b;
    margin-bottom: 30px;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`;

export const HeroImage = styled.div`
  flex: 1;
  position: relative;

  img {
    width: 100%;
    border-radius: 24px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  }

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    right: -20px;
    width: 100px;
    height: 100px;
    background-color: #2563eb;
    border-radius: 50%;
    z-index: -1;
    opacity: 0.2;
  }
`;

export const CTAButton = styled.button`
  background-color: #1e293b;
  color: #fff;
  padding: 15px 35px;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  transition: transform 0.3s, background-color 0.3s;

  &:hover {
    background-color: #1d4ed8;
    transform: translateY(-3px);
  }
`;
