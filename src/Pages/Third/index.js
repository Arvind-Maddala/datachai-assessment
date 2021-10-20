import React, {useContext} from 'react'
import {userContext} from '../../App';

const Third = () => {
  let {userState} = useContext(userContext);

  return (
    <div className="third">
      {JSON.stringify(userState)}
    </div>
  )
}

export default Third
