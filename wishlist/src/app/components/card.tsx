import { cva } from "class-variance-authority";
import { Button } from "./button";
import { GiftIcon, LinkIcon } from "./icons";

type CardProps = {
  title: string;
  price: number;
  image: string;
  link: string;
  state: boolean;
};

const cardStatusVariants = cva(
  "text-base border-2 px-2 py-1.5 rounded-full w-fit",
  {
    variants: {
      state: {
        available: "text-wish-green-lighter border-wish-green-lighter",
        reserved: "text-wish-red border-wish-red",
      },
    },
    defaultVariants: {
      state: "available",
    },
  }
);

const Card = ({ card }: { card: CardProps }) => {
  return (
    <div className="bg-wish-card-beige rounded-lg flex flex-col md:flex-row">
      <div
        className="w-full md:w-48 bg-cover bg-center bg-no-repeat overflow-hidden rounded-tl-lg rounded-tr-lg md:rounded-tr-none md:rounded-tl-lg md:rounded-bl-lg aspect-[3/4] md:aspect-square"
        style={{ backgroundImage: `url(${card.image})` }}
      />
      <div className="flex flex-col flex-1 w-full p-4 items-start justify-between">
        <div className="flex flex-row justify-between items-start w-full">
          <div className="flex flex-col gap-2">
            <h3 className="text-wish-green-main text-2xl italiana-regular">{card.title}</h3>
            <p className="text-wish-green-lighter text-base"><span className="font-light">ціна:</span> ~{card.price} ₴</p>
          </div>
          <p
            className={cardStatusVariants({
              state: card.state ? "available" : "reserved",
            })}
          >
            {card.state ? "ще можна!" : "заброньовано"}
          </p>
        </div>
        <div className="flex flex-row justify-end gap-4 items-center w-full">
            <Button variant="default" startIcon={<LinkIcon size={16}/>}>посилання</Button>
            <Button variant="call-to-action" startIcon={<GiftIcon size={16}/>}>беру!</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
