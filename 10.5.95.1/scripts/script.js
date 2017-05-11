

$( document ).ready(function() {
	animation1();			
});
var song = new Audio('sound/D.Lullaby.mp3');
var death = new Audio('sound/frsyj.mp3');
function animation1(){
				G1 = new Image(); //Preload image
				G2 = new Image(); //Preload image
				G3 = new Image(); //Preload image
				G4 = new Image(); //Preload image
				G5 = new Image(); //Preload image
				G6 = new Image(); //Preload image
				G7 = new Image(); //Preload image
				G8 = new Image(); //Preload image
				G9 = new Image(); //Preload image
				G2 = new Image(); //Preload image
				G1.src = "img/1.png";
				G2.src = "img/2.png";
				G3.src = "img/3.png";
				G4.src = "img/4.png";
				G5.src = "img/5.png";
				G6.src = "img/6.png";
				G7.src = "img/7.png";
				G8.src = "img/8.png";
				G9.src = "img/9.png";
				
	//var wG = new Audio('10.5.95.1/sound/GRwAiNnDdIA.mp3');
	var wG = $("#wG");

	var frame1 = $("#frame");
	var frame2 = $("#frame2");

	song.play();
	frame1.animate({opacity: 1},{queue: false,duration: 2500},"linear").animate({backgroundPositionX: "100%"},{queue: false,duration: 10000},"linear");
	
	setTimeout(function(){ 
		frame2.animate({opacity: 1},{queue: false,duration: 2500},"linear");
		frame2.animate({backgroundPositionX: "0%"},{queue: true,duration: 10000},"linear");
		

		setTimeout(function(){ 
		frame1.css("background","url('img/3.png') no-repeat" );
		frame1.css("background-size","115%" );  
		frame1.css("background-position-x","100%" );
				frame2.animate({opacity: 0},{queue: false,duration: 2500},"linear");
				frame1.animate({backgroundPositionX: "0%"},{queue: false,duration: 10000},"linear");
				
				setTimeout(function(){ 
				//Bottom to top
					frame2.css("background","url('img/4.png') no-repeat" );
					frame2.css("background-size","115%" );  
					frame2.css("background-position-x","0%" );
					frame2.animate({opacity: 1},{queue: false,duration: 2500},"linear");
					frame2.animate({backgroundPositionX: "100%"},{queue: false,duration: 10000},"linear");
					
					
					setTimeout(function(){ 
					//zoom in
						frame1.css("background","url('img/5.png') no-repeat" );
						frame1.css("background-size","90%" );  
						frame1.css("background-position-x","50%" );
						frame1.css("background-position-y","50%" );
						frame2.animate({opacity: 0},{queue: false,duration: 2500},"linear");
						frame1.animate({backgroundSize: "180%"},{queue: false,duration: 10000},"linear");
						
							setTimeout(function(){ 
							//change background
								frame2.css("background","url('img/6.png') no-repeat" );
								frame2.css("background-size","180%" );  
								frame2.css("background-position-x","50%" );
								frame2.css("background-position-y","50%" );
								frame2.animate({opacity: 1},{queue: false,duration: 2500},"linear");
									
									setTimeout(function(){ 
										frame1.css("background","url('img/7.png') no-repeat" );
										frame1.css("background-size","105%" ); 
										frame2.animate({opacity: 0},{queue: false,duration: 2500},"linear");	
										
											setTimeout(function(){ 
											frame2.css("background","url('img/8.png') no-repeat" );
											frame2.css("background-size","105%" ); 
											frame2.animate({opacity: 1},{queue: false,duration: 2500},"linear");
											var wG = document.getElementById("wG");										
											wG.play();
											wG.volume = 1;
											
											
												setTimeout(function(){ 
													frame1.css("background","url('img/9.png') no-repeat" );
													frame1.css("background-size","105%" ); 
													frame2.append("<img id='Fframe' style='opacity:0' src='img/9.png'>");
													$("#Fframe").css("width", "105%");
													$("#Fframe").animate({opacity: 1},{queue: false,duration: 2500},"linear");	
												
													setTimeout(function(){ 
														frame1.css("background", "none");
														frame2.css("background", "none");
														$("#Fframe").animate({opacity: 0},{queue: false,duration: 2500},"linear");	
														
														setTimeout(function(){ 
															$("#Fframe").css("width", "300%");
															$("#Fframe").css("top", "-40%");
															$("#Fframe").css("left", "-100%");				
															$("#Fframe").animate({opacity: 1},{queue: false,duration: 2500},"linear");	
															   
																setTimeout(function(){ 
																$("#Fframe").css("transform", "skewX(80deg)");
																$("#Fframe").css("-ms-transform", "skewX(80deg)");
																$("#Fframe").css("webkit-transform", "skewX(80deg)");
																death.play();
																
																setTimeout(function(){ 
																	disconnect();
																}, 1000);
													}, 4500);		
												}, 4500);
											}, 4500);	
										}, 4500);
									}, 4500);	
								}, 6000);
							}, 11000);
					}, 8000);
				}, 8000);
		}, 8000);
	}, 8000); 
	

	//setTimeout(function(){ frame2.animate({backgroundPosition:100% 100%},2000); }, 2000);

 
}

var dork = new Audio('sound/happyCircuit.mp3');
var Room = new Audio('sound/HerRoomL.mp3');
function disconnect(){

		$("#Fframe").attr('src', '../img/clock.gif');
		$("#frame2").css("text-align", "center");
		$("#Fframe").css("width", "180px");
		$("#Fframe").css("top", "50%");
		$("#Fframe").css("opacity", "1");
		$("#Fframe").css("left", "0px");
		$("#Fframe").css("transform", "translateY(-50%)");
		$("#Fframe").css("position", "relative");
		

	setTimeout(function(){ 
			$("body").append('<div class="ALERT"><div id="ALERT">ERROR<br>CONNECTION WAS LOST<br>RECONNECTING...</div></div>');	
			
				setTimeout(function(){ 
					$(".ALERT").hide();
					$("#Fframe").hide();
					$("#frame2").hide();
					$("#frame").hide();
					$("#eventA").show();
					dork.loop = true;
					dork.play();
					$("#next").show();
						$(document).keydown(function(e) {
							if(e.which == 13) { engageConversation(); }
						});

				}, 3000);	
	}, 3000);	
	
}

function skipscene(){
	$("body *").stop();
	song.pause();
	disconnect();
}

//Guessed it

function G_Atention(){

	
	

}
