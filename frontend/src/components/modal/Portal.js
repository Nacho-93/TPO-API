import React, { Component } from 'react'
import { ReactDOM } from 'react-dom';

const Portalroot = document.getElementById('Portal');

export default class Portal extends Component {

    constructor(){
        super();
        this.el = document.createElement('div');

    }
    
    componentDidMount = () => {
        Portalroot.appendChild(this.el);
    }
    componentWillUnmount = () => {
        Portalroot.removeChild(this.el);
    }


  render() {
    const { children } = this.props;

    return ReactDOM.createPortal(children, this.el);
  }
}
