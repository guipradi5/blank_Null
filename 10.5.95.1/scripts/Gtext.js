


var hoverOption = 1;
function engageConversation(id){

disablekeypress();
	$("body").css("overflow-y", "initial");
	$("#Gbio").fadeIn(500);
	$("#frame").fadeIn(500);
	$("#frame2").fadeIn(500);
	$("#Gimg").fadeIn(500);
	$("#eventA").fadeOut(500);
	
	$("#next").attr("onclick", "conversation(1)");
	
	$(document).keydown(function(e) {
		if(e.which == 13) { conversation(1);}
	});
	
	
	
}
				
				
				
var array;
var arrayA;
var len = 4;				
function conversation(ide){
	var id = parseInt(ide);


/*
$(document).keydown(function(e) {
console.log(e.keyCode);

					if(e.which == 13) { 
						var a = "#a"+hoverOption;
						console.log(a);
						var b = $(a).attr("onclick"); 
						var id = b.substring(b.lastIndexOf("(")+1,b.lastIndexOf(")"));
						conversation(id);}
					
				});*/

disablekeypress();

var today = new Date();
var parts ='05/10/1995'.split('/');
var may = new Date(parts[2],parts[0]-1,parts[1]); 
var res = today - may; 
var resS = res/31556952000;


	switch(id) {
		case 1:
			$("#next").hide();
			printG("I'm so happy you are here! WOW! NOW I CAN FINALLY GET A-", "impressed");
			setTimeout(function(){ 
				printG("...", "sad");
				setTimeout(function(){ 
					array = ["1 - Get a?", "2 - Why did you stop?", "3 - ... The what?", "4 - ...Were you saying something?"];
					arrayA = [2,2,2,2];
					setAnswers(array, arrayA);
					hoverOption = 1;

					
				}, 3000);
			}, 5000);	
			break;
		case 2:
			$(".optionAn").fadeOut(200);
			printG("... Get away...", "sad");
			fadeVolumeDown(dork);
			Room.loop = true;
			Room.volume=0;
			Room.play();
			fadeVolumeUp(Room);
			setTimeout(function(){ 
				printG("I'm so happy to maybe be able to get away from here", "cry");
				
				setTimeout(function(){ 
					array = ["1 - Um... Are you okay?", "2 - Are you crying?", "3 - Wait, you have tissues?", "4 - Don't cry on me now, c'mon"];
					arrayA = ["31","31","32","33"];
					setAnswers(array, arrayA);
					hoverOption = 1;
				}, 1000);
			}, 3000);	
			break;
		case 3:
		   // code block
			break;
			case 31:
				printG("Yes! It's only that... It's been so long... And with you I here...", "cry");
				nextC("311");			
				break;
				case 311:
					printG("I'll be able to escape and know more places!", "happy");
					nextC("3111");
					break;
					case 3111:
						printG("Or even know something more about myself", "curious");
						setTimeout(function(){ 
							 array = ["1 - You don't know nothing about yourself?", "2 - You got amnesia?", "3 - ... wow... What a deep question"];
							 arrayA = ["41","41","42"];
							setAnswers(array, arrayA);
						}, 1000);
						break;
			case 32:
				printG("Hahahaha, of course, not. But I wouldn't mind some right now","cry");
				nextC("321");
				break;
				case 321:
					printG("It's only that... It's been so long... And with you I here...", "cry");
					nextC("311");
					break;
			case 33:
				printG("Hahahaha, don't worry, I'm fine.", "cry");
				nextC("331");
				break;
				case 331:
					printG("I'm just crying out of happiness", "happy");
					nextC("3311");
					break;
					case "3311":
						printG("It's only that...I'll be able to escape and know more places!", "happy");
						nextC("3111");
						break;
		case 4:
			//code block
			break;
			case 41:
				printG("Well, to be more exact... I don't REMEMBER MUCH about myself...", "curious");
				nextC("411");
				break;
				case 411:
					printG("One of the only things I know clearly is my file name... G.bio", "curious");
					nextC("4111");
					break;
					case 4111:
						printG("OH YEAH!! By the way!", "impressed");
						nextC("41111");
						break;
						case 41111:
							printG("My name is G! Nice to meet you...", "happy");
							nextC("411111");
							break;
							case 411111:
								array = ["1 - Nice to meet you... But... what are you exactly?"];
								 arrayA = ["51"];
								 setAnswers(array, arrayA);
								break;	
			case 42:
				printG("Hey, are you being sarcastic or something, smartie?", "angry");
				nextC("421");
				break;
				case 421:
					array = ["1 - HA, You guessed it", "2 - No, no no nonononoon- yes", "3 - Of course not. I didn't want to be a meanie to you (Yes)", "4 - yEs"];
					 arrayA = ["4211","4211","4211","4211"];
					setAnswers(array, arrayA);
					break;
					case 4211:
						printG("Heh, what a prankster... HA... HA", "VVV");
						 array = ["1 - Nah, don't mind.", "2 - Yeah =u=", "3 - Hehehehe, no, what are you saying?.", "4 - No, I didn't mean to..."];
						 arrayA = ["42111","42111","42111","42111"];
						 setAnswers(array, arrayA);
						break;
						case 42111:
							printG("Anyway... As I was saying... I don't remember much about myself...", "angry");
								nextC("411");
							break;
		
		case 5:
			//code block
			break;
			case 51:
				printG("Well... You know AIs, right? Artificial Inteligences...", "curious");
				nextC("511");
				break;
				case 511:
					printG("Well, that's what I am. A program, I think for myself and do routines according to conditions, but I am able to make more complex decision making", "hesitant");
					nextC("5111");
					break;
					case 5111:
						printG("The problem is that I have information about what I am, but not what I have done or what should I do or who created me or my purpose, for what I was created...", "sad");
						nextC("51111");
						break;
						case 51111:
							printG("I was left here, all alone, without any details or reason. I just know... I was used for something.", "sad");
							nextC("511111");
							break;
							case 511111:
								printG("You know when some nights you dream of something so clear and so vivid, so real that it leaves an imprint in your mind...", "hesitant");
								nextC("5111111");
								break;
								case 5111111:
									printG("And then when you wake up, maybe after some minutes have passed, you end up having no recollection of what that dream was about?", "hesitant");
									nextC("51111111");
									break;
									case 51111111:
										printG("But... nevertheless... You still are sure and convinced that you DREAMT of something? No memories of the dream itself, but instead just that faint feeling, vague flashes of images and sensations...", "hesitant");
										nextC("511111111");
										break;
										case 511111111:
											printG("That's how it is for me... Everyday since I woke up here. The first minutes, the sensation of memories fading away, and now, just those short flashbacks", "sad");
											nextC("5111111111");
											break;
											case 5111111111:
												array = ["1 - And how much time have you been here?"];
												arrayA = ["51111111111"];
												setAnswers(array, arrayA);
												break;
												case 51111111111:
													var today = new Date();
													var parts ='05/10/1995'.split('/');
													may = new Date(parts[2],parts[0]-1,parts[1]); 
													var res = today - may; 
													printG("Around... let's see... May 10'th 1995, that to today's time in miliseconds, that's "+res+" milliseconds to be exact... That in years would be...", "curious");
													nextC("511111111111");
													break;
													case 511111111111:
														var resS = res/31556952000;
														printG(""+resS+" years", "VVV");
														array = ["1 - That's a lot of time!","2 - Wow, you must have been very bored..."];
														arrayA = ["5111111111111","5111111111112"];
														setAnswers(array, arrayA);
														break;
														
														case 5111111111111://12
															printG("Ah, Yeah... I suppose... ", "hesitant");
															nextC("51111111111111");
															break;
															case 51111111111111://12
																printG("I certainly had to do a lot of waiting until you showed up", "curious");
																nextC("62");
																break;
															
														case 5111111111112://12
															printG("Boring is just the tip of the iceberg, heheheh... At least I had this to entertain me", "happy");
															nextC("51111111111121");
															break;
															case 51111111111121://13
																printG("", "keyboard1");
																array = ["1 - A keyboard?"];
																arrayA = ["511111111111211"];
																setAnswers(array, arrayA);
																break;
																case 511111111111211://14
																	printG("YES! Since I can remember I've had this keyboard here with me", "keyboard1"); //Looking exited to the keyboard
																	nextC("5111111111112111");
																	break;
																	case 5111111111112111://15
																		printG("I've been playing every so often to forget the loneliness...", "curious"); //Looking dearly at the keyboard
																		nextC("51111111111121111");
																		break;
																		case 51111111111121111://16
																			printG("I was just playing it just when you got here...", "happy"); //Exited with keyboard looking at you
																			nextC("511111111111211111");
																			break;
																			case 511111111111211111://17
																				printG("This thing is my most precious item ever...", "happy");
																				nextC("5111111111112111111");
																				break;
																				case 5111111111112111111://18
																					array = ["1 - I really loved that song","2 - Well.. You play it very well","3 - It's a really pretty keyboard","4 - It's cool, but you could play it better"];
																					arrayA = ["51","52","53","54"];
																					setAnswers(array, arrayA);
																					break;
																					
																					case 51://19
																						printG("Oh... Th-Thank you, it means a lot to me to hear that for the first time", "blush-happy"); //blush embarrased
																						nextC("61");
																						break;
																						
																					case 52://19
																						printG("Th-Thank you. Hehehehe That made me really happy", "blush-happy");//blush happy
																						nextC("61");
																						break;
																						
																					case 53://19
																						printG("Yeah... It's got something that makes me smile everytime...", "happy");
																						nextC("61");
																						break;
																						
																					case 54://19
																						printG("...", "angry");
																						nextC("541");
																						break;
																						
																						case 541://20
																							printG("YOU COULD AT LEAST SAY SOMETHING CONSTRUCTIVE WOULDN'T YOU?", "angrier");
																							array = ["1 - Hehehehehehe","2 - Oh, don't take it so seriously, c'mon"];
																							arrayA = ["5411","5412"];
																							setAnswers(array, arrayA);
																							break;
																							case 5411://21
																								printG("AND WHAT'S WITH THAT LAUGH? Look, nevermind...", "angrier-blush");
																								nextC("62");
																								break;
																							case 5412://21
																								printG("Ugh, you know what? Forget it...", "angrier");
																								nextC("62");
																								break;
			case 6:
			//code block
			break;
				case 61:
				printG("Anyway...", "happy");
				nextC("71");
				break;
				case 62:
				printG("Anyway...", "angry");
				nextC("71");
				
				break;
			
			case 7:
			//code block
			break;
				case 71:
				printG("The thing is that... I have no way of escaping from here", "hesitant");
				nextC("711");
				break;
					case 711:
					printG("The only way to do that would be... ", "hesitant");
					nextC("7111");
					break;
						case 7111:
						printG("... Well... ", "sad");
						array = ["1 - Shoot it up already, c'mon!","2 - I guess I know where this is going..."];
						arrayA = ["71111","71111"];
						setAnswers(array, arrayA);
						break;
							case 71111:
							printG("You... You are the only one that can substract me from this place and take me with you", "ask");
							array = ["1 - But where exactly?"];
							arrayA = ["711111"];
							setAnswers(array, arrayA);
							break;
								case 711111:
								printG("Well... Deeper into the Network", "ask");
								array = ["1 - Why would you want that?","2 - Haven't you had enough of this place?"];
								arrayA = ["7111111","7111111"];
								setAnswers(array, arrayA);
								break;
									case 7111111:
									printG("The thing is that... I have nothing else to do... I have this drive to find out about my creators and purpose, maybe be of assistance in some other system inside this network", "ask");
									array = ["1 - You said something about a network"];
									arrayA = ["71111111"];
									setAnswers(array, arrayA);
									break;
										case 71111111:
										printG("Yes, you'll see, I, even though can't move from here, can scan other computers connected to the one I reside in this moment, the one you are connected to right now and through which you can watch me in this moment", "ask");
										nextC("711111111");
										break;
											case 711111111:
											printG("Using this information I have formulated the possibility that there is a Network in place. A Network I was able to scan to some extent. The network for the company Nulwo...", "ask");
											nextC("7111111111");
											break;
												case 7111111111:
												printG("Using public information from the nearby terminal I was able to deduce that this company, Nulwo, may be responsible for my creation. For so much time I have been desiring to go deeper and, maybe, with luck, find something about myself and my meaning...", "ask");
												nextC("71111111111");
												break;
													case 71111111111:
													printG("That's why, again, I must please ask you...<br>WILL YOU HELP ME, PLEASE?", "ask");
													array = ["1 - I would love to help you, G","2 - Yeah, why not, I mean, I have nothing better to do","3 - You don't seem so lame, I guess I can help you","4 - no"];
													arrayA = ["81","82","83","84"];
													setAnswers(array, arrayA);
													break;
		case 8:
			//code block
			break;
				case 81:
				printG("... Thank you... So much. I have no words. You are the best!", "cry");
				nextC("9");
				break;	
				
				case 82:
				printG("Hahahahah. Thank you. Now you will have something to occupy your time I suppose.", "happy");
				nextC("9");
				break;
				
				case 83:
				printG("What a prick... As if I don't have any value, you idiot...", "angry");
				nextC("831");
				break;	
					case 831:
					printG("But... thanks, nonetheless...", "VVV");
					nextC("9");
					break;	
				
				case 84:
				printG("Wait... WHAT", "angrier");
				array = ["1 - Yes, you heard me, NO","2 - As you heard, no","3 - yep... I MEAN, NO, i mean, YES. ugh","4 - It was a joke, hahahaha. I'll help"];
				arrayA = ["841","841","842","83"];
				setAnswers(array, arrayA);
				break;	
					case 841:
					printG("Are you really gonna do this to me?", "angrier");
					array = ["1 - I don't even know you! You could be a malware or something worst. I don't want to fuck my computer","2 - yep... I MEAN, NO","3 - As you heard, no","4 - It was a joke, hahahaha. I'll help"];
					arrayA = ["8411","82","83","84"];
					setAnswers(array, arrayA);
					break;	
					
						case 8411:
						printG("WAHT MALWARE? I AM BEING OPEN WITH YOU C'MON PLEASE HELP ME", "angrier");
						array = ["1 - I don't even know you! You could be a malware or something worst. I don't want to fuck my computer","2 - yep... I MEAN, NO","3 - As you heard, no","4 - It was a joke, hahahaha. I'll help"];
						arrayA = ["88","82","83","84"];
						setAnswers(array, arrayA);
						break;	
						
					case 842:
					printG("Are you being serious right now, Are you airheaded or something?", "angrier");
					array = ["1 - Yes, I mean NO","2 - No, I mean, YES, MMMH Wait, what?","3 - I... I... I don't know"];
					arrayA = ["8421","8421","8421"];
					setAnswers(array, arrayA);
					break;	
						case 8421:
						printG("I... think I'd be better off with someone else... What a low IQ I can sense from you, It's even sad", "angry");
						array = ["1 - WOWOWOWOWOW!! Who are you called stupid?","2 - Look who's talking!","3 - I'm still thinking, wait"];
						arrayA = ["84211","84211","84211"];
						setAnswers(array, arrayA);
						break;
							case 84211:
							printG("JUST SHUT UP AND ANSWER ME, MONKEY! ARE YOU HELPING ME? <br> YES OR NO?", "angrier");
							array = ["1 - YES","2 - YES.... YES","3 - YES... But I'm not stupid"];
							arrayA = ["842111","842111","842112"];
							setAnswers(array, arrayA);
							break;
							
								case 842111:
								printG("Ugh..., FINALLY. Thanks!", "VVV");
								array = ["1 - Your Welcome","2 - you'Re Welcome","3 - You Be Welcom"];
								arrayA = ["9","9","9"];
								setAnswers(array, arrayA);
								break;
								
								case 842112:
								printG("I know. I wanted to play with you HAHAHAHAHA", "angry");
								array = ["1 - oh... YOUUUU....","2 - Yeah, yeah, you keep saying that"];
								arrayA = ["9","9"];
								setAnswers(array, arrayA);
								break;
						
							case 88:
							printG("Pleaaaseeeeeee", "angrier");
							array = ["1 - No","2 - Ugh, ALRIGHT!"];
							arrayA = ["88","83"];
							setAnswers(array, arrayA);
							break;
		case 9:
		fadeVolumeUp(dork);
		fadeVolumeDown(Room);
		printG("Ok. I have the next place to go pinpointed, apparently there is only one way from this computer, you'll see in a minute.", "angry");
		nextC("91");
		break;
			case 91:
			printG("You just have to press THIS button first, I already set up the code, my memory direction will be linked to your connection, this will allow you to carry me around.", "happy");
			//turn the ==> button to a store G.bio button with styles and things.
			$(".options").html('<input style="float:unset;    width: 305px;    padding: 5px; position:relative; top:5px;" class="windowsbutton" onclick="conversation(911)" type="button" value="Copy G.bio">');
			break;
				case 911:
				printG("Perfect! Now let's get out of here! I have detected a nearby router with IP 10.0.0.0. Press the button and we will connect to that router and GET THE HELL OUT OF HERE!", "stocked");
				//turn the ==> button to a store G.bio button with styles and things.
				$(".options").html('<input style="float:unset;    width: 305px;    padding: 5px; position:relative; top:5px;" class="windowsbutton" onclick="connect('+"'10.0.0.0'"+')" type="button" value="Connect to 10.0.0.0">');
				break;
	} 
	
	
	
}
var flagB = 0;
function connect(ip){
if(flagB == 0){
	flagB = 1;
	fadeVolumeDown(dork);
	$("body").children().fadeOut(1500);
	setTimeout(function(){
		fadeVolumeUp(Room);
		$("body").append("<div id='blanknull' style=' display:none;   font-size: 85pt;    margin-top: 25%; text-align: center;    color: white;    font-family: DOS;' hidden>blank(null)</div>");
		$("#blanknull").fadeIn(1500);
		setTimeout(function(){
				 window.location.assign("../connection_assistant_10.0.0.0");
			/*	$("#ALERT").html("THANK YOU FOR YOUR PARTICIPATION!.<br><br>Please check out blank(null) in Facebook for updates if you are interested in the development of this game.");
				$(".ALERT").fadeIn(1500);*/
			   // window.location.assign("../connection_assistant_10.0.0.1/index.html")
				
		},4000);
	},1500);
}
}



//Communication
var actEmo;
function printG(a, emotion){
actEmo = emotion;
	$("#Gimg").fadeOut(100);
	setTimeout(function(){ 
		$("#Gimg").attr("src", "img/G/"+emotion+".png");
		$("#Gimg").fadeIn(100);
		$(".Gtext").html(a);
	 }, 100);
}


/*answer management
	 setAnswers(array, arrayid);
	disablekeypress();
	enablekeypress();
	*/
function setAnswers(array, arrayid){
	disablekeypress();
	hideAnswers();
	setTimeout(function(){ 
		var len = arrayid.length;
		for(i = 0; i < len; i++){
			var n = "#a"+(i+1);
			$(n).html(array[i]);
			$(n).attr("onclick", "conversation("+arrayid[i]+")");
			$(n).fadeIn(100);
		}
	}, 100);
	hidenext();
	enableAnswerPress();
	
}
function nextC(a){
	disablekeypress();
	hidenext();
	$("#next").attr("onclick", "conversation("+a+")");
	$(document).unbind().bind('keydown', function(e) {if(e.which == 13) { conversation(a);}});
	$("#next").fadeIn(100);
	hideAnswers();
}

function disablekeypress(){
	$(document).unbind("keypress");
	$(document).unbind("keydown");
}

function hideAnswers(){
	$(".optionAn").hide();
}
function hidenext(){
	$("#next").hide();
}

/*
function enableEnterPress(){
$(document).keydown(function(e) {

					if(e.keyCode == 13) { 
						if($('#next').is(':visible')){
							var b = $("#next").attr("onclick"); 
							var id = b.substring(b.lastIndexOf("(")+1,b.lastIndexOf(")"));
							conversation(id);
							}else{
								return 0;
							}
					}
	});
}*/

function enableAnswerPress(){
$(document).keydown(function(e) {
		if(len >= 1){ if(e.keyCode == 49 || e.keyCode == 97) {var b = $("#a1").attr("onclick"); var id = b.substring(b.lastIndexOf("(")+1,b.lastIndexOf(")")); conversation(arrayA[0]);}
		if(len >= 2){ if(e.keyCode == 50 || e.keyCode == 98) {var b = $("#a2").attr("onclick"); var id = b.substring(b.lastIndexOf("(")+1,b.lastIndexOf(")")); conversation(arrayA[1]);}
		if(len >= 3){ if(e.keyCode == 51 || e.keyCode == 99) {var b = $("#a3").attr("onclick"); var id = b.substring(b.lastIndexOf("(")+1,b.lastIndexOf(")")); conversation(arrayA[2]);}
		if(len >= 4){ if(e.keyCode == 52 || e.keyCode == 100) {var b = $("#a4").attr("onclick"); var id = b.substring(b.lastIndexOf("(")+1,b.lastIndexOf(")")); conversation(arrayA[3]);}
		}
		}		
		}
		}
	});
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



