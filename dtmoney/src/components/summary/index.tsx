// import inputIcon from "../../assets/entrada.svg";
import { ReactNode } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";

interface TitleCardProps {
  children?: ReactNode;
  titleCard: string;
  valor: number;
  icon: string;
}
export function Summary({ titleCard, valor, icon }: TitleCardProps) {
  return (
    <section>
      <Card className="bg-[#323238] text-[#C4C4CC] border-none w-96 h-36 cursor-pointer">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>{titleCard}</div>
            {/* <img src={inputIcon} alt="Icon da entrada" className="w-8 h-8" /> */}
            <div>{icon}</div>
          </div>
        </CardHeader>
        <CardContent className="font-bold text-3xl">{valor} Kz</CardContent>
      </Card>
    </section>
  );
}
