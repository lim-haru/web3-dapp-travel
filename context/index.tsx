"use client"

import React, { ReactNode, useEffect, useState } from "react"
import { config, projectId, metadata } from "@/config"

import { createWeb3Modal } from "@web3modal/wagmi/react"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { State, WagmiProvider } from "wagmi"

// Setup queryClient
const queryClient = new QueryClient()

if (!projectId) throw new Error("Project ID is not defined")

export default function AppKitProvider({ children, initialState }: { children: ReactNode; initialState?: State }) {
  useEffect(() => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches

    // Create modal
    createWeb3Modal({
      metadata,
      wagmiConfig: config,
      projectId: projectId as string,
      enableAnalytics: true,
      enableOnramp: false,
      themeMode: prefersDarkScheme ? "dark" : "light",
    })
  }, [])

  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}
