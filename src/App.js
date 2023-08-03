import './App.css';
import RootRouting from './container/RootRouting';
import { store } from './redux/store'
import { Provider } from 'react-redux'


function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <RootRouting />
      </div>
    </Provider>
  );
}





export default App;
