import logoDtmoney from "../../assets/favicon.svg";

export function Header() {
  return (
    <header className="bg-[#121214] text-[#E1E1E6] h-32 flex items-center ">
      <nav className="max-w-7xl flex justify-between items-center w-full m-auto px-9">
        <div className="flex items-center gap-4">
          <img src={logoDtmoney} alt="Logo da App" />
          <h1 className="text-2xl">
            <a href="/">DT Money</a>
          </h1>
        </div>
        <button
          type="button"
          className="bg-[#00875F] rounded-md px-3 py-2 filter hover:brightness-100 transition-all "
        >
          Nova transação
        </button>
      </nav>
    </header>
  );
}
