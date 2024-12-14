import logoDtmoney from "../../assets/favicon.svg";

export function Header() {
  return (
    <header className="bg-[#121214] h-32 flex justify-between items-center px-9">
      <nav className="flex items-center gap-3">
        <img src={logoDtmoney} alt="Logo da App" />
        <h1 className="text-2xl">DT Money</h1>
      </nav>
      <button type="button" className="bg-[#00875F] rounded-md px-3 py-2">
        Nova transação
      </button>
    </header>
  );
}
