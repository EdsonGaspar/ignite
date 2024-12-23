import { useEffect, useState } from "react";
import Entrada from "../../assets/entrada.svg?react";
import Saida from "../../assets/saida.svg?react";
import Total from "../../assets/total.svg?react";
import { Summary } from "../summary";
import { Search } from "../search";
type SummaryProps = {
  titleCard: string;
  valor: number;
  icon: string;
};
const listTitleCard = [
  {
    titleCard: "Entradas",
    valor: 17400,
    icon: <Entrada />,
  },
  {
    titleCard: "Saídas",
    valor: 18400,
    icon: <Saida />,
  },
  {
    titleCard: "Total",
    valor: 19400,
    icon: <Total />,
  },
];

export function Dashboar() {
  const [titleCard, setTitleCard] = useState<SummaryProps[]>([]);

  useEffect(() => {
    setTitleCard(listTitleCard.);
  }, []);

  return (
    <div className="bg-[#202024] h-screen ">
      <section className="max-w-7xl m-auto px-9 relative">
        <div className="flex items-center pt-10 gap-7 absolute top-[-130px] left-9 ">
          {titleCard.map((title) => (
            <Summary
              key={title.titleCard}
              titleCard={title.titleCard}
              valor={title.valor}
              icon={title.icon}
            >
              {/* {title.titleCard} {title.valor} {title.icon}, */}
            </Summary>
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
