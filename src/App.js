import React, {useReducer} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Home, First, Second, Third} from './Pages'
import './App.css';

//creating context 
export const userContext = React.createContext();

//Initial state value to pass to Reducer
const initialState = {firstName:'Awesome',lastName:'Dev', age:2, gender:'male' };

//Reducer function 

const reducer = (state, action) => {
  switch(action.type){
    case 'firstNameChange':
      return  {...state, firstName: action.payload};
    case 'lastNameChange':
      return  {...state, lastName: action.payload};
    case 'ageChange':
      return  {...state, age: action.payload};;
    case 'genderChange':
      return  {...state, gender: action.payload};;
      default:
        return initialState
  }
}


function App() {

  const [state, dispatch] = useReducer(reducer, initialState);


   return (
    <div className="App">
      <userContext.Provider value={{userState:state, userDispatch:dispatch}} >
      <Router>
      <Link to="/">Home</Link>
      <Switch>
        <Route path="/" exact><Home /></Route>
        <Route path="/first"> <First /> </Route>
        <Route path="/second"> <Second /> </Route>
        <Route path="/third"> <Third /></Route>
      </Switch>
    </Router>
    </userContext.Provider>
    </div>
  );
}

export default App;

