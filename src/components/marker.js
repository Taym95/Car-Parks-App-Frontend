import React, {Component} from 'react';

export default class MyGreatPlace extends Component {

    render() {
        return (
            <div >
                {this.props.name}
            </div>
        );
    }

}