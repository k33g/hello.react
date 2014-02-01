/** @jsx React.DOM */

var messageTitle = "Hello World! Hello React!";
var version = "1.0";

React.renderComponent(
	<HelloTitle message={messageTitle} version={version}/>,
	document.querySelector('hello-title')
);

React.renderComponent(
	<HelloBuddies pollInterval={1000}/>,
	document.querySelector('hello-buddies')
);

React.renderComponent(
	<HelloBuddyForm/>,
	document.querySelector('hello-buddy-form')
);