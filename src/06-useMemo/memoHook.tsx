import { useState } from "react";
import { MyTitle } from "./ui/my-title";
import { MySubTitle } from "./ui/my-subtitle";

export const MemosHook = () => {
  const [title, setTitle] = useState("Hola");
  const [subTitle, setSubTitle] = useState("Mundo");
  const handleMyAPICall = () => {
    console.log("Llamar a mi API");
  };
  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">MemoApp</h1>

      <MyTitle title={title} />
      <MySubTitle subtitle={subTitle} callMyAPI={handleMyAPICall} />

      <button
        onClick={() => setTitle("Hello")}
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
      >
        Cambiar título
      </button>

      <button
        onClick={() => setSubTitle("World")}
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
      >
        Cambiar subtitulo
      </button>
    </div>
  );
};
