import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const Header = styled.header`
  width: 100%;
  height: 9rem;
  background-color: ${({ theme }) => theme.colors.pink_bg};
  padding: 0 15rem;
  display: flex;
  align-items: center;
  
  svg {
    color: ${({ theme }) => theme.colors.pink};
  }
  
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.pink};
    margin-left: 0.5rem;
  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: 2rem auto 0;

  div:nth-child(4) {
    margin-top: 1.5rem;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -7.75rem auto 2rem;
  width: 186px;
  height: 186px;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  label {
    width: 3rem;
    height: 3rem;
    background-color: ${({ theme }) => theme.colors.pink};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 1.25rem;
      height: 1.25rem;
      color: ${({theme}) => theme.colors.black};
    }
  }
`;
