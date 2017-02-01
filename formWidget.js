(function() {
	window.onload = main;

	var styleSheet = document.createElement("link");
	styleSheet.rel = "stylesheet";
	styleSheet.type = "css/text";
	styleSheet.href = "formWidget.css";
	
	var head = document.getElementsByTagName("head")[0];
	head.appendChild(styleSheet);

	function main() {

		var root = document.getElementById("root");
		root.appendChild(document.createElement("div"));
		
	}
	
})();