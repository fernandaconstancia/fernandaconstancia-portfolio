import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 90vh;
`;

export const Header = styled.h1`
  text-align: center;
  margin-bottom: 1.5rem;
  color: var(--color-1);
  font-size: 3rem;
`;

export const Box = styled.div`
  max-width: 500px;
  width: 100%;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.3rem;
  width: 100%;
  padding-bottom: 1.5rem;

  li {
    width: 100%;
    max-width: 70px;
    font-size: 1rem;

    a {
      text-decoration: none;
      color: var(--color-9);

      svg {
        margin-right: 5px;
      }

      :hover {
        opacity: 0.2;
      }
    }
  }
`;

export const Form = styled.form`
  border: 1px solid var(--color-5);
  text-align: center;
  padding: 1rem;
  width: 100%;
  border-radius: 8px;
`;

export const Button = styled.button`
  border-radius: 8px;
  background: var(--color-1);
  color: var(--color-6);
  border: transparent;
  font-size: 1.5rem;
  margin-top: 16px;
  width: 100%;
  cursor: pointer;
  padding: 7px 5px;

  &:hover {
    opacity: 0.6;
  }
`;
