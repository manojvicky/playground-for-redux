import React from 'react';
import Counter from './counter.container';

class App extends React.Component {
  constructor(){
    super();
  }
   render() {
      return (
        <div>
          <Counter />
        </div>
      );
   }
}
export default App;