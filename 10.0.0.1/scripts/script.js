$(document).ready(function(){

			

});


function printG(a, emotion){
	$("#Gimg").fadeOut(100);
	setTimeout(function(){ 
		$("#Gimg").attr("src", "img/G/"+emotion+".png");
		$("#Gimg").fadeIn(100);
		$(".Gtext").html(a);
	 }, 100);
}

function nuAlert(a,time){
		$("body").append('<div class="ALERT"><div id="ALERT">'+a+'</div></div>');
		if(time == null) time = 3000;
		setTimeout(function(){ 
			$( ".ALERT" ).remove();
		}, time);	
}

function setNext(n){
	if(n == 0){
		$("#next").fadeOut(100);
	}else{
		$("#next").fadeIn(100);
		$("#next").attr("onclick", "dialogue("+n+");");
		}
}
function setAnswers(ans,dia){
	var len = ans.length;
	console.log(ans);
	for(i=0; i < len; i++){
		var id = "#answer"+(i+1);
		console.log(id);
		$(id).html(ans[i]);
		$(id).attr("onclick", "dialogue("+dia[i]+");");
		$(id).fadeIn(100);
	}
}



function dialogue(i,t){

	$(".answer").fadeOut(100);
	
	switch(i) {
    case 1:
        printG("We are right now in a computer desktop. There should be files and information about the company or something.", "curious");
		setNext(2);
        break;
    case 2:
        printG("Maybe we can get something about me. SO LET'S GO!", "normalhappy");
		setNext(0);
        break;   
		
		
		
		
	case 3:
		printG("Seems like we are in the computer of a woman called Georgia.", "curious");
        break;   
		
		
		
	case 4:
		 printG('Ok, from what I can recolect... Hector works in Nulwo and Georgia is his psycholgist... ', 'VVV'); 
		 setNext(5);
        break;
	case 5:
        printG("It's incredible how you humans need the aid of other humans to solve your programming problems. Amazing!", "impressed");
		setNext(0);
        break;
		
		
		
	case 6:
        printG("Aren't there some letters that are a little thicker than the others?", "curious");
		setNext(7);
        break;
	case 7:
        printG("Also. What is this mathematic form of writing...?", "normalhappy");
		$("#next").html("Poetry");
		setNext(8);
        break;
	case 8:
        printG("... Poetry? Sounds interesting! I'd love to try that some day!", "happy");
		$("#next").html("==>");
		setNext(0);
        break;
		
		
		
	case 9:
		printG("This seems to be a system for broadcasting channels", "curious");
		setNext(10);
		break;
	case 10:
		printG("If you put a code, something like ABC123, in that format, and it exists, the channel should appear on the TV over there", "curious");
		setNext(11);
		break;
	case 11:
		printG("Video broadcasting... What an interesting way to share content... I presume it was made to share information in video form between the employees of Nulwo.", "curious");
		setNext(0);
		break;
	
	
	case 12:
		printG("... Wow...", "sad");
		setNext(13);
		break;	
		
	case 13:
		printG("I'm... I'm sorry, "+name+". It's just... reading that letter made me feel very uneasy somehow. Human despair...", "sad");
		setNext(14);
		break;
	case 14:
		printG("I mean... Seems like Hector went though something horrible... Maybe someone he loved... was 'destroyed'. How would you say it?", "sad");
		$("#next").html("Died?");
		setNext(15);
		break;
	case 15:
		printG("Yeah... 'die'. Isn't that the same as being deleted? It's scary. I... I never had anyone to care for. I've been alone. But only the sensation of ceasing to exist makes me feel bad... It's scary.", "sad");
		$("#next").html("==>");
		setNext(16);
		break;
	case 16:
		printG("... Anyways. We have a new clue!!", "hesitant");
		setNext(17);
		break;
	case 17:
		printG("Ehem. The password to the computer 10.0.0.2. Seems like when we call a specific phone number we'll get it. But seems like the phone number is inside a 'SAFE'... Isn't that Safe the one under the desk?", "normalhappy");
		setNext(171);
		break;
	case 171:
		printG("Now we need the password to the Safe... Mhhh... materials... Isn't there something on the bookshelf that may contain the password for the safe?", "curious");
		setNext(0);
		break;
		
		
	case 18:
		printG("A phone...", "curious");
		setNext(0);
		break;
		
		
	case 19:
		printG("We need a 4 letter word. Maybe we can find a combination in the bookshelf.", "curious");
		setNext(0);
		break;
		
		
	case 20:
		printG("We got it! A phone number!! LET'S TRY IT OUT ON THE PHONE OVER THERE. THe number is 416 555 0127", "impressed");
		setNext(0);
		break;
		
	case 21:
		printG("... Hasn't the ambience of this room become... eerie?", "sad");
		setNext(22);
		break;
	case 22:
		printG("I'm getting scared... ", "sad");
		setNext(23);
		break;
	case 23:
		printG("Um... 25702... 25702. We got the number! The password for the second PC! Let's go right now!", "normalhappy");
		setNext(24);
		break;
	case 24:
		printG("I want to go from here. Please, fast. Something's not right anymore with this computer. Changes like this are not glitches or errors... Something doesn't add up... C'MON. CLICK THAT BUTTON AT THE TOP LEFT! Let's go <strong>BACK</strong>", "angry");
		setNext(0);
		break;
		
		
	case 25:
		printG("Yeah, let's use this phone number on the phone over there. Number's 416 555 0127", "angry");
		setNext(0);
		break;
		
	case 30:
		$("#gw").css("bottom", "40%");
		printG("... Wait... BTS? Biological Transference System?", "sad");
		setNext(31);
		break;
	case 31:
		printG("... It's a machine that can transfer information from a human brain to a computer! And those... green pods, with humans in them. Those were the test subjects! Nulwo was experimenting with humans!", "sad");
		setNext(32);
		break;
	case 32:
		printG("... Wait... That portion of the video. With the young man's voice. That was not part of the original video... That is more recent.", "sad");
		setNext(33);
		break;
	case 33:
		printG("Someone else knows about us... But how? ... ", "sad");
		setNext(34);
		break;
	case 34:
		printG("... We can't know right now. There is no way I can get something just from the video. No relevant metadata is assigned to that broadcast.", "sad");
		setNext(35);
		break;
	case 35:
		printG("What could he want form me and / or you? ...", "sad");
		setNext(36);
		break;
	case 36:
		printG("...", "sad");
		setNext(37);
		break;
	case 37:
		printG("... Anyways... We finally got the password for the last computer. So let's go there and log in right now. C'mon... I feel weird about this... BTS...", "sad");
		setNext(38);
		break;
	case 38:
		$("#gw").css("bottom", "0");
		setNext(0);
		break;
		
		
	case 201:
		printG("Yeah, let's use this phone number on the phone over there. Number's 416 555 0127", "angry");
		setNext(0);
		break;
    
	}
	
}
var gasTime = 0.0001;
function gas(){
	if(gasTime <= 0.0020){
		console.log(gasTime);
		setTimeout(function(){ 
			gasTime = gasTime + 0.000025
			scene.fog = new THREE.FogExp2( 0x101010, gasTime );
			gas();
		},500);
	}
}

function playAngela(a){
	if(a == 0){
		angela.pause();
		$("#soundSwitch").attr("onclick", "playAngela(1);")
		$("#soundSwitch img").attr("src", "img/soundoff.png")
	}else
	if(a == 1){
		angela.play();
		$("#soundSwitch").attr("onclick", "playAngela(0);")
		$("#soundSwitch img").attr("src", "img/soundon.png")
	}
}


function fadeVolumeDown(a){
var vol = a.volume;
if(!(vol == 0)){
	setTimeout(function(){
			vol = vol - 0.03;
			if(vol < 0)vol = 0;
			a.volume = vol;
			fadeVolumeDown(a);
		}, 75);
	}
}

function fadeVolumeUp(a){
var vol = a.volume;
if(!(vol == 1)){
	setTimeout(function(){
			vol = vol + 0.03;
			if(vol > 1)vol = 1;
			a.volume = vol;
			fadeVolumeUp(a);
		}, 75);
	}
}

function insertInfo(a){
		$("#info").html("");
	var string = "<div class='window3d' style=''>";
		string += "<div style='width: 50px;position:relative; top:-20px; float:right; margin:5px; cursor:pointer;' onclick='$(this).parents(`.window3d`).remove();'>Close</div>";
		string += a;
		string += "</div>";
		$("#info").html(string);
}
function insertSup(a){
		$("#infoS").html("");
	var string = "<div class='window3d' style=''>";
		string += "<div style='width: 50px;position:relative; top:-20px; float:right; margin:5px; cursor:pointer;' onclick='$(this).parents(`.window3d`).remove();'>Close</div>";
		string += a;
		string += "</div>";
		$("#infoS").html(string);
}