import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="py-4 xl:py-6 text-black bg-slate-200">
      <div className="container mx-auto flex justify-between items-center">
        <Image alt="Logo" src="/logo.png" width={70} height={70} />
        <Link href="/" className="hidden sm:block">
          <h1 className="text-4xl font-semibold">Travel Tours</h1>
        </Link>
        <w3m-button />
      </div>
    </header>
  )
}
