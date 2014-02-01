/** @jsx React.DOM */

var HelloTitle = React.createClass({

	render: function() {
		return (
			<div>
				<h1>
					{this.props.message}
				</h1>
				<h3>Version {this.props.version}</h3>
				<hr></hr>
			</div>
		);
	}
});


