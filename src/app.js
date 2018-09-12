import React from 'react';
import Async from './Async.container';

class App extends React.Component {
  constructor(){
    super();
  }
   render() {
      return (
        <div>
          <Async />
        </div>
      );
   }
}
export default App;