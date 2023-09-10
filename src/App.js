import './App.css';
import Header from './Components/Header';
import { Switch, Route } from 'react-router-dom';
import Instagram from './Components/Instagram';
import Facebook from './Components/Facebook';
import Twitter from './Components/Twitter';
import Github from './Components/Github';
import Interview from './Components/Interview';
function App() {
  return (
    <div>
      <Header />  
      <Switch>
        <Route path='/Instagram' component={Instagram}/>
        <Route path='/Facebook' component={Facebook}/>
        <Route path='/Twitter' component={Twitter}/>
        <Route path='/Github' component={Github}/>
        <Route path='/interview' component={Interview}/>
      </Switch>
    </div>      
  );
}

export default App;
