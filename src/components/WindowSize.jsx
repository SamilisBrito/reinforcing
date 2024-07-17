import { useEffect, useState } from "react";

export function WindowSize() {
  const [windowWidth, setwindowWidth] = useState(innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setwindowWidth(innerWidth));
    return () => {
      window.removeEventListener("resize", () => setwindowWidth(innerWidth));
    };
  }, []);

  return (
    <li>
      <h1>Exercício 2: Monitoramento de Largura da Janela</h1>
      <p className="padding">
        A largura da tela é <strong className="color">{windowWidth}</strong>
      </p>
    </li>
  );
}
