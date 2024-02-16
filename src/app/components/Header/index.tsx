"use client";
import {
  AccountBtn,
  CartIcon,
  CountItems,
  HamburguerBtn,
  HeaderContainer,
  IconsContainer,
  MenuLinks,
} from "./styles";

import Image from "next/image";
import { IoIosMenu } from "react-icons/io";

const Logo = () => {
  return <Image src={"/black.png"} alt="wine logo" width={100} height={28} />;
};

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HamburguerBtn>
        <IoIosMenu size={"2em"} />
      </HamburguerBtn>
      <Logo />
      <MenuLinks>
        <a href="">Clube</a>
        <a href="">Loja</a>
        <a href="">Produtores</a>
        <a href="">Ofertas</a>
        <a href="">Eventos</a>
      </MenuLinks>

      <IconsContainer>
        <a href="">
          <Image src={"/busca.svg"} alt="search" width={56} height={56} />
        </a>
        <AccountBtn href="">
          <Image src={"/conta.svg"} alt="search" width={56} height={56} />
        </AccountBtn>
        <CartIcon>
          <a href="">
            <Image src={"/winebox.svg"} alt="search" width={56} height={56} />
          </a>
          <CountItems>
            <p>0</p>
          </CountItems>
        </CartIcon>
      </IconsContainer>
    </HeaderContainer>
  );
};

export default Header;
