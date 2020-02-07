import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';


class NewTable extends Component{
    constructor(props) {
        super(props);
        //this.createTable = this.createTable.bind(this);
    }

    render() {
        return(
            <Container>
            <p>{this.props.param ? this.props.param : "No parameter"}</p>
            <Link to={`/table?val1=1`}>New Link</Link>
            </Container>
        )
}
    
}

export default NewTable;
