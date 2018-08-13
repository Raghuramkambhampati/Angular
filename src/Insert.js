import React, { Component } from 'react';

class Insert extends Component {
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
        <label>ID:          </label><input type="input"/><br/><br/>
        <label>NAME:        </label><input type="input"/><br/><br/>
        <label>DESCRIPTION: </label><input type="input"/><br/><br/>
        <label>CATEGORY:    </label><input type="input"/><br/><br/>
        <label>PRICE:       </label><input type="input"/><br/><br/>
        <button type="submit">SUBMIT</button>
        </form>
        </center>
        </div>
    );
  }
}

export default Insert;
