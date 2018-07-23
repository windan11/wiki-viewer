document.body.onkeyup = function(e){
	if(e.keyCode == 13){
		search();
	}
}
function search(){
	var t = document.getElementById('input').value;
	var result, i;
	
	$.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + t + "&callback=?", function(data){
		for (i = 0; i < data.query.search.length; i++){
			result = "<div class='title'><a href='https://en.wikipedia.org/wiki/" + data.query.search[i].title + "'>" +data.query.search[i].title + "</a>" + "<div class='info'>" + data.query.search[i].snippet + "... </div></div>";
			
			document.getElementById("result").innerHTML += result;
		}
	});	
	
	document.getElementById('result').innerHTML = '';
	document.getElementById('input').value = '';
}