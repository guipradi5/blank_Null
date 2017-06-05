$(document).ready(function(){

		setNext(1);	

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
        printG("I... get that the company uses software and hardware that has not been updated in more than 20 years. But... this... ", "sad");
		setNext(2);
        break;
    case 2:
        printG(name+", I gotta tell you something. The files we opened in the last computer...", "sad");
		setNext(3);
        break;
    case 3:
        printG("The last time they were modified... That was on May 10th 1995.", "sad");
		setNext(301);
        break;
    case 301:
        printG("The same date I had been trapped in that dark room.", "ask");
		setNext(4);
        break;
    case 4:
        printG("And doing a quick scan over this computer. I have to say it's from the same season... No... even from before", "curious");
		setNext(5);
        break;
    case 5:
        printG("This computer, Hector's computer, has been offline since December the 12th, 1994.", "angry");
		setNext(6);
        break;
    case 6:
        printG("So far 2 computers are old, hasn't been updated and has been stuck in time. That could mean Nulwo is no longer on bussiness, you understand what I'm saying?", "angrier");
		setNext(7);
        break;
    case 7:
        printG("I've been trapped in a... How you called it?... 'DEAD'? In a 'dead' company for the last 20 years or so.", "angrier");
		setNext(8);
        break;
    case 8:
        printG("I CAN'T BELIEVE IT! NO WONDER I'VE BEEN STUCK THAT MUCH TIME! NO ONE COULD USE ME", "angrier");
		setNext(9);
        break;
    case 9:
        printG("... I just have so many questions... Why... Why this? Why is the companny like this? Why did I have to go though that fate? Why that day? May 10 1995? WHY?", "sad");
		setNext(10);
        break;
    case 10:
        printG("... I guess we'll never know it if we stay in one place. C'mon, "+name+". Let's keep looking around", "hesitant");
		setNext(0);
        break;
		
		
    case 11:
        printG("This form of speech is so much simpler than what we have seen so far. Seems like someone that doesn't know a lot about the language has written it.", "curious");
		setNext(0);
        break;
		
    case 12:
        printG("Oh, this must be the TV channel system we saw in Georgia's PC. He must have developed it. Maybe there's a broadcast code around here.", "normalhappy");
		setNext(0);
        break;
    case 13:
        printG("Notes from Hector. Seems like he was planning on going to a park with someone... But... THe date of this file... It's days before the last time someone used this computer... This is the last file modified in this PC...", "sad");
		setNext(0);
        break;
		
		
    case 14:
        printG("Oh... a note?...", "curious");
		setNext(15);
        break;
    case 15:
        printG("Seems like a map. It starts on <span style='color:red'>RED</span>, goes 5 steps to the right and 2 up. Then we will find a key... ", "curious");
		setNext(16);
        break;
    case 16:
        printG("Then... Let's find something <span style='color:red'>RED</span> and start from there!", "curious");
		setNext(0);
        break;
		
		
    case 17:
        printG("...'Sorry for your loss'... Is that referring to the... 'dead' of the person Hector cared for?...", "angry");
		setNext(0);
        break;
		
    case 18:
        printG("...", "sad");
		setNext(19);
        break;
    case 19:
        printG("Um... The-The last part... It speaks about a CHANNEL CODE!", "hesitant");
		setNext(20);
        break;
    case 20:
        printG("That's what we are looking for. There was a code input in Georgia's PC. If we find the code and go back to the first PC we can find a little more about all of this.", "hesitant");
		setNext(21);
        break;
    case 21:
        printG("The 'POEM'... It got some highlighted words. Something about... looking inside the water? and a chest? ... It says it is refering to something inside this room. So... let's find something under the water then.", "hesitant");
		setNext(22);
        break;
    case 22:
        printG("...", "sad");
		setNext(23);
        break;
    case 23:
        printG("Sorry... It's just... This room is making me feel uneasier by the second. Let's keep going.", "sad");
		setNext(0);
        break;
		
    case 24:
        printG("YOU DID IT! You found a Chest!!", "happy");
		setNext(25);
		break;
    case 25:
        printG("Seems to be locked indeed. We should use a key then to open it...", "curious");
		setNext(0);
        break;
		
    case 26:
        printG("There we go!! The key!! We found it!", "happy");
		setNext(0);
        break;
		
		
    case 27:
        printG("Look! A BROADCAST CODE!", "happy");
		setNext(28);
        break;
		
    case 28:
        printG("YHN852. Perfect! Now we've got to go to the first PC and use it there to tune in on the TV Channel. Maybe we will get the password for the third computer there. C'mon!", "happy");
		setNext(28);
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