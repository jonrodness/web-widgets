(function() {

	var profile = {
		firstName: "Courtney",
		lastName: "Timmons",
		followers: 15323
	};

	window.onload = main;

	function initProfile() {
		var firstNameElement = document.getElementById("first-name");		
		var firstNameText = document.createTextNode(profile.firstName);
		firstNameElement.appendChild(firstNameText);
		
		var lastNameElement = document.getElementById("last-name");
		var lastNameText = document.createTextNode(profile.lastName);
		lastNameElement.appendChild(lastNameText);

		var followersElement = document.getElementById("followers");
		var followersText = document.createTextNode(profile.followers);
		followersElement.insertBefore(followersText, followersElement.children[0]);


	}

	function main() {
		initProfile();	
	}	
})();