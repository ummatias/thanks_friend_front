import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 10rem;
  height: 4rem;
  background-color: #fff;
`;

export const NavbarButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  width: 25rem;
`;

export const Logo = styled.img`
  width: 17rem;
  height: 4.5rem;
  cursor: pointer;
`;
