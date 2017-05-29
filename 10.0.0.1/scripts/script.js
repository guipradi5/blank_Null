$(document).ready(function(){

	        printG("HEY LOOK! Now I have COLOR!", "happy");


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
        printG("There is no access to anything right now...", "angry");
		setNext(2);
        break;
    case 2:
        printG("... 'No boot.exe detected'... I wonder", "curious");
		setNext(3);
        break;   
	case 3:
        printG("I THINK I KNOW HOW TO CONTINUE!", "impressed");
		setNext(4);
        break;   
	case 4:
        printG("You'll see, a boot.exe is the file that executes at the start when a computer turns on.", "normalhappy");
		setNext(5);
        break;
	case 5:
        printG("It seems that the file is missing in 2 computers... That makes me wonder", "curious");
		setNext(6);
        break;
	case 6:
        printG("If I can rewrite that file and inject it somehow into the computer we can start it up!", "normalhappy");
		setNext(7);
        break;
	case 7:
        printG("But... that may take some time...", "hesitant");
		setNext(0);
		setAnswers(["How much?"], [8]);
        break;
	case 8:
        printG("Well... Around a month. I estimate around June 25th", "hesitant");
		setNext(0);
		setAnswers(["WHAT?","It's Ok, I can wait."], [9,10]);
        break;
		case 9:
			printG("HEY! Programming is not easy. It takes time, Ok? I'm sorry!", "angrier");
			setNext(11);
			break;
		case 10:
			printG("Perfect! Then I'll put myself to it!", "normalhappy");
			setNext(11);
			break;
	case 11:
		printG("I'll send you an e-mail when it's done. I'll be waiting for you", "happy");
		setNext(12);
		break;
	case 12:
		printG("And.. please... Come back eventually, could you?", "blush-happy");
		setNext(13);
		break;	
		
	case 13:
		printG("See ya!", "happy");
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