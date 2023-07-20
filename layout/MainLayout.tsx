import Header from '@/components/Header'
import React from 'react'
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});


const MainLayout = ({children} :{children: React.ReactNode}) => {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main>
            {children}
        </main>
        </body>
    </html>
  )
}

export default MainLayout