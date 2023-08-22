import React from "react";
import Head from "next/head";
import { Rubik } from 'next/font/google'
import { GrowingCircleDiv } from "../GlobalUI/DivGrowingCircle";



const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
})
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <>
      <Head>
        <title>Rodrigo Cariello</title>
        <link rel="icon" href="rain.gif" type="image/gif" />
      </Head>
      <main className={ `relative min-h-screen bg-[#F5F5F5] ${rubik.variable}`}>
        {children}
      </main>
    </>
  );
};

export default Layout;
