"use client"

import { Address, parseEther } from "viem"
import { useSendTransaction } from "wagmi"
import { toHex } from "viem/utils"

export default function PurchaseButton({ title, price }: { title: string; price: number }) {
  const { data: hash, sendTransaction } = useSendTransaction()

  function handlePurchase() {
    const data = toHex(title)
    const to = process.env.NEXT_PUBLIC_CRYPTO_PAYMENT_ADDRESS as Address
    if (!to) {
      throw new Error("Indirizzo di pagamento crypto non configurato correttamente")
    }
    const value = price.toString()
    sendTransaction({ data, to, value: parseEther(value) })
  }

  return (
    <a
      href="#"
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      onClick={handlePurchase}
    >
      Acquista
      <svg
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
      </svg>
    </a>
  )
}
