import React, { Component } from 'react';

const initialState = {
    order:{
        number:''
    },
    orderItem:[],
    ingredient:{
        id:'',
        name:''
    }
}

export default class Order extends Component {
    state = initialState;
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>ENTROU</h1>
            </div>
        )
    }
}
