/** @jsx React.DOM */

var HelloBuddyForm = React.createClass({

	getInitialState: function() {
		return {data : [], message : ""};
	},

	handleSubmit : function() {

		var name = this.refs.name.getDOMNode().value.trim();

		if (!name) {return false;}

		this.setState({
			message : "Please wait ..."
		});

		$.ajax({
			type: "POST",
			url: "buddies",
			data: {name : name},
			dataType: "json",
			success: function(buddy){
				this.setState({
					message : buddy.id + " added!"
				});

				this.refs.name.getDOMNode().value = '';
				this.refs.name.getDOMNode().focus();

			}.bind(this)
		});

		return false;
	},


	render: function() {

		return (
			<div>
				<h2>Buddy Form</h2>
				<form onSubmit={this.handleSubmit}>
					<input type="text" placeholder="name" ref="name"/>

					<input type="submit" value="Add Buddy" />
					<br></br>
					<strong>{this.state.message}</strong>
				</form>
			</div>
			);
	}
});


