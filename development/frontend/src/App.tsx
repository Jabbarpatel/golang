import "rsuite/dist/rsuite.css";
import "./App.css";
import AppContainer from "./components/General/AppContainer";
import Header from "./components/General/AppHeader";
import AppRoutes from "./components/General/AppRoutes";

function App() {
  return (
    <>
      <Header />
      <AppContainer>
        <AppRoutes />
      </AppContainer>
    </>
  );
}

export default App;
