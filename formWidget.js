(function() {

	var contacts = [
		{
			email:"Hello@me.com",
			category: "friend"
		}, 
		{
			email:"Andy@me.com",
			category: "work"
		},
				{
			email:"Andy@me.com",
			category: "work"
		},
				{
			email:"Andy@me.com",
			category: "work"
		}
	];

	window.onload = main;

	var styleSheet = document.createElement("link");
	styleSheet.rel = "stylesheet";
	styleSheet.type = "css/text";
	styleSheet.href = "formWidget.css";
	
	var head = document.getElementsByTagName("head")[0];
	head.appendChild(styleSheet);

	function insertContact(contact) {
		var contactsBox = document.getElementById("selected-contacts");		
		var contactElement = document.createElement("div");
		contactElement.className += " contact-block";
		contactElement.className += " " + contact.category;
		
		var contactText = document.createTextNode(contact.email);
		contactElement.appendChild(contactText);
		
		contactsBox.insertBefore(contactElement, contactsBox.childNodes[0]);		
	}

	function initContacts() {
		contacts.forEach(function(contact) {
			insertContact(contact);
		});
	}

	function main() {

		var root = document.getElementById("root");
		root.appendChild(document.createElement("div"));
		setup();

		initContacts();
		
	}

	function addContact() {
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

	function toggleContactsBoxState() {
		var contactsBox = document.getElementById("contacts-box");
		var classList = contactsBox.classList;
		
		if (classList.contains("opened")) {
			classList.remove("opened");						
		} else {
			classList.add("opened");
			document.getElementById("recipient-input").focus();
		}
	}

	// Setup listeners
	function setup() {
		var addContactBtn = document.getElementById("add-recipient-btn");
		addContactBtn.addEventListener("click", toggleContactsBoxState);

		var addBtn = document.getElementById("add-btn");
		addBtn.addEventListener("click", addContact);		
	}
	
})();