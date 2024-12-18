import { SearchIcon } from "lucide-react";

export function Search() {
  return (
    <section className="flex items-center justify-center pt-16 gap-4">
      <input
        type="text"
        placeholder="Busque uma transações"
        className="flex-1 rounded-md p-2 bg-[#121214] placeholder:text-[#7C7C8A]"
      />
      <button className="flex py-2 px-5 border border-[#00B37E] rounded-md gap-4 items-center">
        <SearchIcon className="text-[#00B37E]" />
        <span className="text-[#00B37E] font-bold">Buscar</span>
      </button>
    </section>
  );
}
