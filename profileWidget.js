(function() {

	var profile = {
		firstName: "Courtney",
		lastName: "Timmons",
		followers: 15323,
		picUrl: "profile.jpg"
	};

	/**
	 * Retrieves and inserts profile data.
	 *
	 * @return null
	 */
	function initProfile() {

		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				document.getElementById("demo").innerHTML = this.responseText;
			}
		};
		xhttp.open("GET", "ajax_info.txt", true);
		xhttp.send();

		var firstNameElement = document.getElementById("first-name");		
		var firstNameText = document.createTextNode(profile.firstName);
		firstNameElement.appendChild(firstNameText);
		
		var lastNameElement = document.getElementById("last-name");
		var lastNameText = document.createTextNode(profile.lastName);
		lastNameElement.appendChild(lastNameText);

		var followersElement = document.getElementById("followers");
		var followersText = document.createTextNode(profile.followers.toLocaleString('en'));
		followersElement.insertBefore(followersText, followersElement.children[0]);

		var profilePicContainer = document.getElementById("profile-pic-container");
		profilePicContainer.style.backgroundImage = "url('" + profile.picUrl + "')";
	}

	/**
	 * Event handler for clicking dimension.
	 *
	 * @param {object} e The fired event.
	 * @return null
	 */
	function onSelectDimension(e) {
		// Remove "selected" class from all list items
		var listItems = e.target.parentElement.children;
		var targetSelected;
		
		var i;
		for (i = 0; i < listItems.length; i++) {
			var classNames = listItems[i].className;
			var classList = classNames.split(" ");
			listItems[i].className = "";

			// Add all other classes back to element
			var j;
			for (j = 0; j < classList.length; j++) {
				if (classList[j] !== "selected") {
					if (j > 0) {
						listItems[i].className += " ";
					}
					listItems[i].className += classList[j];
				} else if (listItems[i] === e.target) {
					var targetSelected = true;
				}
			}
		}

		if (!targetSelected) {
			e.target.className += " selected";			
		}
	}

	/**
	 * Registers event handlers
	 *
	 * @return null
	 */
	function setup() {
		var dimensionList = document.getElementsByClassName("profile-dimension");
		var i;
		for (i = 0; i < dimensionList.length; i++) {
			if (dimensionList[i].addEventListener) {
				dimensionList[i].addEventListener("click", onSelectDimension);					
			} else {
				dimensionList[i].attachEvent("click", onSelectDimension);				
			}
		}
	}

	/**
	 * Main function called upon document load event
	 *
	 * @return null
	 */
	function main() {
		initProfile();
		setup();	
	}

	if (window.addEventListener) {
		window.addEventListener("load", main);		
	} else {
		window.attachEvent("load", main);
	}

})();