import type { Metadata } from "next";

import "../styles/globals.css";
import Layout from "../components/common/Layout";

export const metadata: Metadata = {
  title: "깃허브 맞팔 탐지기",
  description: "DO SOPT 심심스 토이프로젝트 깃허브 맞팔 탐지기입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <Layout>{children}</Layout>
    </html>
  );
}
