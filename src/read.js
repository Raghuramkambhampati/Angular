import React, { Component } from 'react';

class Read extends Component {
    state={
        id :'',
        name:'',
        desc:'',
        category:'',
        price:0
      };
  render() {
    return (
      <div>
          <center>
        <form>
        <label>ID: </label><input type="input"/><br/><br/>
        <button type="submit">DETAILS</button>
        </form>
        </center>
      </div>
    );
  }
}

export default Read;