import { useEffect, useState } from "react";
import { Summary } from "../summary";
import { Search } from "../search";
interface SummaryProps {
  titleCard: string;
}
const listTitleCard = ["Entrada", "Saída", "Total"];

export function Dashboar() {
  const [titleCard, setTitleCard] = useState<SummaryProps[]>([]);

  useEffect(() => {
    setTitleCard(listTitleCard.map((title) => ({ titleCard: title })));
  }, []);

  return (
    <div className="bg-[#202024] h-screen ">
      <section className="max-w-7xl m-auto px-9 relative">
        <div className="flex items-center pt-10 gap-7 absolute top-[-130px] left-9 ">
          {titleCard.map((title) => (
            <Summary key={title.titleCard} titleCard={title.titleCard} />
          ))}
        </div>

        {/* <div>
          <h1>Dashboard</h1>
        </div> */}
        <Search />
      </section>
    </div>
  );
}
