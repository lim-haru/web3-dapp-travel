import Image from "next/image"
import PurchaseButton from "@/components/PurchaseButton"

interface CardProps {
  place: string
  title: string
  description: string
  image: string
  price: number
}

export default function Card(props: CardProps) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
      <Image className="rounded-t-lg" alt={props.place} src={props.image} width={550} height={380} />
      <div className="p-5 flex flex-col flex-grow">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-grow">{props.description}</p>
      </div>
      <div className="flex justify-between items-center p-5 border-t border-gray-200 dark:border-gray-700">
        <span className="text-xl font-semibold text-gray-900 dark:text-white">{props.price} ETH</span>
        <PurchaseButton title={props.title} price={props.price} />
      </div>
    </div>
  )
}
