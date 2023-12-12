import Image from "next/image";
import React from "react";
import img_github_logo_white from "@/public/image/img_github_logo_white.png";
import * as styles from "../../styles/Common/Header.css";

const Header = () => {
  return (
    <header className={styles.HeaderWrapper}>
      <Image
        src={img_github_logo_white}
        alt="깃허브-로고"
        width={30}
        height={30}
      />
      <h1 className={styles.HeaderTitle}>깃허브 팔로우 탐지기</h1>
    </header>
  );
};

export default Header;
