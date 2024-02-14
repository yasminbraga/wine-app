"use client";
import { HeaderContainer } from "./styles";

import Image from "next/image";

const Logo = () => {
  return <Image src={"/black.png"} alt="wine logo" width={100} height={28} />;
};

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo />
    </HeaderContainer>
  );
};

export default Header;
