/** @jsx React.DOM */
define(["react","jquery"], function (React, $) {
	var HelloBuddies = React.createClass({

		getInitialState: function() {
			return {data : [], message : "..."};
		},
		getAllBuddies : function() {

			$.get("buddies", function(buddies) {
				this.setState({data : buddies, message : Date()});
			}.bind(this));

		},
		componentWillMount: function() {
			setInterval(this.getAllBuddies, this.props.pollInterval);
		},

		render: function() {

			var buddyItem = this.state.data.map(function(buddy){
				return (<li>
	         {buddy.id} {" "} <strong>{buddy.name}</strong>
				</li>);
			});

			return (
				<div><h2>Buddies List</h2>
					<strong>{this.state.message}</strong>
					<ul className="square">
	          {buddyItem}
					</ul>
				</div>
				);
		}
	});
	return HelloBuddies;
});

