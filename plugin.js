// External JavaScript file to obtain message and either encode it or decode it.
var letters = ['a' , 'b' , 'c' , 'd' , 'e' , 'f' , 'g' , 'h' , 'i' , 'j' , 'k' , 'l' , 'm' , 'n' , 'o' , 'p' , 'q' , 'r' , 's' , 't' , 'u' , 'v' , 'w' , 'x' , 'y' , 'z', 'a' , 'b' , 'c' , 'd' , 'e' , 'f' , 'g' , 'h' , 'i' , 'j' , 'k' , 'l' , 'm' , 'n' , 'o' , 'p' , 'q' , 'r' , 's' , 't' , 'u' , 'v' , 'w' , 'x' , 'y' , 'z'];

var message = "Hello";

// ENCODE the message
function encodeMessage() {
	console.log("Hello from Message Encoder");
	var codeShift = "";
	
	// Get message to be coded and the code shift value
	message = prompt("Enter you message.");
	console.log(message, "has this many letters:", message.length);
	codeShift = prompt("Enter number of shifts.");
	codeShift = parseInt(codeShift);
	console.log("The shift value is: ", codeShift);
	document.getElementById("messageGiven").innerHTML = "<h3>" + "Your message: '" + message + "' , Shift Value is : " + String(codeShift) + "</h3>";
	
	// Compute and display the encoded message
	var cipher = "";
	var text = message.toLowerCase();
	for (let i=0; i < text.length; i++) {
		lettersintext = text [i];
		if (lettersintext == " ") {
			cipher += " ";
		}
		else { 
			for (let i=0; i < letters.length; i++) {
				if (letters[i] == lettersintext) {
					cipher += letters[i+codeShift];
					break;
				}
			}
		}
	}
	document.getElementById("newMessage").innerHTML = '<h3 style="border:2px solid Blue;">' + "Your coded message : " + cipher + "</h3>";
}

// DECODE the message
function decodeMessage() {
	var solution = '';
	console.log("Hello from decodeMessage");
	
	// Get the message to be decoded
	message = prompt("Enter the CODED message.");
	document.getElementById("messageGiven").innerHTML = "<h3>" + "Coded Message: '" + message + "'</h3>";
	var text = message.toLowerCase();
	
	// Loop through the message to convert to shifted values
	for (let i=0; i < 26; i++) {
        var cipher='';
        for (let j=0; j < text.length; j++) {
            // Get the letters to decode
            lettersintext = text [j];
            if (letters.includes(lettersintext)) {
                cipher = cipher + (letters[(letters.indexOf(lettersintext))+26-i]);
            }
            // No action required for spaces
            if (lettersintext == ' ') {
                cipher = cipher + ' ';
            }
        }
        solution = solution + cipher + "<br>&nbsp;&nbsp;";
    }
    document.getElementById("newMessage").innerHTML = '<h3 style="border:2px solid Blue;">' + "<br>Possible Solutions : <br>&nbsp;&nbsp;" + solution + "</h3>";
}
//JavaScript commands end here.

