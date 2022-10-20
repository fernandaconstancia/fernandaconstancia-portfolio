import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem 1rem 0 1rem;
`;

export const BoxText = styled.div`
  width: 100%;
  max-width: 80rem;
`;

export const BoxInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: justify;
  flex-direction: column;
  width: 100%;
  line-height: 1.2;
  padding: 30px;

  p {
    color: var(--color-5);
    font-size: 1.3rem;
    margin-bottom: 3rem;

    @media (min-width: 500px) {
      font-size: 1.8rem;
    }
  }

  span {
    color: var(--color-3);
    font-size: 1.3rem;
    margin-bottom: 20px;

    @media (min-width: 500px) {
      font-size: 1.5rem;
    }
  }
`;

export const BoxList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.5rem;
  width: 100%;
  padding: 10px;

  li {
    text-align: center;
    width: 100%;
    max-width: 200px;
    color: var(--color-9);
    font-size: 1.3rem;

    svg {
      margin-right: 5px;
    }

    :hover {
      opacity: 0.2;
    }
  }
`;
