import Card from "../components/card";

const cards = [
    {
        title: "Donut Hoops - Ceramic",
        price: 1608,
        image: "https://gabi-label.com/cdn/shop/files/donut-hoops-ceramic-2024-main.jpg?v=1728814263&width=900",
        link: "https://gabi-label.com/products/donut-hoops-ceramic",
        state: true,
    },
    {
        title: "Donut Stone Necklace, Gold - Ceramic",
        price: 1440,
        image: "https://gabi-label.com/cdn/shop/files/Donut-Stone-Necklace_-Gold---Ceramic1.jpg?v=1747667592&width=1080",
        link: "https://gabi-label.com/products/donut-stone-necklace-gold-ceramic",
        state: false,
    },
];

const List = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
        {cards.map((card) => (
            <Card key={card.title} card={card} />
        ))}
    </div>
  );
};

export default List;