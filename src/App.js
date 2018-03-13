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
    background: '#84C5E2'
  }
}

export default App;
