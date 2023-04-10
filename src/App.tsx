import { useEffect, useState } from "react";
import { GameElement } from "./components/GameElement";
import { Header } from "./components/Header";
import { RulesModal } from "./components/RulesModal";

export function App() {
  const [isDefaultGameSelected, setIsDefaultGameSelected] =
    useState<boolean>(true);

  const localScore =
    localStorage.getItem(isDefaultGameSelected ? "RPSscore" : "RPSLSscore") ??
    "0";

  const [score, setScore] = useState<string>(localScore);
  const [handShapeSelected, setHandShapeSelected] = useState<string>("");

  useEffect(() => {
    setHandShapeSelected("");
    setScore(
      localStorage.getItem(isDefaultGameSelected ? "RPSscore" : "RPSLSscore") ??
        "0"
    );
  }, [isDefaultGameSelected]);

  return (
    <>
      <Header
        score={score}
        isDefaultGameSelected={isDefaultGameSelected}
        setIsDefaultGameSelected={setIsDefaultGameSelected}
      />
      <GameElement
        score={score}
        setScore={setScore}
        isDefaultGameSelected={isDefaultGameSelected}
        handShapeSelected={handShapeSelected}
        setHandShapeSelected={setHandShapeSelected}
      />
      <RulesModal />
    </>
  );
}
