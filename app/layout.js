import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Metadata, Viewport } from "next";

const APP_NAME = "QuickCuts";
const APP_DEFAULT_TITLE = "QuickCuts";
const APP_TITLE_TEMPLATE = "%s - PWA App";
const APP_DESCRIPTION = "AI powered short video generator";
import Provider from "./provider";
import {Outfit} from 'next/font/google'
import { ThemeProvider } from "next-themes";



export const metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  }

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
