import styles from "./App.module.css";
import { WindowSize } from "./components/WindowSize.jsx";
import { TitleUpdate } from "./components/TitleUpdate.jsx";
import { PersistentCounter } from "./components/PersistentCounter.jsx";
import { RealTimeClock } from "./components/RealTimeClock.jsx";
import { ToggleText } from "./components/ToggleText.jsx";
import { LimitedCounter } from "./components/LimitedCounter.jsx";

function App() {
  return (
    <ul className={styles.content}>
      <TitleUpdate />
      <WindowSize />
      <PersistentCounter />
      <RealTimeClock />
      <ToggleText />
      <LimitedCounter />
    </ul>
  );
}

export default App;
