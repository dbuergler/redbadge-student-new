import React from 'react';
import PropsExample from "./components/PropsExample";
import PropsMapping from "./components/PropsMapping"

function App() {
  const visitedPlaces = ['Outer Banks', 'Fort Myers', 'Port St. Joe', 'Gulf Shores', 'Domincan Republic', 'Orlando' ]
  return (
    <div>
      <PropsExample name = "Tom" business = "MySpace"/>
      <PropsMapping  visited = {visitedPlaces}/>
    </div>
  )
}

export default App;
