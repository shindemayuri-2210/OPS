import React, { Component } from 'react';  
import { SplitButton, Dropdown } from 'react-bootstrap';  
class BirthProof extends Component {  
  state = { theme: null }  
  chooseTheme = (theme, evt) => {  
    evt.preventDefault();  
    if (theme.toLowerCase() === 'reset') { theme = null }  
    this.setState({ theme });  
  }  
  render() {  
    const { theme } = this.state;  
    const themeClass = theme ? theme.toLowerCase() : 'default';  
      
  
      
    return (  
        
          
          <div >  
            <SplitButton className="shadow-lg p-3 mb-5 bg-black border border-danger rounded" bsSize="large" bsStyle={themeClass} title={`${theme || 'AddressProof'} `}>  
              <Dropdown.Item eventKey=" Adhar Card"  onSelect={this.chooseTheme}>Adhar Card</Dropdown.Item>  
              <Dropdown.Item eventKey=" Voting Card" onSelect={this.chooseTheme}>Voting Card</Dropdown.Item>  
              <Dropdown.Item eventKey=" Light Bill" onSelect={this.chooseTheme}>Light Bill</Dropdown.Item>  
            </SplitButton>  
          </div>    
          
    );   
  }   
}  
export default BirthProof;  
