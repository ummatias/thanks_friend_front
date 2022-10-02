import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15rem;
`;

export const Desc = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 21rem;
  gap: calc(5%);
`;

export const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-size: 3.5rem;
  color: teal;
`;

export const Subtitle = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  color: teal;
  text-align: center;
  margin-bottom: 1rem;
`;

export const LandingImage = styled.img`
  width: 46rem;
  height: 31rem;
`;
