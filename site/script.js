var message = "Hi";
var a = 5;

console.log (message);  //cosole.log() means system.out.print()



console.log (compare(1,5));

function compare (x,y) {

	return (x > y);
	
}



function p () {
	var a = 10;
	console.log(a);
	
	q();

}

function q () {
	console.log (a);   
	
	}

p();
