import React from 'react';
// import { render } from 'react-dom';


class NightCheckbox extends React.Component {
     constructor(props) {
       super(props);
		 
       this.tick = this.tick.bind(this);


       this.state = {
         checkBox: false,
         checkedMsg: 'LIGHT-MODE'
       }
	
		 if (localStorage.toggled === 'dark') {
			 console.log("IM IN! DARK");
			document.documentElement.setAttribute('data-theme', 'dark');
			 this.state.checkBox = true;
			 this.state.checkedMsg = 'DARK-MODE';
		}
		 
		 console.log(this.state.checkBox);
     }

     tick() {
		 if (this.state.checkBox) {
			localStorage.toggled = '';
			document.documentElement.setAttribute('data-theme', 'light');
		 } else {
			localStorage.toggled = 'dark';
			document.documentElement.setAttribute('data-theme', 'dark');
		 }
		 console.log('CLICK ME');
		 
		 
       this.setState({
         checkBox: !this.state.checkBox
       })
		 console.log('CLICK ME ', this.state.checkBox);

       this.state.checkBox ? this.setState({ checkedMsg: 'DARK-MODE' }) : this.setState({ checkedMsg: 'LIGHT-MODE' })
		 
     }

     render() {
       return (
         <div className="form-check dsp-flex align-items-center">
           <input
			 name="mode"
			 id="switch"
			 className="container_toggle form-switch-input" 
             type="checkbox"
             onClick={this.tick}
             defaultChecked={this.state.checkBox}
           />
			<label className="form-switch-label brown size-md" htmlFor="switch"></label>
		   {this.state.checkedMsg}
         </div>
       );
     }
}

export default NightCheckbox;