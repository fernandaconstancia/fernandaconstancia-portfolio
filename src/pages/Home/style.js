import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  /* padding: 1rem; */
  padding: 5rem 1rem;

  @media (min-width: 860px) {
    flex-direction: row-reverse;
    /* padding: 5rem 1rem; */
  }
`;

export const BoxInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  width: 100%;
  font-weight: 400;
  line-height: 1.2;

  h5 {
    font-weight: 400;
    color: var(--color-1);
    font-size: 0.8rem;

    @media (min-width: 500px) {
      font-size: 1rem;
    }

    @media (min-width: 860px) {
      font-size: 1.3rem;
    }
  }

  p {
    font-weight: 700;
    color: var(--color-5);
    font-size: 1.4rem;

    @media (min-width: 500px) {
      font-size: 2rem;
    }

    @media (min-width: 860px) {
      font-size: 2.5rem;
    }

    @media (min-width: 1024px) {
      font-size: 3rem;
    }
  }

  span {
    color: var(--color-3);
    font-size: 1rem;

    @media (min-width: 500px) {
      font-size: 1.5rem;
    }

    @media (min-width: 860px) {
      font-size: 1.8rem;
    }

    @media (min-width: 1024px) {
      font-size: 2rem;
    }
  }
`;

export const BoxImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;

  img {
    width: 100%;
    min-width: 300px;
    max-width: 500px;

    @media (min-width: 860px) {
      :hover {
        transform: scale(1.03);
        transition: 1s ease-out;
      }
    }
  }
`;
