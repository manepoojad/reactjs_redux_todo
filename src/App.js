import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import RootRouting from "./container/RootRouting";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ToastContainer />
        <RootRouting />
      </div>
    </Provider>
  );
}

export default App;
