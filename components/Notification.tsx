import { useEffect } from "react"

export default function Notification({ message, onClose }: { message: string; onClose: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 7000)

    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className="fixed bottom-4 left-4 p-4 bg-red-500 text-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4 text-white hover:text-gray-300">
          &times;
        </button>
      </div>
    </div>
  )
}
