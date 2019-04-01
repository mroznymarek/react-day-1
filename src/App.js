import React from 'react'
import DisplayPrefix from './DisplayPrefix'
import DisplayName from './DisplayName'
import WhatReactCanDisplay from './WhatReactCanDisplay'
import DisplayPassedName from './DisplayPassedName'
import DisplayFirstnameAndLastname from './DisplayFirstnameAndLastName'


const App = () => (
  <div>
    <h1>Hello</h1>
    <DisplayPrefix />
    <DisplayName />
    <WhatReactCanDisplay />

    <DisplayPassedName
    name={'Marek'}
    />
    <DisplayFirstnameAndLastname
      firstname ={'Marek'}
      lastname = {'Mróz'}
    />

  </div>
)

export default App;
