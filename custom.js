"use strict";

fetch("./restaurants.json")
	.then(function(resp){
		return resp.json();
	}) 
	.then(function(data){
		console.log(data.name);
	})




 fetch('restaurants.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function appendData(data) {
            var mainContainer = document.getElementById("myData");
            for (var i = 0; i < data.length; i++) {
                var div = document.createElement("div");
                div.innerHTML = 'Name: ' + data[i].name + ' ' + data[i].cuisine;
                mainContainer.appendChild(div);