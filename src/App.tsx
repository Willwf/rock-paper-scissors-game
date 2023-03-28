import { useEffect, useState } from "react";
import { GameElement } from "./components/GameElement";
import { Header } from "./components/Header";
import { RulesModal } from "./components/RulesModal";

export function App() {
  const localScore = localStorage.getItem("score") ?? "0";

  const [score, setScore] = useState<string>(localScore);

  return (
    <>
      <Header score={score} />
      <GameElement score={score} setScore={setScore} />
      <RulesModal />
    </>
  );
}
