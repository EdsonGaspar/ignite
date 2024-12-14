type ButtonProps = {
  title: string;
};

export function Button(buttonProp: ButtonProps) {
  return (
    <button className="bg-[#373a44] w-full text-xl text-right text-white p-3 m-2 rounded-md">
      {buttonProp.title}
    </button>
  );
}
