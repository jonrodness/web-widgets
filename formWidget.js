(function() {

	var contacts = [
		{
			email:"Hello@me.com",
			category: "friend"
		}, 
		{
			email:"Andy@me.com",
			category: "work"
		}
	];

	/**
	 * Inserts a contact block into the contacts-box
	 *
	 * @param {object} contact A contact object.
	 * @return null
	 */
	function insertContact(contact) {
		var contactsBox = document.getElementById("selected-contacts");		
		var contactElement = document.createElement("div");
		contactElement.className += " contact-block";
		contactElement.className += " " + contact.category;
		
		var contactText = document.createTextNode(contact.email);
		contactElement.appendChild(contactText);
		
		contactsBox.insertBefore(contactElement, contactsBox.childNodes[0]);		
	}

	/**
	 * Initializes all contacts
	 *
	 * @return null
	 */
	function initContacts() {
		contacts.forEach(function(contact) {
			insertContact(contact);
		});
	}

	/**
	 * Event handler for clicking Add Button
	 *
	 * @return null
	 */
	function onAddContact() {
		var recipientInput = document.getElementById("recipient-input");
		
		if (recipientInput.value) {
			var newContact = {
				email: recipientInput.value,
				category: "friend"
			}

			insertContact(newContact);
			recipientInput.value = "";
			recipientInput.focus();
		}
	}		

	/**
	 * Event handler for clicking Add Recipient Button
	 *
	 * @return null
	 */
	function onToggleContactsBoxState() {
		var contactsBox = document.getElementById("contacts-box");
		var classList = contactsBox.classList;
		
		if (classList.contains("opened")) {
			classList.remove("opened");						
		} else {
			classList.add("opened");
			document.getElementById("recipient-input").focus();
		}
	}

	/**
	 * Registers event handlers
	 *
	 * @return null
	 */
	function setup() {
		var addContactBtn = document.getElementById("add-recipient-btn");
		if (addContactBtn.addEventListener) {
			addContactBtn.addEventListener("click", onToggleContactsBoxState);					
		} else {
			addContactBtn.attachEvent("click", onToggleContactsBoxState);				
		}		

		var addBtn = document.getElementById("add-btn");
		if (addBtn.addEventListener) {
			addBtn.addEventListener("click", onAddContact);					
		} else {
			addBtn.attachEvent("click", onAddContact);				
		}		
	}

	/**
	 * Main function called upon document load event
	 *
	 * @return null
	 */
	function main() {
		setup();
		initContacts();
	}	

	if (window.addEventListener) {
		window.addEventListener("load", main);		
	} else {
		window.attachEvent("load", main);
	}

})();