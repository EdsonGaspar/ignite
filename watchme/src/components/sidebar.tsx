import { useState } from "react";
import { Button } from "./button";

export function Sidebar() {
  const titleButto = [
    "Ação",
    "Aventura",
    "Comédia",
    "Drama",
    "Ficção científica",
    "Terror",
  ];
  const [titleElement] = useState(titleButto);
  return (
    <aside className="bg-[#2E303D] w-96 h-screen">
      <h1 className="text-4xl font-bold text-center pt-5 pb-9">
        <span className="text-yellow-400">Watch</span>
        <span className="text-white">Me</span>
      </h1>
      <div className="flex flex-col items-center p-5">
        {titleElement.map((buttonItem) => {
          return <Button title={buttonItem} key={buttonItem} />;
        })}
      </div>
    </aside>
  );
}
