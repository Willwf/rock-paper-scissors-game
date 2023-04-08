import { useEffect, useState } from "react";
import { GameElement } from "./components/GameElement";
import { Header } from "./components/Header";
import { RulesModal } from "./components/RulesModal";

export function App() {
  const localScore = localStorage.getItem("score") ?? "0";

  const [score, setScore] = useState<string>(localScore);
  const [isDefaultGameSelected, setIsDefaultGameSelected] =
    useState<boolean>(true);

  return (
    <>
      <Header
        score={score}
        isDefaultGameSelected={isDefaultGameSelected}
        setIsDefaultGameSelected={setIsDefaultGameSelected}
      />
      <GameElement score={score} setScore={setScore} />
      <RulesModal />
    </>
  );
}
