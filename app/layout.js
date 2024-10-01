import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./provider";
import {Outfit} from 'next/font/google'
import { ThemeProvider } from "next-themes";



export const metadata = {
  title: "QuickCuts",
  description: "AI powered short video generator",
};
const outfit = Outfit({subsets:['latin']})

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={outfit.className}
        >
          <Provider>
            <ThemeProvider attribute="class">
            {children}
            </ThemeProvider>
         
          </Provider>
          
        </body>
      </html>
    </ClerkProvider>
  );
}
