import styled from 'styled-components';

export const PricingSection = styled.section`
  background-color: #f1f5f9;
  border-radius: 40px;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const PricingTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: #1e293b;

  span {
    color: #2563eb;
  }
`;

export const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

export const PricingCard = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 24px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 2px solid transparent;
  transition: transform 0.3s, border-color 0.3s;
  min-height: 600px;

  &:hover {
    transform: translateY(-10px);
    border-color: #1e293b;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #1e293b;
  }

  .price {
    font-size: 2rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 25px;
  }

  ul {
    width: 100%;
    margin-bottom: 30px;
    text-align: left;

    li {
      margin-bottom: 12px;
      color: #64748b;
      display: flex;
      align-items: center;
      gap: 10px;

      svg {
        color: #10b981;
        flex-shrink: 0;
      }
    }
  }
`;

export const SelectBtn = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #1e293b;
  color: #fff;
  border-radius: 10px;
  font-weight: 600;
  transition: opacity 0.3s;
  margin-top: auto;

  &:hover {
    opacity: 0.9;
  }
`;
