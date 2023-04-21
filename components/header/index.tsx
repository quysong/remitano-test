import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import HomeIcon from "../../public/home-icon.svg";
import Image from "next/image";
import { ActionWrapper, Box, HeaderBlock, Logo, Title } from "./style";
import Link from "next/link";
import { useRouter } from "next/router";
import SkeletonLoading from "../skeleton";

const ActionBlock = () => {
  const { user } = useUser();
  return (
    <>
      {!user && (
        <Link href="/api/auth/login" tabIndex={0} id="login-btn">
          Log in
        </Link>
      )}
      {user && (
        <Box>
          <span>{user.name}</span>
          <Link href="/share" tabIndex={0} id="share-btn">
            Share a movie
          </Link>
          <Link href="/api/auth/logout" tabIndex={1} id="logout-btn">
            Logout
          </Link>
        </Box>
      )}
    </>
  );
};

const Header = () => {
  const { isLoading } = useUser();
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };

  return (
    <HeaderBlock>
      <Logo onClick={goHome}>
        <Image width={24} height={24} priority src={HomeIcon} alt="Home" />
        <Title>Funny Movies</Title>
      </Logo>
      <ActionWrapper>
        {isLoading ? (
          <SkeletonLoading height={20} width={100} />
        ) : (
          <ActionBlock />
        )}
      </ActionWrapper>
    </HeaderBlock>
  );
};

export default Header;
