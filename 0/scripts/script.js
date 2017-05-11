
function startup(){
	if(sessionStorage.boot == 1){
		var ti = 1000;
	}else{
		document.getElementById("startNoise").play();
		var ti = 2000;
	}
	$("#logo").fadeIn(ti);
	$("#loadbar").delay(ti).fadeIn(ti);
	setTimeout(function(){ move();}, ti*2);
	
	
}


function move() {
    var elem = document.getElementById("progress"); 
    var width = 0;
	var frametime;
	if(sessionStorage.boot == 1){
			frametime=5;
	}else{
		sessionStorage.boot = 1;
		frametime=60;
	}
	
    var id = setInterval(frame, frametime);
	var welcom = 0;
    function frame() {
		
        if (width >= 100) {
		if( welcom != 1){
            var welcome = new Audio('os_sounds/welcome.mp3'); //Preload audio
			setTimeout(function(){welcome.play();}, 2000);
			welcom = 1;
			}
			$( "#logo" ).fadeOut( 2000 );
			$( "#loadbar" ).fadeOut( 2000 );
			$( "#screen1" ).delay( 2000 ).fadeOut( 2000 );
			$( "#screen2" ).delay( 2000 ).fadeIn( 2000 );
			
        } else {
            width++; 
            elem.style.width = width + '%'; 
            document.getElementById("label").innerHTML = width * 1 + '%';
			if(width>=51)
			document.getElementById("label").style.color = "white";
        }
    }
}



function lan(){
	errorwd();
}


function newGame(){
	var glitch = new Audio('0/sound/Al25M-skd.mp3');
		console.log("breakFrameCode");
		$("#breakFrameCode").show();
		
		var elem = document.getElementById("prog"); 
	var width = 0;
	var id = setInterval(frame, 40);
	function frame() {
		if (width >= 100) {
			clearInterval(id);
			lines("Connecting to server...");
			lines("Please wait...");			
			setTimeout(
			function(){ 
						lines("Connected to server.")
						lines("Looking for 'C79x93:/Nulworld/0x00345/hsdj77399djDjk34839/_ffjjksi88370/init/bin/SCNW.exe'");}, 
						1000);
			setTimeout(
			function(){ lines("Found location.")
						lines("Message from C79x93: 'Please enter password...'");}, 
						3000);
			setTimeout(
			function(){ lines("got APT:A lock handle ?")
						lines("00000000, 00028004, 00030005");},
						4000);
			setTimeout(
			function(){ lines("got handle ?")
						lines("fs:USER")
						lines("000400006");},
						5000);	
			setTimeout(
			function(){ lines("got handle ?")
						lines("ns:s")
						lines("006e8007");},
						5500);
			setTimeout(
			function(){ lines("got handle ?")
						lines("ir:rst")
						lines("005c0005");},
						5600);
			setTimeout(
			function(){ lines("got handle ?")
						lines("ir:rst")
						lines("005c0006");},
						5700);
			setTimeout(
			function(){ lines("got handle ?")
						lines("am:sys")
						lines("00c70003");},
						5700);		
			setTimeout(
			function(){ lines("got handle ?")
						lines("sm:t")
						lines("00a87006")
						lines("got handle ?")
						lines("rt:sd")
						lines("0c876c03");},
						5800);
			setTimeout(
			function(){ lines("hack into server succesfull")
						lines("Message from C79x93: 'Password correct. Executing SCNW.exe'");},
						6000);
			setTimeout(
			function(){ lines("Porting execution to browser")
						lines("Loading Payload...");},
						7000);
			setTimeout(
			function(){ //Code stops executing and we get glitchy assault
						
						glitch.play();
						$( ".window" ).animate({opacity: 0.2 }, 200 );
						$( "#body" ).css( "background", "linear-gradient(#101010, #2D2D2D)" );
						},
						9000);
			setTimeout(
			function(){ 
						$( ".window" ).animate({opacity: 0.8 }, 100 );
						$( "#body" ).css( "background", "linear-gradient(#6ddecc, #E6FEFA)" );
						},
						9100);	
			setTimeout(						
			function(){ 
						$( ".window" ).animate({opacity: 0.1 }, 150 );
						$( "#body" ).css( "background", "linear-gradient(#101010, #2C2C2C)" );
						},
						9200);
			setTimeout(
			function(){
						$( ".window" ).animate({opacity: 1 }, 200 );
						$( "#body" ).css( "background", "linear-gradient(#6ddecc, #E6FEFA)" );
						},
						9300);
			setTimeout(						
			function(){ 
						$( ".window" ).animate({opacity: 0.3 }, 100 );
						$( "#body" ).css( "background", "linear-gradient(#101010, #2A2A2A)" );
						},
						9600);
			setTimeout(
			function(){ 
						$( ".window" ).animate({opacity: 0.8 }, 100 );
						$( "#body" ).css( "background", "linear-gradient(#6ddecc, #E6FEFA)" );
						},
						9700);
			setTimeout(						
			function(){ 
						$( ".window" ).animate({opacity: 0.4 }, 100 );
						$( "#body" ).css( "background", "linear-gradient(#101010, #252525)" );
						},
						9800);
			setTimeout(
			function(){ 
						$( ".window" ).animate({opacity: 1 }, 100 );
						$( "#body" ).css( "background", "linear-gradient(#6ddecc, #E6FEFA)" );
						},
						10000);
			setTimeout(						
			function(){ 
						$(".window").fadeOut(2000);
						$( "#body" ).css( "background", "linear-gradient(#101010, #101010)" );
						breakFrameCode_result();
						},
						10100);
			
		} else {
			width++; 
			elem.style.width = width + '%'; 
			document.getElementById("lab").innerHTML = width * 1 + '%';
		}
	}
		
		
}


function breakFrameCode_result(){

	var console = '<p id="code">Welcome to Nulwo 2.0...<br>Type <span style="color:purple">help</span> for a list of commands</p><div class="command" id="command" style="visibility:visible;"><form id="norman" action="javascript:blank(null);">/<input id="input" autocomplete="off" type="text" class="blink_me" placeholder="█" ></form></div>';
	
	$("#screen2").html(" ");
	generateTextWindow("console","5","","500","200","Command shell",console, "#screen2");
	$("#console").hide();
	$("#console").fadeIn(1000);
	
	$("#message").children(".message").attr("id", "mes");
	$("#input").focus();
	consoleStart();
	
}
var error = new Audio('os_sounds/error.mp3'); //Preload audio
function errorwd(){
	$("#errorwd").show();
	error.play();
}


//CMD


var aa=0;
var mem = [];


function consoleStart(){
	$('#input').bind('keydown.up', function(){if(aa>0){aa=aa-1; var iinp=mem[aa]; document.getElementById("input").value = iinp;} })
	$('#input').bind('keydown.up', function(){if(document.getElementById("input").value=="undefined"){document.getElementById("input").value = "";}; })
	$('#input').bind('keydown.down', function(){if(aa<=mem.length){aa=aa+1; var iinp=mem[aa]; document.getElementById("input").value = iinp;}if(aa<=0){aa=1;}; })
	$('#input').bind('keydown.down', function(){if(document.getElementById("input").value=="undefined"){document.getElementById("input").value = "";}; })
	$('#input').bind('keydown.return', function(){if(aa==0){var inp=document.getElementById("input").value;  mem.push(inp);aa=mem.length;}else{aa=mem.length; var inp=document.getElementById("input").value;  mem.push(inp); aa=mem.length;}});
	 
        var colour = localStorage.getItem("color");
       $("#code").css("color", colour);
       


			$('#input').bind('keydown.return', function(){
				var x=document.getElementById("input").value;
				lines("/<span style='color:purple'>"+x+"</span>");

				if (x=="start" || x=="START")
				{
				stop(0);
				lines("Program is already started");
				stop(1); 
				scrollbottom();
				}else

				if (x=="help" || x=="HELP"){
				stop(0);
				space();
				lines("Public commands:");
				lines("/<span style='color:purple'>log</span> ==> gives a report on the last commands used by admin");
				lines("/<span style='color:purple'>open [file]</span> ==> open a document. The program finds the file name in the memory and tries to open it in the default protocol");
				lines("/<span style='color:purple'>debug [file]</span> ==> opens a file without stoping on errors");
				space();
				stop(1);
				scrollbottom();

				}else



				//'7▓896720.jðc', '920811.╩tc', '?▒s45905.j'

				if (x=="log" || x=="LOG"){
				stop(0);
				space();
				lines("OPENING LAST LOG:");
				lines(" ");
				lines("/<span style='color:purple'>open key.jpg</span>");
				lines("opening...");
				lines("[ERROR REPORT]");
				lines(" ");
				lines("selected files opened with errors");
				stop(1);
				scrollbottom();
				setTimeout(function(){
				error.play();
				space();
				space();
				error.play();
				lines("<span style='color:red'>7▓89611.╩t///HEY!! YOU!! TRY OPENING THAT FILE!</span>");
				lines("<span style='color:red'>USE /<span style='color:purple'>open key.jpg</span>///?▒s4?▒s4</span>");
				stop(1);
				scrollbottom();
				}, 3000);


				}else

				if (x=="open 'key.jpg', 'experiment1.jpg', 'experiment2.jpg'"|| x=="open experiment1.jpg" || x=="open 'experiment1.jpg'" || x=="open 'experiment2.jpg'" || x=="open experiment2.jpg" || x=="open 'experiment1.jpg', 'experiment2.jpg'" || x=="open 'key.jpg'" || x=="open key.jpg"){
				var com = x.replace(/open /gi, "");
				stop(0);
				space();
				lines("opening...");
				 scrollbottom();
				delay = setTimeout(function(){ lines("[ERROR REPORT]");
				lines(" ");
				lines("selected file(s) opened with errors");
				lines(" ");
				lines("Try: /<span style='color:purple'>debug "+ com +"</span>");
				stop(1);
				 scrollbottom();}, 3000);

				}else

				if(x=="debug 'experiment1.jpg', 'experiment2.jpg'" || x=="debug 'experiment1.jpg'" || x=="debug experiment1.jpg" || x=="debug 'experiment2.jpg'" || x=="debug experiment2.jpg" || x=="debug experiment1.jpg, experiment2.jpg"){
				stop(0);
				space();
				lines("file could not open despite using debug");
				lines("file is impossible to open");
				lines("Try another file");
				stop(1);
				scrollbottom();
				}else


				if(x=="debug 'key.jpg'" || x=="debug key.jpg" || x=="load key.jpg"){
				stop(0);
				var keyjpg = '<img src="0/img/key.jpg">';
				generateImgWindow("key","15","50","500","500","key.jpg",keyjpg, "#screen2");
				stop(1);
				scrollbottom();
				}else


				if(x=="debug 'key.jpg', 'experiment1.jpg', 'experiment2.jpg'"){
				stop(0);
				space();
				var keyjpg = '<img src="0/img/key.jpg">';
				lines("'experiment1.jpg' AND 'experiment2.jpg' Could not open despite using the debug commang");
				generateImgWindow("key","15","50","600","500","key.jpg",keyjpg, "#screen2");
				stop(1);
				scrollbottom();
				}else

				if (x=="open g.bio" || x=="open G.bio" || x=="debug g.bio" || x=="debug G.bio" || x=="run G.bio" || x=="run g.bio" || x=="open 'g.bio'" || x=="open 'G.bio'" || x=="debug 'g.bio'" || x=="debug 'G.bio'" || x=="run 'G.bio'" || x=="run 'g.bio'"){
				stop(0); 
				space();
				lines("Opening 'G.bio' with 'nulworld.exe'");
				lines("");
				scrollbottom();
				delay = setTimeout(function(){ lines("Instance of G.bio was found already executing. Transmitting...")}, 3000);
				delay = setTimeout(function(){ lines("Transmitted running iteration succesfully!");
				lines("Please type in /<span style='color:purple'>run nulworld.exe</span> to display your 'G.bio'");
				stop(1);
				scrollbottom();}, 6000);



				}else


				if (x=="run nulworld.exe" || x=="run Nulworld.exe" || x=="RUN NULWORLD.EXE"){
				stop(0);  
				space();
				lines("Running...");
				delay = setTimeout(function(){ 
					//VIDEO
					var video = '<video onended="protocol001()" id="nulwo" autoplay="" name="nulwo co.avi"><source src="0/vid/intro.mp4" type="video/mp4"></video><script>var nulwo = document.getElementById("nulwo");nulwo.onended = function() {  protocol001();  };</script>';
					generateImgWindow("nulwoIntro","0","0","1060","616","Welcome to Nulwo!",video, "#screen2");
					stop(1);
				
				}, 1000);}else

				if (x=="exit"){
				window.location = '';
				return false;
				}else
					
				if( x.split(" ", 2)[0] == color){
					
					var ranColor = x.split(" ", 2)[1];
					var randomColor = ranColor.toLowerCase();
					for(var i=0; i<=colorines.length;i++){
						if(randomColor == colorines[i]){
					 
				   
					  $("#code").css("color", $( "#input" ).val());
					   $("#input").css("color", $("#input").val());
					   
						localStorage.setItem("color", randomColor);
				  /*      // generate new styles and append to the placeholder style block
						var styleContent = 'input:-moz-placeholder {color: ' + randomColor + ';} input::-webkit-input-placeholder {color: ' + randomColor + ';}'
						$('#placeholder-style').text(styleContent);*/
						 }
						 }
						$( "input" ).val( "" );
						
					   
						
						$("html, body").animate({ scrollTop: $(document).height() }, "slow");
						$("#input").focus();
						
					return;
				  event.preventDefault();
					
				}


					else if(x!="" || x!=" "){
				stop(0);
				lines("Error 001: Command <span style='color:purple'>'"+x+"'</span> was wrongly inputed or doesn't exist, try again.");
				stop(1);
				scrollbottom();

				}



				});

					
           
};

function protocol001(){
	var glitch = new Audio('0/sound/Al25M-skd.mp3'); //Preload audio
	var r3eT = new Audio('0/sound/kEaqU3.mp3'); //Preload audio

	img1 = new Image(); //Preload image
	img2 = new Image(); //Preload image
	img1.src = "0/img/6&k_5dD1.png";
	img2.src = "0/img/gL17k2.jpg";
	
	$("#nulwoIntro").remove();
	$("#console").remove();
	
	//ALERT of server redirection
	$("body").css("background", "#101010");
	$("body").html('<div id="overlay"><div id="overlay2"></div></div><div class="ALERT"><div id="ALERT">ALERT<br>UNKNOWN SCRIPT EXECUTING FROM THIRD SOURCE<br>REDIRECTING TO 10.5.95.1</div></div>');

	setTimeout(						
	function(){ $("body").attr("style", "background: url('0/img/6&k_5dD1.png');");
				glitch.play();
				},
				3000);
	setTimeout(						
	function(){ $("body").attr("style", "background: #101010");
				glitch.pause();
				},
				3100);
	setTimeout(						
	function(){ $("body").attr("style", "background: url('0/img/6&k_5dD1.png');");
				glitch.play();
				},
				3200);
	setTimeout(						
	function(){ $("body").attr("style", "background: #101010");
				glitch.pause();
				},
				3300);
	setTimeout(						
	function(){ $("body").attr("style", "background: url('0/img/6&k_5dD1.png');");
				glitch.play();
				},
				3400);
	setTimeout(						
	function(){ $("body").attr("style", "background: #101010");
				glitch.pause();
				},
				3600);
	setTimeout(						
	function(){ $("body").attr("style", "background: url('0/img/6&k_5dD1.png');");
				glitch.play();
				},
				3700);
	setTimeout(						
	function(){ $("body").attr("style", "background: #101010");
				glitch.pause();
				},
				3900);
	setTimeout(						
	function(){ $("body").attr("style", "background: url('0/img/6&k_5dD1.png');");
				glitch.play();
				$("#ALERT").html("<br>UNKNOWN SCRIPT EXECUTING FROM THIRD SOURCE<br>REDIRECTING TO 10.5.95.1");

				},
				4000);
	setTimeout(						
	function(){ 
				r3eT.play();
				$("#ALERT").html("ALERT<br>UNKNOWN SCRIPT EXECUTING FROM THIRD SOURCE<br>REDIRECTING TO 10.5.95.1");

				},
				5500);
	setTimeout(						
	function(){ $("body").attr("style", "background: url('0/img/6&k_5dD1.png'); background-size: contain");
				glitch.play();
				},
				5600);
	setTimeout(						
	function(){ $("body").attr("style", "background: url('0/img/6&k_5dD1.png'); background-size: cover");
				glitch.play();
				},
				5700);
	setTimeout(						
	function(){ $("body").attr("style", "background: url('0/img/gL17k2.jpg'); background-size: unset");
				glitch.play();
				},
				5800);				
	setTimeout(						
	function(){ $("body").attr("style", "background: url('0/img/gL17k2.jpg'); background-size: cover");
				glitch.play();
				$("#ALERT").html("<br>UNKNOWN SCRIPT EXECUTING FROM THIRD SOURCE<br>REDIRECTING TO 10.5.95.1");

				},
				5900);				
	setTimeout(						
	function(){ $("body").attr("style", "background: url('0/img/6&k_5dD1.png'); background-size: unset");
				glitch.play();
				$("#ALERT").html("<br>UNKNOWN SCRIPT EXECUTING FROM THIRD SOURCE<br>REDIRECTING TO 10.5.95.1");

				},
				6000);				
	setTimeout(						
	function(){ $("body").attr("style", "background: url('0/img/6&k_5dD1.png'); background-size: contain");
				glitch.play();
				},
				6150);				
	setTimeout(						
	function(){ $("body").attr("style", "background: url('0/img/gL17k2.jpg'); background-size: cover");
				glitch.play();
				},
				6250);			
	setTimeout(						
	function(){ $("body").attr("style", "background: url('0/img/gL17k2.jpg'); background-size: unset");
				glitch.play();
				},
				6400);		
	setTimeout(						
	function(){ $("body").attr("style", "background: url('0/img/gL17k2.jpg'); background-size: cover");
				glitch.play();
				$("#ALERT").html("ALERT<br>UNKNOWN SCRIPT EXECUTING FROM THIRD SOURCE<br>REDIRECTING TO 10.5.95.1");

				},
				6500);		
	setTimeout(						
	function(){ $("body").attr("style", "background: url('0/img/gL17k2.jpg'); background-size: contain");
				},
				6600);		
	setTimeout(						
	function(){ $("body").attr("style", "background: url('0/img/6&k_5dD1.png'); background-size: cover");
				},
				6700);		
	setTimeout(						
	function(){ $("body").attr("style", "background: url('0/img/gL17k2.jpg'); background-size: contain");
				},
				6800);		
	setTimeout(						
	function(){ $("body").attr("style", "background: url('0/img/gL17k2.jpg'); background-size: cover");
				
				},
				6900);		
	setTimeout(						
	function(){ $("body").attr("style", "background: url('0/img/gL17k2.jpg'); background-size: contain");
				glitch.play();
				$("#ALERT").html("LARET<br>WNOWNKU PRISTC IGXNECTEU FORM DIRHT CUROES<br>RIDGTNECREI OT 10.5.95.1");
				},
				7000);		
	setTimeout(						
	function(){ $("body").attr("style", "background: url('0/img/gL17k2.jpg'); background-size: cover");
				},
				7150);		
	setTimeout(						
	function(){ $("body").attr("style", "background: url('0/img/gL17k2.jpg'); background-size: contain");
				},
				7300);						
	setTimeout(						
	function(){ $("body").attr("style", "background: url('0/img/gL17k2.jpg'); background-size: cover");
				},
				7450);		
	setTimeout(						
	function(){ $("body").attr("style", "background: url('0/img/gL17k2.jpg'); background-size: contain");
				},
				7600);						
	setTimeout(						
	function(){ $("body").attr("style", "background: url('0/img/gL17k2.jpg'); background-size: cover");
				},
				7750);		
	setTimeout(						
	function(){ $("body").attr("style", "background: url('0/img/gL17k2.jpg'); background-size: contain");
				},
				7900);						
	setTimeout(						
	function(){ $("body").attr("style", "background: url('0/img/gL17k2.jpg'); background-size: unset");
				},
				8000);		
	setTimeout(						
	function(){ $("body").attr("style", "background: url('0/img/gL17k2.jpg'); background-size: contain");
				glitch.play();
				$(".ALERT").remove();
				},
				8080);						
	setTimeout(						
	function(){ $("body").attr("style", "background: url('0/img/gL17k2.jpg'); background-size: unset");
				},
				8160);		
	setTimeout(						
	function(){ $("body").attr("style", "background: url('0/img/gL17k2.jpg'); background-size: contain");
				},
				8240);						
	setTimeout(						
	function(){ $("body").attr("style", "background: url('0/img/gL17k2.jpg'); background-size: unset");
				},
				8320);		
	setTimeout(						
	function(){ $("body").attr("style", "background: url('0/img/gL17k2.jpg'); background-size: contain");
				},
				8400);						
	setTimeout(						
	function(){ $("body").attr("style", "background: url('0/img/gL17k2.jpg'); background-size: unset");
				},
				8480);		
	setTimeout(						
	function(){ $("body").attr("style", "background: url('0/img/gL17k2.jpg'); background-size: contain");
				glitch.play();
				},
				8560);						
	setTimeout(						
	function(){ $("body").attr("style", "background: url('0/img/gL17k2.jpg'); background-size: unset");
				},
				8640);		
	setTimeout(						
	function(){ $("body").attr("style", "background: url('0/img/gL17k2.jpg'); background-size: contain");
				},
				8720);						
	setTimeout(						
	function(){ $("body").attr("style", "background: url('0/img/gL17k2.jpg'); background-size: unset");
				},
				8800);		
	setTimeout(						
	function(){ $("body").attr("style", "background: url('0/img/gL17k2.jpg'); background-size: contain");
				},
				8880);						
	setTimeout(						
	function(){ $("body").attr("style", "background: url('0/img/gL17k2.jpg'); background-size: unset");
				},
				8960);		
	setTimeout(						
	function(){ $("body").attr("style", "background: url('0/img/gL17k2.jpg'); background-size: contain");
				glitch.play();
				},
				9040);		
	setTimeout(						
	function(){ 	
				$("body").attr("style", "background: url('0/img/gL17k2.jpg'); background-size: unset");
				},
				9140);		
	setTimeout(						
	function(){ $("body").attr("style", "background: black; color:white;");	
				$("body").html('Redirecting to 10.5.95.1');
				},
				10000);		
	setTimeout(						
	function(){	$("body").html('Redirecting to 10.5.95.1.');
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
				G1.src = "10.5.95.1/img/1.png";
				G2.src = "10.5.95.1/img/2.png";
				G3.src = "10.5.95.1/img/3.png";
				G4.src = "10.5.95.1/img/4.png";
				G5.src = "10.5.95.1/img/5.png";
				G6.src = "10.5.95.1/img/6.png";
				G7.src = "10.5.95.1/img/7.png";
				G8.src = "10.5.95.1/img/8.png";
				G9.src = "10.5.95.1/img/9.png";
				
				},
				11000);		
	setTimeout(						
	function(){	$("body").html('Redirecting to 10.5.95.1..');
				},
				12000);		
	setTimeout(						
	function(){	$("body").html('Redirecting to 10.5.95.1...');
				},
				13000);		
	setTimeout(						
	function(){	$("body").html('Entered 10.5.95.1');
				},
				14000);		
	setTimeout(						
	function(){	$("body").html('Entered 10.5.95.1<br>boot.exe initiating.');
				},
				15000);		
	setTimeout(						
	function(){	$("body").html('Entered 10.5.95.1<br>boot.exe initiating..');
				},
				16000);		
	setTimeout(						
	function(){	$("body").html('');
				window.location = "10.5.95.1";
				},
				17000);
				
	
	
}


        
var step = 0;
var DOWN = 3000;
var delay; // delay = setTimeout(function(){  }, 3000);
function scrollbottom() { //Permits scrolling to the bottom
    
    $("#mes").scrollTop(DOWN);
    DOWN=DOWN+2000;
}


function blank(a){
	if(a == null){
	console.log("Please save her.");
	}
}

   function stop(a){
       if(a==0){
           
       document.getElementById("command").style.opacity = 0;
       document.getElementById("input").value = "";
        }
       if(a==1){
          document.getElementById("command").style.opacity = 1;
          
          

       }
   }


$( "#input" ).submit(function( ) {
	
	
});



 var colorines = [
  "black", 	"#000000",	
"navy" , "#000080"	 	,
"darkblue" ,	 "#00008b"	, 
"mediumblue" ,	 "#0000cd"	, 	 
"blue" ,	 "#0000ff"	 	, 
"darkgreen" ,	 "#006400"	 ,	 
"green", 	 "#008000" 	 ,
"teal", 	 "#008080"	 ,	 
"darkcyan" ,	 "#008b8b",	 	 
"deepskyblue", "#00bfff"	, 	 
"darkturquoise", "#00ced1"	 ,	 
"mediumspringgreen", "#00fa9a",	 	 
"lime", "#00ff00",
"springgreen", "#00ff7f"	 	 ,
"aqua", "#00ffff"	 	 ,
"cyan", "#00ffff"	 	 ,
"midnightblue", "#191970",	 	 
"dodgerblue", "#1e90ff"	 ,	 
"lightseagreen", "#20b2aa",	 	 
"forestgreen", "#228b22"	, 	 
"seagreen", "#2e8b57"	 	 ,
"darkslategray", "#2f4f4f"	 ,	 
"limegreen", "#32cd32"	 	 ,
"mediumseagreen", "#3cb371"	 ,	 
"turquoise", "#40e0d0"	 	 ,
"royalblue", "#4169e1"	 	 ,
"steelblue", "#4682b4"	 	 ,
"darkslateblue", "#483d8b"	 ,	 
"mediumturquoise", "#48d1cc"	, 	 
"indigo ", "#4b0082"	 	 ,
"darkolivegreen", "#556b2f"	 ,	 
"cadetblue", "#5f9ea0"	 	 ,
"cornflowerblue", "#6495ed"	 ,	 
"rebeccapurple", "#663399"	 ,	 
"mediumaquamarine", "#66cdaa",	 	 
"dimgray", "#696969" 	 ,
"slateblue", "#6a5acd"	 ,	 
"olivedrab", "#6b8e23"	 ,	 
"slategray", "#708090"	 ,	 
"lightslategray", "#778899"	 	 ,
"mediumslateblue", "#7b68ee"	 ,	 
"lawngreen", "#7cfc00"	 	 ,
"chartreuse", "#7fff00"	 	 ,
"aquamarine", "#7fffd4"	 	 ,
"maroon", "#800000"	 	 ,
"purple", "#800080"	 	 ,
"olive", "#808000"	 	 ,
"gray", "#808080"	 	 ,
"skyblue", "#87ceeb"	 ,	 
"lightskyblue", "#87cefa",	 	 
"blueviolet", "#8a2be2"	 ,	 
"darkred", "#8b0000"	 ,	 
"darkmagenta", "#8b008b"	, 	 
"saddlebrown", "#8b4513"	 ,	 
"darkseagreen", "#8fbc8f"	 ,	 
"lightgreen", "#90ee90"	 	 ,
"mediumpurple", "#9370db"	 ,	 
"darkviolet", "#9400d3"	 	 ,
"palegreen", "#98fb98"	 	 ,
"darkorchid", "#9932cc"	 	 ,
"yellowgreen", "#9acd32"	 ,	 
"sienna", "#a0522d"	 	 ,
"brown", "#a52a2a"	 	 ,
"darkgray", "#a9a9a9"	 ,	 
"lightblue", "#add8e6"	 ,	 
"greenyellow", "#adff2f"	, 	 
"paleturquoise", "#afeeee"	 ,	 
"lightsteelblue", "#b0c4de"	 ,	 
"powderblue", "#b0e0e6"	 	 ,
"firebrick", "#b22222"	 	 ,
"darkgoldenrod", "#b8860b"	 ,	 
"mediumorchid", "#ba55d3"	 ,	 
"rosybrown", "#bc8f8f"	 	 ,
"darkkhaki", "#bdb76b"	 	 ,
"silver", "#c0c0c0"	 	 ,
"mediumvioletred", "#c71585"	, 	 
"indianred ", "#cd5c5c"	 	, 
"peru", "#cd853f"	 	 ,
"chocolate", "#d2691e"	 ,	 
"tan", "#d2b48c"	 	 ,
"lightgray", "#d3d3d3"	 ,	 
"thistle", "#d8bfd8"	 ,	 
"orchid", "#da70d6"	 	 ,
"goldenrod", "#daa520"	 ,	 
"palevioletred", "#db7093",	 	 
"crimson", "#dc143c"	 	, 
"gainsboro", "#dcdcdc"	 	 ,
"plum", "#dda0dd"	 	 ,
"burlywood", "#deb887"	 ,	 
"lightcyan", "#e0ffff"	 ,	 
"lavender", "#e6e6fa"	 ,	 
"darksalmon", "#e9967a"	 ,	 
"violet", "#ee82ee"	 	 ,
"palegoldenrod", "#eee8aa",	 	 
"lightcoral", "#f08080"	 	, 
"khaki", "#f0e68c"	 	 ,
"aliceblue", "#f0f8ff"	 ,	 
"honeydew", "#f0fff0"	 ,	 
"azure", "#f0ffff"	 	 ,
"sandybrown", "#f4a460"	 ,	 
"wheat", "#f5deb3"	 	 ,
"beige", "#f5f5dc"	 	 ,
"whitesmoke", "#f5f5f5"	 ,	 
"mintcream", "#f5fffa"	 ,	 
"ghostwhite", "#f8f8ff"	 ,	 
"salmon", "#fa8072"	 	 ,
"antiquewhite", "#faebd7",	 	 
"linen", "#faf0e6"	 	 ,
"lightgoldenrodyellow", "#fafad2"	 	, 
"oldlace", "#fdf5e6"	 	 ,
"red", "#ff0000"	 	 ,
"fuchsia", "#ff00ff"	 ,	 
"magenta", "#ff00ff"	 ,	 
"deeppink", "#ff1493"	 ,	 
"orangered", "#ff4500"	 ,	 
"tomato", "#ff6347"	 	 ,
"hotpink", "#ff69b4"	 ,	 
"coral", "#ff7f50"	 	 ,
"darkorange", "#ff8c00"	 ,	 
"lightsalmon", "#ffa07a"	, 	 
"orange", "#ffa500"	 	 ,
"lightpink", "#ffb6c1"	 ,	 
"pink", "#ffc0cb"	 	 ,
"gold", "#ffd700"	 	 ,
"peachpuff", "#ffdab9"	 ,	 
"navajowhite", "#ffdead"	, 	 
"moccasin", "#ffe4b5"	 	 ,
"bisque", "#ffe4c4"	 	 ,
"mistyrose", "#ffe4e1"	 ,	 
"blanchedalmond", "#ffebcd"	 	, 
"papayawhip", "#ffefd5"	 	, 
"lavenderblush", "#fff0f5"	 	 ,
"seashell", "#fff5ee"	 	 ,
"cornsilk", "#fff8dc"	 	 ,
"lemonchiffon", "#fffacd"	 ,	 
"floralwhite", "#fffaf0"	 ,	 
"snow", "#fffafa"	 	 ,
"yellow", "#ffff00"	 	 ,
"lightyellow", "#ffffe0"	, 	 
"ivory", "#fffff0"	 	 ,
"white", "#ffffff"];
   


