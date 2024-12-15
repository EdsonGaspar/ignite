import inputIcon from "../../assets/entrada.svg";
import { Card, CardContent, CardHeader } from "../ui/card";
type TitleCardProps = {
  titleCard: string;
};
export function Summary(title: TitleCardProps) {
  return (
    <section>
      <Card className="bg-[#323238] text-[#C4C4CC] border-none w-96 h-36 cursor-pointer">
        <CardHeader>
          <div className="flex  items-center justify-between">
            <p>{title.titleCard}</p>
            <img src={inputIcon} alt="Icon da entrada" className="w-8 h-8" />
          </div>
        </CardHeader>
        <CardContent className="font-bold text-3xl">17.400,00kz</CardContent>
      </Card>
    </section>
  );
}
