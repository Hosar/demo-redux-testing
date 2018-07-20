import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserSaysHello, UserSaysGoodbye } from './greeting.actions';

const mapActionsToProps = dispatch => {
    return {
        sayHi: () => {
            dispatch(UserSaysHello('Jhon Doe'));
        },
        sayBye: () => {
            dispatch(UserSaysGoodbye('Jhon Doe'));
        }
    };
};

const mapStateToProps = (state, ownProps) => {
    return {
        ...state.greeting
    };
};

@connect(mapStateToProps, mapActionsToProps)
class Greeting extends Component {
    constructor(props) {
        super(props);
        this.sayHello = this.sayHello.bind(this);
        this.sayGoodBye = this.sayGoodBye.bind(this);
    }

    componentDidMount() {
    }

    sayHello(){
        this.props.sayHi();
    }

    sayGoodBye(){
        this.props.sayBye();
    }

    render() {        
        return (
            <div>
                <div>
                    <button onClick={this.sayHello}>Say Hello</button>
                    <button onClick={this.sayGoodBye}>Say Goodbye</button>                    
                </div>
                
                <div>{this.props.greetingMessage}</div>                
            </div>
        );

    }
};

export default Greeting;