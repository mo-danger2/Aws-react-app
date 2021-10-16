import React, { Component } from 'react'
import axios from 'axios'
import './Detail.css'


class Detail extends Component {
	constructor(props) {
		super(props)

		this.state = {
      events: [],
      errorMsg: ''
		}
	}

	componentDidMount() {
		axios
			.get('https://nqj8icqzf7.execute-api.ca-central-1.amazonaws.com/test/')
			.then(response => {
                console.log('+++++')
				console.log(response)
                console.log('+++++')
				this.setState({ events: response.data})
                
			})
			.catch(error => {
        console.log(error)
        this.setState({errorMsg: 'Error retrieving data'})
			})

           
	}

	render() {
		const { events, errorMsg } = this.state
        // console.log('-----')
         console.log(this.state)
        // console.log('-----')
		return (
			

      <div>
            {events.Count ?

           events.Items.map(Item => 

    <table class="cards-table">
    <thead>
        <tr>
            <th>Id</th>
            <th>Age</th>
            <th>City</th>
            <th>Email</th>
            <th>Employer</th>
            <th>Name</th>
            
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>{Item.id}</td> 
            <td>{Item.Age}</td> 
            <td>{Item.City} </td>
            <td>{Item.Email} </td>
            <td>{Item.Employer} </td>
            <td>{Item.Name} </td>
        </tr>
    </tbody>
</table>
                
                ) :
                'You have no previous events' }
			</div>
            
		)
	}
}

export default Detail