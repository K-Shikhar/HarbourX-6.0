import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from "./components/header/Header.jsx"
import Home from "./components/home/Home.jsx"
import {TemplateProvider} from './templates/TemplateProvider.js'
import ContextProvider from './context/contextProvider.jsx'

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
      <BrowserRouter>
        <Header />
        <Switch>
              <Route exact path= '/' component={Home} />
        </Switch>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
    
  );
}

export default App;
