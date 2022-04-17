import React, { Component } from 'react';
class Navbar extends React.Component {
    render() {
        console.log("Navbar-rendered");

        return <div>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    {this.props.name}
                    <span className="badge badge-pill badge-secondary ml-2">{this.props.totalCounters}</span>

                </a>
            </nav></div>;
    }
}

export default Navbar;