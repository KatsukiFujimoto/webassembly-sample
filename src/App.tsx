import { Suspense, useState } from "react";
import init, { sum } from "./lib/wasm";

function App(): JSX.Element {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <AppContainer />
    </Suspense>
  );
}

const AppContainer = (): JSX.Element => {
  const [num, setNum] = useState(0);

  init();
  return (
    <>
      <input
        onChange={(e) => {
          const inputNum = Number(e.target.value);
          !isNaN(inputNum) && setNum(sum(inputNum));
        }}
      />
      <p>{num}</p>
    </>
  );
};

export default App;
