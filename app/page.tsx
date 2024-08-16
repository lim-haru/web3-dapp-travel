import Card from "@/components/Card"
import { trips } from "@/data/trips"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {trips.map((trip) => (
          <Card
            key={trip.id}
            place={trip.place}
            title={trip.title}
            description={trip.description}
            price={trip.price}
            image={trip.image}
          />
        ))}
      </div>
    </main>
  )
}
