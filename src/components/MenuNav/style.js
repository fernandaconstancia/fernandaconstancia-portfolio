import styled from "styled-components";

export const Header = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 72px;
  border-bottom: 1px solid var(--color-9);
  padding: 0 12px;
  background: var(--color-6);
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    width: 100%;

    h1 {
      padding-left: 20px;
      color: var(--color-1);
      font-size: 2.5rem;
    }
  }
`;

export const Logo = styled.img`
  height: 3rem;

  :hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  div {
    padding: 5px 12px;
    color: var(--color-1);
    cursor: pointer;
    font-size: 20px;

    :hover {
      color: var(--color-5);
    }
  }
`;
