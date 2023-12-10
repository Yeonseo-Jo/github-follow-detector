"use client";

import React, { useState } from "react";
import { Inter } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <body className={inter.className}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </body>
  );
};

export default Layout;