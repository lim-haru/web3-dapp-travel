import { useState } from "react"
import { type Address } from "viem"

interface TransactionStatusProps {
  hash: Address
  isConfirming: boolean
  isConfirmed: boolean
}

export default function TransactionStatus({ hash, isConfirming, isConfirmed }: TransactionStatusProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [isCopied, setIsCopied] = useState(false)

  if (!isVisible) return null

  const abbreviatedHash = `${hash.slice(0, 6)}...${hash.slice(-4)}`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(hash).then(() => {
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    })
  }

  return (
    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div className="relative bg-white dark:bg-gray-900 border-gray-200 dark:border-zinc-900 border-2 text-gray-900 dark:text-white rounded-xl shadow-lg p-6 sm:p-8 md:p-12">
          <button
            className="absolute top-1 right-3 sm:top-2 sm:right-4 md:top-3 md:right-5 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
            onClick={() => setIsVisible(false)}
          >
            &#x2715;
          </button>
          {hash && (
            <div className="mb-4 flex items-center">
              <span className="hidden xl:block">Hash Transazione: {hash}</span>
              <span className="block xl:hidden">Hash Transazione: {abbreviatedHash}</span>
              <button
                onClick={copyToClipboard}
                className="ml-2 p-1 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375Zm9.586 4.594a.75.75 0 0 0-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.116-.062l3-3.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isCopied && <span className="ml-2 text-green-500">Copied!</span>}
            </div>
          )}
          {isConfirming && <div>In attesa di conferma...</div>}
          {isConfirmed && <div>Transazione confermata.</div>}
        </div>
      </div>
    </div>
  )
}
