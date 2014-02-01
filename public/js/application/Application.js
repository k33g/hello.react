/** @jsx React.DOM */
define([
		'jquery'
	, 'react'
	, 'jsx!components/HelloTitle'
	, 'jsx!components/HelloBuddies'
	, 'jsx!components/HelloBuddyForm'

], function($, React, HelloTitle, HelloBuddies, HelloBuddyForm){

	var Application = {

		initialize : function() {

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
		}
	}

	return Application;
});
