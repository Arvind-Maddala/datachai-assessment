import React, {useContext} from 'react';
import {userContext} from '../../App'
import {useHistory } from 'react-router-dom';

const Step1 = () => {

  const {userState, userDispatch} = useContext(userContext);
  //Routing to second Page onClick
  const history = useHistory();
  return (
  <>
<form>
  <label>
    First Name:
    <input value={userState.firstName} onChange={event => userDispatch({ type: "firstNameChange", payload: event.target.value })}/>
  </label>
  <label>
    Last Name:
    <input value={userState.lastName} onChange={event => userDispatch({ type: "lastNameChange", payload: event.target.value })
     }/>
  </label>
   <button onClick={()=>{history.push('/second')}}>Submit</button>
</form>
  </>
  )
}

export default Step1
