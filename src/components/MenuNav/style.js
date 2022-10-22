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
`;

export const Name = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  h1 {
    color: var(--color-1);
    font-size: 2rem;

    @media (max-width: 860px) {
      font-size: 1.3rem;
    }
  }
`;

export const Logo = styled.img`
  height: 3rem;
  margin-right: 10px;

  :hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;

export const Mobile = styled.div`
  display: none;

  input {
    position: absolute;
    opacity: 0;
  }

  label {
    display: none;
    position: absolute;
    width: 45px;
    height: 45px;
    z-index: 1;
    cursor: pointer;
  }

  span {
    display: none;
    position: relative;
    background-color: var(--color-1); // barrinha menu meio
    width: 40px;
    height: 3px;
    border-radius: 10px;
    transition: all 0.3s linear;
  }

  span::after,
  span::before {
    content: "";
    position: absolute;
    background-color: var(--color-1); // barrinha menu cima e baixo
    width: 40px;
    height: 4px;
    top: -14px;
    border-radius: 10px;
    transition: all 0.3s linear;
  }

  span::before {
    top: 14px;
  }

  input:checked ~ span {
    background-color: transparent;
  }

  input:checked ~ span::before {
    transform: rotate(-45deg);
    top: 0;
  }

  input:checked ~ span::after {
    transform: rotate(45deg);
    top: 0;
  }

  @media (max-width: 860px) {
    display: flex;
    label,
    span {
      display: block;
    }
  }
`;

export const Nav = styled.nav`
  /* position: relative;
  height: 100vh; */
  display: flex;
  align-items: center;
  flex-direction: row;
  color: var(--color-1);
  cursor: pointer;
  font-size: 1rem;
  div {
    padding: 5px 12px;

    :hover {
      color: var(--color-5);
    }
  }

  @media (max-width: 860px) {
    position: fixed;
    transition: all 0.3s ease-in;
    max-height: ${(props) => (props.mobile ? "0" : "500px")};
    padding-left: 10px;
    overflow: hidden;
    top: 72px;
    right: 0;
    /* width: 100%; */
    width: ${(props) => (props.mobile ? "0" : "100%")};
    /* border-radius: 8px 0 0 8px; */
    color: var(--color-1);
    background-color: var(--color-7);
    flex-direction: column;
    font-size: 1.5rem;

    div {
      padding: 10px;
    }
  }
`;
