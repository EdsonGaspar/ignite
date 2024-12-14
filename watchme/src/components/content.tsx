type Category = {
  titleCategory: string;
};

export function Content(title: Category) {
  return (
    <main className="flex bg-[#1F222A] w-screen h-screen">
      <nav>
        <h2>Categoria {title.titleCategory}</h2>
      </nav>
    </main>
  );
}
