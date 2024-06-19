import React, { Component } from 'react'


class Class_Component extends Component {

    constructor() {
        super();
        this.state = {
            data: 1
        }
    }


    apple() {

        this.setState({ data:this.state.data+1 })
    }

    render() {
        return (
            <div className='App' >
                <h1>{this.state.data}</h1>
                <button onClick={() => this.apple()}> Update Data</button>
            </div>
        )
    }
}

export default Class_Component;