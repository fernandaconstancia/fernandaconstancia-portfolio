import styled from "styled-components";

export const Container = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 10px;
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
    color: var(--color-9);
    font-size: 1rem;

    svg {
      margin-right: 5px;
    }

    :hover {
      opacity: 0.2;
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

export const Input = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    color: var(--color-9);
    font-size: 1rem;
  }

  input {
    background: var(--color-9);
    border-radius: 6px;
    width: 100%;
    margin-bottom: 1rem;
    margin-top: 0.3rem;
    color: var(--color-2);
    outline: none;
    padding: 10px;
    border: 2px solid var(--color-9);

    &:focus {
      border: 2px solid var(--color-5);
    }

    &::placeholder {
      color: var(--color-6);
    }
  }
`;

export const Textarea = styled(Input)`
  textarea {
    background: var(--color-9);
    border-radius: 6px;
    max-width: 100%;
    margin-top: 0.3rem;
    color: var(--color-2);
    padding: 10px;
    outline: none;
    border: 2px solid var(--color-9);
    resize: vertical;

    &:focus {
      border: 2px solid var(--color-5);
    }

    &::placeholder {
      color: var(--color-6);
    }
  }
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
