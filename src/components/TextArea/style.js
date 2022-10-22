import styled from "styled-components";

export const TextArea = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${(props) => (props.error ? "0" : "0.3rem")};

  label {
    color: ${(props) =>
      props.error ? "var(--color-error)" : "var(--color-9)"};
  }

  textarea {
    width: 100%;
    background: var(--color-9);
    border-radius: 6px;
    margin-top: 0.3rem;
    color: var(--color-2);
    outline: none;
    padding: 10px;
    font-weight: bold;
    resize: vertical;
    border: 2px solid
      ${(props) => (props.error ? "var(--color-error)" : "var(--color-9)")};

    &:focus {
      border: 2px solid
        ${(props) => (props.error ? "var(--color-error)" : "var(--color-5)")};
    }

    &::placeholder {
      color: var(--color-6);
      font-weight: 400;
    }
  }
`;

export const Error = styled.span`
  color: var(--color-error);
  font-size: 10px;
`;
