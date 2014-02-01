/**
 * Created by k33g_org on 01/02/14.
 */
var express = require('express');
var uuid = require('node-uuid');

var app = express()

var buddies = [
	{id : uuid.v1(), name : "Bob Morane"},
	{id : uuid.v1(), name : "Doctor Who"},
	{id : uuid.v1(), name : "Fox Mulder"},
	{id : uuid.v1(), name : "Lady Penelope"}
];

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded());

/*
	$.get("buddies", function(buddies) { console.log(buddies); })
*/
app.get("/buddies", function(req, res) {
	res.send(buddies);
});

/*
	 $.ajax({
		 type: "GET",
		 url: "buddies/ff06fc5a-d779-4e8a-810c-cf1aeeffd5b8",
		 success: function(buddy){ console.log(buddy) }
	 });
 */
app.get("/buddies/:id", function(req, res) {
	var index = buddies.indexOf(
		buddies.filter(function(buddy) {
			return buddy.id == req.params.id;
		})[0]
	);

	if (index !== -1) {
		buddies[index]
		res.send(buddies[index]);
	} else {
		res.send(null);
	}
});


/* ...
	$.ajax({
		type: "POST",
		url: "buddies",
		data: {name : "Philippe"},
		dataType: "json",
		success: function(buddy){ console.log(buddy) }
	});
*/
app.post("/buddies", function(req, res) {
	var buddy = req.body
	buddy.id = uuid.v1();
	buddies.push(buddy);
	res.send(buddy);
});

/*
	 $.ajax({
		 type: "PUT",
		 url: "buddies/ff06fc5a-d779-4e8a-810c-cf1aeeffd5b8",
		 data: {name : "PHILIPPE"},
		 dataType: "json",
		 success: function(buddy){ console.log(buddy) }
	 });
 */
app.put("/buddies/:id", function(req, res) {
	var buddyToUpdate = req.body
	buddyToUpdate.id = req.params.id;

	var index = buddies.indexOf(
		buddies.filter(function(buddy) {
			return buddy.id == buddyToUpdate.id;
		})[0]
	);

	if (index !== -1) {
		buddies[index] = buddyToUpdate;
		res.send(buddyToUpdate);
	} else {
		res.send(null);
	}
});

/*
	 $.ajax({
		 type: "DELETE",
		 url: "buddies/ff06fc5a-d779-4e8a-810c-cf1aeeffd5b8",
		 success: function(buddy){ console.log(buddy) }
	 });
 */
app.delete("/buddies/:id", function(req, res) {
	var index = buddies.indexOf(
		buddies.filter(function(buddy) {
			return buddy.id == req.params.id;
		})[0]
	);

	if (index !== -1) {
		buddies.splice(index, 1);
		res.send(req.params.id);
	} else {
		res.send(null);
	}
});


app.listen(3000)