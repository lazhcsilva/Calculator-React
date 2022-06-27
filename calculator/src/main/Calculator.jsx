import React, { Component } from 'react';
import './Calculator.css';

import Button from '../component/Button';

export default class Calculator extends Component {
    render() {
        return (
            <div className="calculator">
                <Button />
            </div>
        )
    }
}