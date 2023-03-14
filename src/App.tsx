import { GameElement } from "./components/GameElement";
import { Header } from "./components/Header";
import { RulesModal } from "./components/RulesModal";

export function App() {
  return (
    <>
      <Header />
      <GameElement />
      <RulesModal />
    </>
  );
}
