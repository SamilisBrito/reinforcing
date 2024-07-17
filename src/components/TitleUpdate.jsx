import { useEffect } from "react";
import { useState } from "react";
import { Button } from "./Button";

export function TitleUpdate() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    document.title = `${number} Reforçando - Ciclo de vida em componentes funcionais`;
  }, [number]);

  return (
    <li>
      <h1>Exercício 1: Atualização de Título com useEffect</h1>
      <p className="padding color">{number}</p>
      <Button
        decrement={() => setNumber(+number - 1)}
        increment={() => setNumber(+number + 1)}
      />
    </li>
  );
}
