import { useState } from "react";
import { Button } from "./Button";

export function LimitedCounter() {
  const [number, setNumber] = useState(0);

  function limit() {
    if (number != 10) {
      setNumber(number + 1);
    }
  }

  return (
    <li>
      <h1>Exercício 6: Contador com Limite</h1>
      <p className="padding color">{number}</p>
      {number === 10 && <p className="obs">Só é possível incrementar até 10</p>}
      <Button
        decrement={() => setNumber(number - 1)}
        increment={() => limit()}
        disabled={number === 10}
      />
    </li>
  );
}
