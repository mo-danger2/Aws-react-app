import React, { Component } from "react";
import axios from 'axios'
import './Submit.css';


export default class Submit extends Component {


  constructor(props) {
      super(props);
      this.state = {
          id: "",
          Age: "",
          City: "",
          Email: "",
          Employer: "",
          Name: ""

      };
  }

  changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('https://nqj8icqzf7.execute-api.ca-central-1.amazonaws.com/cors/', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}


  handleChange = e => {
      console.log(e.target.checkValidity());
      this.setState({
          [e.target.name]: e.target.value
          // this is referring to name in the input element not name in state
      })
  }


  render() {
        const { id, Age, City, Email, Employer,Name} = this.state
		return (

			<div>
				<form onSubmit={this.submitHandler}>
					<div>
						<input
							type="number"
							name="id"
							value={id}
							onChange={this.changeHandler}
						/>
            <input
							type="number"
							name="age"
							value={Age}
							onChange={this.changeHandler}
						/>
            <input
							type="text"
							name="city"
							value={City}
							onChange={this.changeHandler}
						/>
            <input
							type="text"
							name="Email"
							value={Email}
							onChange={this.changeHandler}
						/>
            <input
							type="text"
							name="Employer"
							value={Employer}
							onChange={this.changeHandler}
						/>
            <input
							type="text"
							name="name"
							value={Name}
							onChange={this.changeHandler}
						/>
					</div>

          <button type="submit">Submit</button>
				</form>
			</div>
          
      )
  }
}