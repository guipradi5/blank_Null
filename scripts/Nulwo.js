


function loadGame(data){
	var username = data[1];
		console.log("Loading..." + data[1]);
}


//windows management


	
	$(".closeb").click(function() {
		$( this ).parents(".window").hide();
	});
	

function lines(a){ //Prints a line of code into "code" id div
var node = "<div>"+a+"</div>";
console.log(node);
$("#code").append(node);
}    


 function space(){
    lines(" ");
 }
 

function images(a, b){ //Prints an image in "code" div
var line = document.getElementById("demo");
var div = document.createElement("div");  
var img = document.createElement("img");
var br = document.createElement("br");
img.setAttribute("src", a);
img.setAttribute("style", "height:auto; width:70%;")
var node = document.createTextNode(b);
div.appendChild(node);
div.appendChild(br);
div.appendChild(img);
line.appendChild(div);
var element = document.getElementById("code");
element.appendChild(line);
}  


function winimage(a,b){ //opens an image in a different window
var myWindow = window.open("", b, "width=800, height=600");
myWindow.document.write("<img src='" + a +"'>");
}

function generateWindow(banner,txt,img,buttons,buttontext,destination){
	var wind = "<div class='window98' id='message' style='position:absolute;'><div class='top'>";
	wind = wind + "<span>Log In</span><input type='button' onclick='alert('ERROR');' value='X'><input type='button' onclick='alert('ERROR');' value='&#x25a1;'><input type='button' onclick='alert('ERROR');'value='_'></div>";
	wind = wind + "<div class='in' id='login' style='font-size:14pt; text-align:center;'>";
	wind = wind + "<div style='width:19%;'><img style='width:60%; height:auto; position: absolute; top: -10px; left: 10px;' src="+img+"></div>";
	wind = wind + "<div style='width:50%; margin-top:5px;' id='txt'><p style='font-size:8pt;'>"+txt+"</p><br><input style='float:right;width:75px; position:relative; top:5px;' class='windowsbutton' type='button' value="+buttontext+"></div>	</div></div>";
	$(destination).append(wind);
}
function generateTextWindow(id,marginTop,marginLeft,width,height,title,txt, destination){
	var wind = '<div class="window" id="'+id+'" style=" width:'+width+'px; height:'+height+'px; margin-top:'+marginTop+'%; position:absolute; float:left; margin-left:'+marginLeft+'%;z-index:2;">';
	wind = wind + '<div class="window98" id="message" style="position:absolute;">';
	wind = wind + 	'<div class="top"><span>'+title+'</span><input type="button" onclick="alert(`ERROR`);"  value="X"><input type="button" onclick="alert(`ERROR`);" value="&#x25a1;"><input type="button" onclick="alert(`ERROR`);" value="_"></div>';
	wind = wind + 	'<div class="message" style="font-size: 10pt; padding-top:5px; padding-left:5px; padding-right:5px; text-align: left; height:'+(parseInt(height)-33)+'px; overflow-y:auto;">';
	wind = wind + 		txt;
	wind = wind + 	'</div></div></div>';
	$(destination).append(wind);
}
function generateImgWindow(id,marginTop,marginLeft,width,height,title,txt, destination){
	var wind = '<div class="window" id="'+id+'" style=" width:'+width+'px; height:'+height+'px; margin-top:'+marginTop+'%; position:absolute; float:left; margin-left:'+marginLeft+'%;z-index:2;">';
	wind = wind + '<div class="window98" id="message" style="position:absolute;">';
	wind = wind + 	'<div class="top"><span>'+title+'</span><input type="button" onclick="$( this ).parents(';
	wind = wind + 	"'.window'";
	wind = wind + '	).remove();"  value="X"><input type="button" onclick="alert(`ERROR`);" value="&#x25a1;"><input type="button" onclick="alert(`ERROR`);" value="_"></div>';
	wind = wind + 	'<div class="message" style="font-size: 10pt; padding-top:5px; padding-left:5px; padding-right:5px; text-align: left; height:'+(parseInt(height)-33)+'px; overflow-y:auto;">';
	wind = wind + 		txt;
	wind = wind + 	'</div></div></div>';
	$(destination).append(wind);
}

