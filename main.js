//Import the react liabraies
import React from 'react';
import ReactDOM from 'react-dom';

//Declare javscript object
var attr = {
  title: 'Cute Cat',
  src: 'http://blog.dssoft32.com/wp-content/uploads/2017/05/Cat.jpg',
  alt: 'cat',
  width:  '200px'
};

// Create component class named cat and fetch the properties of attr object in this. 
var Cat = React.createClass({
  render: function () {
    return (
      <div>
        <h1>{attr.title}</h1>
        <img 
          src={attr.src} 
          alt={attr.alt} 
          width={attr.width} />
      </div>
    );
  }
});

// Rendering Cat component instance in html body
ReactDOM.render(<Cat />, document.getElementById('attrs'));

// Create class named Random and used some logics based on Math.random function in render funtion.
var Random = React.createClass({
  render: function () {

    // First, some logic that must happen
    // before rendering:
    var n = Math.floor((Math.random() * 10) + 1);

    // Next, a return statement
    // using that logic:
    return <h1>The number is {n}!</h1>;
  }
});

// Rendering Random component instance in html body
ReactDOM.render(<Random />, document.getElementById('logics'));

// Create class named Random and used conditional statemnts in render funtion.
var LearnConditionals = React.createClass({
  render: function () {
    var task;
    if (task) {
      task = "learn React.js"
    } else {
      task = "run around"
    }

    return <h1>You are going to {task}!</h1>;
  }
});

// Rendering LearnConditionals component instance in html body
ReactDOM.render(<LearnConditionals />, document.getElementById('conditionals'));

// Create class named ThisUsage and used this in render funtion.
var ThisUsage = React.createClass({
  task: 'react js',

  render: function () {
    return <h1>Today’s task is to learn {this.task}.</h1>;
  }
});


// Rendering ThisUsage component instance in html body
ReactDOM.render(<ThisUsage />, document.getElementById('this_usage'));

// Create class named EventListener and called event handler in render funtion.
var EventListener = React.createClass({

  myFunc: function () {
    alert('Function called');
  },

  render: function () {
    return (
      <div onClick={this.myFunc}>
	  Click me
      </div>
    );
  }
});

// Rendering EventListener component instance in html body
ReactDOM.render(<EventListener />, document.getElementById('event_listner'));
