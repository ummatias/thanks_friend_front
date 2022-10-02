import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 15rem;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0 10rem;
`;

export const TitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 110%;
`;

export const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-size: 2rem;
  color: teal;
`;

export const Subtitle = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: teal;
`;

export const LandingImage = styled.img`
  width: 46rem;
  height: 31rem;
`;
