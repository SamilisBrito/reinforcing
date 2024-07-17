import { useEffect } from "react";
import { useState } from "react";
import { Button } from "./Button";

export function PersistentCounter() {
  const [number, setNumber] = useState(localStorage.getItem("number") || 0);

  useEffect(() => {
    localStorage.setItem("number", number);
  }, [number]);

  return (
    <li>
      <h1>Exercício 3: Sincronização de Estado com Local Storage </h1>
      <p className="padding color">{number}</p>
      <Button
        decrement={() => setNumber(+number - 1)}
        increment={() => setNumber(+number + 1)}
      />
    </li>
  );
}
