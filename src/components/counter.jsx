import React, { Component } from 'react';

class Counter extends React.Component {
    /* Local state counters ile cakistigi icin local state kullanilmamali.
    state = {
        value: this.props.value
    }; */

    /* Fonksiyon ici this kullanimi icin bind islemi
    constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    } 
    */
    /*
    styles = {
        fontSize: 50,
        fontWeight: 'bold'
    };
    style={{ fontSize: 30 }} //inline style
    */

    /* renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags.</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    } */


    /* Local state kullanimi yuzunden devre disi biraktik. 
    handleIncrement = () => {
        this.setState({ value: this.state.value + 1 });
        console.log('Increment clicked.', this); 
    }; */
    componentDidUpdate(prevProps, prevState) {
        console.log("Prev Props", prevProps);
        console.log("Prev State", prevState);
        if (prevProps.counter.value !== this.props.counter.value) {
            //Ajax call and get new data from server.
        }
    };
    componentWillUnmount() {
        console.log("Counter-Unmount.");
    }
    render() {
        console.log("Counter-rendered");

        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete </button>
                {/*{this.state.tags.length === 0 && 'Please create new tags.'}
                {this.renderTags()}*/}
            </div>
        );
    }
    getBadgeClasses() {
        if (this) {
            let classes = "badge m-2 badge-";
            classes += (this.props.value === 0) ? "warning" : "primary";
            return classes;
        }
    }

    formatCount() {
        const count = this.props.value;
        return count === 0 ? "ZERO" : count;
    }
}

export default Counter;