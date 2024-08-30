import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { headers } from "next/headers"

import { cookieToInitialState } from "wagmi"

import { config } from "@/config"
import AppKitProvider from "@/context"

import Header from "@/components/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Viaggi Consapevoli e Sostenibili - DApp su Ethereum",
  description:
    "Esplora e acquista pacchetti viaggio eco-sostenibili utilizzando Ethereum. Scopri destinazioni con un impatto ambientale ridotto.",
  keywords: "viaggi sostenibili, DApp, Ethereum, pacchetti viaggio eco-friendly, blockchain, turismo consapevole",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const initialState = cookieToInitialState(config, headers().get("cookie"))
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppKitProvider initialState={initialState}>
          <Header />
          {children}
        </AppKitProvider>
      </body>
    </html>
  )
}
