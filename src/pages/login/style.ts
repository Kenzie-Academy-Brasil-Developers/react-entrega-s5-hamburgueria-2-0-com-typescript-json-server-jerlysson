import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    margin: 5vw 0 0;
  }
`;

export const Title = styled.h1`
  color: var(--title-color);
  font-size: 35px;
  margin: 40px 0 30px 0.5em;
  span {
    color: var(--title-secondary-color);
    font-size: 15px;
    ::before {
      content: "   ";
    }
  }
`;

export const InfoRight = styled.aside`
  display: flex;
  justify-content: space-between;
  margin: 15px 20px;
  padding: 20px;
  background: white;
  border: 1px solid var(--gray-100);
  box-shadow: 0px 1px 10px 1px;
  border-radius: 5px;
`;

export const Frame = styled.picture`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 60px;
  background-color: var(--gray-100);
  border-radius: 5px;
  svg,
  svg path {
    font-size: 25px;
    color: var(--primary-color);
  }
`;

export const Text = styled.p`
  margin: 0 2em;
  text-align: left;
  font-weight: normal;
  font-size: 14px;
  line-height: 25px;
  color: var(--gray-300);
  span {
    color: var(--gray-600);
    font-weight: 600;
  }
`;
