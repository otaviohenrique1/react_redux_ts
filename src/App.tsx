import React from 'react';
import { Provider } from "react-redux";
import RepositoriyList from "./components/RepositoriyList";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <RepositoriyList />
    </Provider>
  );
}

export default App;
