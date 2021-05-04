import { GlobalContextProvider } from "./contexts/GlobalContext";
import Routes from "./Routes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <div className="App">
      <GlobalContextProvider>
        <Routes />
      </GlobalContextProvider>
      <GlobalStyle />
    </div>
  );
}

export default App;
