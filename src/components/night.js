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
	
		if (typeof window !== 'undefined')
			if (localStorage.toggled === 'dark') {
				document.documentElement.setAttribute('data-theme', 'dark');
				this.state.checkBox = true;
				this.state.checkedMsg = 'DARK-MODE';
			}
     }

	tick() {
		if (this.state.checkBox) {
			if (typeof window !== 'undefined')
				localStorage.toggled = '';
			document.documentElement.setAttribute('data-theme', 'light');
		} else {
			if (typeof window !== 'undefined')
				localStorage.toggled = 'dark';
			document.documentElement.setAttribute('data-theme', 'dark');
		}
		 
		this.setState({
			checkBox: !this.state.checkBox
		})
		this.state.checkBox ? 
			this.setState({ checkedMsg: 'DARK-MODE' }) : this.setState({ checkedMsg: 'LIGHT-MODE' })
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
			<label className="form-switch-label dark size-md" htmlFor="switch"></label>
         </div>
       );
     }
}

export default NightCheckbox;