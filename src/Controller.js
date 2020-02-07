import React, {Component} from 'react';
import NewTable from './NewTable';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';

class Controller extends Component{

    constructor(props) {
        super(props);
        this.parseURL = this.parseURL.bind(this);
    }

    componentWillMount() {
        console.log("Fired");
        this.parseURL();
    }

    parseURL() {
        let params = new URLSearchParams(this.props.location.search);
        // const {val1} = this.props.match.params;
        // console.log(val1); 
        let param1 = params.get('val1');
        this.setState({
            val: param1
        })
    }

    render() {
        return(
            <NewTable param={this.state.val}/>
        )
    }
    
}

export default Controller;
