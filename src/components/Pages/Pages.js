import React, {Component} from 'react';
import './Pages.css';
import Popular from './../Popular/Popular.js';

class Pages extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="pages">
                <Popular />
            </div>
        )
    }
}

export default Pages;