import styled from 'styled-components';

export const WhyUsSection = styled.section`
  display: flex;
  align-items: center;
  gap: 60px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

export const WhyUsImage = styled.div`
  flex: 1;

  img {
    width: 100%;
    border-radius: 24px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  }
`;

export const WhyUsContent = styled.div`
  flex: 1;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 30px;
    color: #1e293b;

    span {
      color: #2563eb;
    }
  }
`;

export const WhyUsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const WhyUsCard = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  svg {
    color: #1e293b;
  }

  h4 {
    font-size: 1.1rem;
    color: #1e293b;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    align-items: center;
  }
`;
