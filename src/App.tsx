import { MainWrapper } from "./App.element";
import LeftSide from "./components/Left/LeftSide";
import RightSide from "./components/Right/RightSide";

function App() {
  return (
    <MainWrapper>
      <LeftSide />
      <RightSide />
    </MainWrapper>
  );
}

export default App;
