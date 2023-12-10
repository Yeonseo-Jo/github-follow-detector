"use client";

import Link from "next/link";
import * as styles from "../styles/Home/Home.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [token, setToken] = useState("");

  const handleOnChangeTokenInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
  };

  const handleonClickNextBtn = () => {
    if (!token) return;
    router.push("/follow-list");
  };

  return (
    <main className={styles.HomeWrapper}>
      <section className={styles.HomeContents}>
        <div className={styles.TokenLinkBox}>
          <Link
            href={"https://github.com/settings/tokens"}
            className={styles.TokenLinkBtn}
          >
            Github Token 만들러 가기
          </Link>
          <p className={styles.TokenInfoText}>
            ﹒ 토큰 발급 시 권한 user(Update ALL user data)를 체크해주세요!
          </p>
        </div>
        <div className={styles.TokenInputBox}>
          <input
            type="text"
            placeholder="Github Token을 입력해주세요"
            onChange={handleOnChangeTokenInput}
            className={styles.TokenInput}
          />
          <button
            type="button"
            onClick={handleonClickNextBtn}
            className={styles.TokenInputNextBtn}
          >
            나의 맞팔 확인하기
          </button>
        </div>
      </section>
    </main>
  );
}
