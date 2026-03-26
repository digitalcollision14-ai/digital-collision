import styled from 'styled-components';

export const ServicesSection = styled.section`
  background-color: #fff;
  border-radius: 40px;
  margin-top: 40px;
  margin-bottom: 40px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: #1e293b;

  span {
    color: #2563eb;
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

export const ServiceCard = styled.div`
  padding: 40px;
  background-color: #f8fafc;
  border-radius: 20px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  border: 1px solid #e2e8f0;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    border-color: #1e293b;
  }

  svg {
    color: #1e293b;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: #1e293b;
  }

  p {
    color: #64748b;
    line-height: 1.6;
  }
`;
