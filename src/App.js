import React, { Component } from 'react';
import SlidingSidebar from './components/SlidingSidebar';

class App extends Component {
  render() {
    return (
      <div style={styles.alll}>
        <SlidingSidebar />
      </div>
    );
  }
}

const styles = {
  alll: {
    background: '#E8C995'
  }
}

export default App;
