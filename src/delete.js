import React, { Component } from 'react';

class Delete extends Component {
  render() {
    return (
        <div>
            <center>
        <form>
        <label>ID: </label><input type="input"/><br/><br/>
        <button type="submit">DELETE</button>
        </form>
        </center>
      </div>
    );
  }
}

export default Delete;