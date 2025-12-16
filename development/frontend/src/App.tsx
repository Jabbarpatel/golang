import "./App.css";
import { Button } from "@heroui/react";
import Providers from "./components/Providers/Providers";
import ReactModal from "./components/General/ReactModal";
import { useState } from "react";

function App() {
  const [test, setTest] = useState(false);
  const close = () => {
    setTest(false);
  };

  return (
    <Providers>
      <Button onPress={() => setTest(true)}>CLick</Button>
      <ReactModal isOpen={test} title="Test" size="2xl" onClose={close}>
        Thisi sisisiisisi
      </ReactModal>
    </Providers>
  );
}

export default App;
