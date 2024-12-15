import { useEffect, useState } from "react";
import { Summary } from "../summary";
interface SummaryProps {
  titleCard: string;
}
const listTitleCard = ["Entrada", "Saída", "Total"];

export function Dashboar() {
  const [titleCard, setTitleCard] = useState<SummaryProps[]>([]);

  useEffect(() => {
    const formattedTitleCard = listTitleCard.map((title) => ({
      titleFromated: title,
    }));
    setTitleCard(formattedTitleCard);
  }, []);

  return (
    <div className="bg-[#202024] h-screen">
      <section className="max-w-7xl m-auto px-9">
        <div className="flex items-center justify-between pt-10">
          {titleCard.map((title) => (
            <Summary titleCard={title.titleCard} />
          ))}
        </div>

        <div>
          <h1>Dashboard</h1>
        </div>
      </section>
    </div>
  );
}
