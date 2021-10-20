import React, {useContext} from 'react';
import {useHistory, Link } from 'react-router-dom';
import {userContext} from '../../App';
import './style.css'


const Step2 = () => {
  let {userState, userDispatch} = useContext(userContext);
  
  //Routing to Third Page onClick

  const history = useHistory();

  return (
    <>    
    <Link to="/first">Go to first Page</Link>
    <form className="form">
    <label>
      Age:
      <input value={userState.age} onChange={event => userDispatch({ type: "ageChange", payload: event.target.value })}/>
    </label>
    <label>
      Gender:
      <input value={userState.gender} onChange={event => userDispatch({ type: "genderChange", payload: event.target.value })
       }/>
    </label>
    <button onClick={()=>{history.push('/third')}}>Submit</button>
  </form>

  </>
  )
}

export default Step2
