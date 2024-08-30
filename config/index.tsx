import { http, createConfig, cookieStorage, createStorage } from "wagmi"
import { mainnet, sepolia } from "wagmi/chains"
import { coinbaseWallet, injected, walletConnect } from "wagmi/connectors"
import { authConnector } from "@web3modal/wagmi"

export const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID

if (!projectId) throw new Error("Project ID is not defined")

export const metadata = {
  name: "web3-dapp-travel",
  description: "AppKit Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
}

const chains = [mainnet, sepolia] as const
export const config = createConfig({
  chains,
  connectors: [
    injected(),
    coinbaseWallet({ appName: metadata.name, appLogoUrl: metadata.icons[0] }),
    walletConnect({ projectId, metadata, showQrModal: false }),
    authConnector({
      chains,
      options: { projectId },
      email: true,
      socials: ["google", "x", "discord"],
      showWallets: true,
      walletFeatures: true,
    }),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
})
