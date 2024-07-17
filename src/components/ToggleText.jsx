import { useState } from "react";

export function ToggleText() {
  const [text, setText] = useState(true);
  const [textButton, setTextButton] = useState("ESCONDER");

  function handleUpdateTitle() {
    setText(!text);
    setTextButton(textButton === "MOSTRAR" ? "ESCONDER" : "MOSTRAR");
  }

  return (
    <li>
      <h1>Exercício 5: Exibir/Mostrar Texto</h1>
      {text && <p className="padding color">Me esconde</p>}
      <button onClick={() => handleUpdateTitle()}>{textButton}</button>
    </li>
  );
}
