(function() {

	var profile = {
		firstName: "Courtney",
		lastName: "Timmons",
		followers: 15323,
		picUrl: "profile.jpg"
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

		var profilePicContainer = document.getElementById("profile-pic-container");
		profilePicContainer.style.backgroundImage = "url('" + profile.picUrl + "')";


	}

	function selectDimension(e) {
		
		// Remove "selected" class from all list items
		var listItems = e.target.parentElement.children;
		
		var i;
		for (i = 0; i < listItems.length; i++) {
			var classNames = listItems[i].className;
			var classList = classNames.split(" ");
			listItems[i].className = "";

			var j;
			// Add non-"selected" classes back
			for (j = 0; j < classList.length; j++) {
				if (classList[i] !== "selected") {
					listItems[i].className += classList[i];
				}
			}
		}

		e.target.className += " selected";
	}



	function main() {
		initProfile();
		setup();	
	}

	function setup() {
		var dimensionList = document.getElementById("dimension-list");
		dimensionList.addEventListener("click", selectDimension);	
	}

})();