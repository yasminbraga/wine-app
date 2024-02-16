import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 88px;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
`;

export const HamburguerBtn = styled.button`
  background: transparent;
  border: none;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const MenuLinks = styled.section`
  gap: 48px;
  height: 100%;
  display: none;

  @media only screen and (min-width: 768px) {
    display: flex;
  }

  a {
    text-decoration: none;
    color: #555555;
    font-size: 18px;
    height: 100%;
    display: flex;
    align-items: center;
  }

  a:hover {
    color: #d14b8f;
    border-bottom: 2px solid #d14b8f;
  }
`;

export const IconsContainer = styled.section`
  display: flex;
  gap: 25px;

  @media only screen and (min-width: 768px) {
    gap: 45px;
  }
`;

export const CartIcon = styled.div`
  position: relative;
`;

export const AccountBtn = styled.a`
  display: none;

  @media only screen and (min-width: 768px) {
    display: inline;
  }
`;

export const CountItems = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #fff;
  color: #4fbfa5;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.35);
  font-weight: 500;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
`;
