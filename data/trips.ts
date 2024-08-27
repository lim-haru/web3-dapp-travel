interface Trip {
  id: number;
  place: string;
  title: string;
  description: string;
  image: string;
  price: number;
}

const gatewayUrl = process.env.NEXT_PUBLIC_IPFS_GATEWAY;

export const trips: Trip[] = [
  {
    id: 1,
    place: "Indonesia",
    title: "Indonesia: Bali & Komodo",
    description:
      "Un viaggio per scoprire l'Indonesia, l'isola di Bali e Komodo tra templi, foreste e sessioni di yoga, passando per spiagge da sogno e piccoli Godzilla!",
    image: `${gatewayUrl}/ipfs/QmbLjJJkULgyxf6b3tPau6Tu3opXneLCN8t3mwiRC7VFSY/Indonesia.jpeg`,
    price: 1.37,
  },
  {
    id: 2,
    place: "Perù",
    title: "Perù: Machu Picchu Dream",
    description:
      "Un viaggio nel cuore dell'America Latina attraverso la storia ed i luoghi più emblematici di un paese che vi farà innamorare",
    image: `${gatewayUrl}/ipfs/QmbLjJJkULgyxf6b3tPau6Tu3opXneLCN8t3mwiRC7VFSY/Perù.jpeg`,
    price: 1.33,
  },
  {
    id: 3,
    place: "Turchia",
    title: "Turchia: Cappadocia e Istanbul",
    description: "La Cappadocia è un posto unico al mondo, siete pronti a vivere il sogno?",
    image: `${gatewayUrl}/ipfs/QmbLjJJkULgyxf6b3tPau6Tu3opXneLCN8t3mwiRC7VFSY/Turchia.jpeg`,
    price: 0.89,
  },
  {
    id: 4,
    place: "Stati Uniti",
    title: "Stati Uniti: California Dreaming",
    description: "Il viaggio per eccellenza tra spiagge, scogliere, sequoie e tanto altro",
    image: `${gatewayUrl}/ipfs/QmbLjJJkULgyxf6b3tPau6Tu3opXneLCN8t3mwiRC7VFSY/Stati_Uniti.jpeg`,
    price: 1.21,
  },
  {
    id: 5,
    place: "Kirghizistan",
    title: "Kirghizistan - Lungo la Via della Seta",
    description: "Un viaggio nel cuore della natura sconfinata del Kirghizistan",
    image: `${gatewayUrl}/ipfs/QmbLjJJkULgyxf6b3tPau6Tu3opXneLCN8t3mwiRC7VFSY/Kirghizistan.jpeg`,
    price: 1.13,
  },
  {
    id: 6,
    place: "Sri Lanka",
    title: "Sri Lanka: Avventura on the road",
    description:
      "Un territorio magico, ancora incontaminato, tra natura e spiagge selvagge. Prontə per un on the road alla scoperta dello Sri Lanka?",
    image: `${gatewayUrl}/ipfs/QmbLjJJkULgyxf6b3tPau6Tu3opXneLCN8t3mwiRC7VFSY/Sri_Lanka.jpeg`,
    price: 1.09,
  },
  {
    id: 7,
    place: "Islanda",
    title: "Islanda del Sud",
    description:
      "On the road attraverso i luoghi più remoti e magici del selvaggio sud d'Islanda: la Laguna glaciale, il bagno nel fiume caldo, il sole di mezzanotte e molto altro...",
    image: `${gatewayUrl}/ipfs/QmbLjJJkULgyxf6b3tPau6Tu3opXneLCN8t3mwiRC7VFSY/Islanda.jpeg`,
    price: 0.89,
  },
  {
    id: 8,
    place: "Corea del Sud",
    title: "Corea del Sud",
    description:
      "Un viaggio alla scoperta della Corea del Sud, una terra sospesa tra tradizione e hi tech futuristico, dalla metropoli di Seoul agli incredibili templi di Gyeongju. Preparatevi a scoprire questo Paese incredibile!",
    image: `${gatewayUrl}/ipfs/QmbLjJJkULgyxf6b3tPau6Tu3opXneLCN8t3mwiRC7VFSY/Corea_del_Sud.jpeg`,
    price: 0.0001,
  },
];
