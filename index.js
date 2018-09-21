//the main function must occur after the page is loaded, hence being inside the wondow.onload event handler.
window.onload = function(){
	var search = document.getElementById("search");
	var filter = document.getElementById("filter");
	var add = this.document.getElementById("add");
	var reset = this.document.getElementById("reset");
	var table1 = document.getElementById("table1");

//search items by titles
    search.onclick = function(){
		var input = document.getElementById("searchWords").value;
		for (var i=1; i < table1.rows.length; i++){
			if(table1.rows[i].cells[2].innerText.toLowerCase().match(input) != null && table1.rows[i].cells[2].innerText.toLowerCase().match(input) != "" && table1.rows[i].cells[2].innerText.toLowerCase().match(input) != " "){
				table1.rows[i].style.backgroundColor = "yellow";
			}
			else{table1.rows[i].style.backgroundColor = "#FAFCFF";}
		}
	}

//filter items by catagories
	filter.onclick = function(){
		var input = document.getElementById("catagory").value;
		for (var i=1; i < table1.rows.length; i++){
			if(table1.rows[i].cells[7].innerText == input){
				table1.rows[i].style.display = "";
			}
			else if(input == "Catagory"){
				table1.rows[i].style.display = "";
			}
			else{table1.rows[i].style.display = "none"}
		}
	}

//add selected items to the cart
	add.onclick = function(){
		var number = document.getElementById("number");
		var j = number.innerHTML;
		var k = 0;
		for (var i=1; i < table1.rows.length; i++){
			if (table1.rows[i].cells[0].firstChild.checked && table1.rows[i].style.display == ""){
				j++; k++;
			}
		}
		if (k == 0){
			alert ("You need to select at least one item.")
		}
		else if (k == 1){
			alert ("You have successfully added " + k + " item to the cart.")
			number.innerHTML=j;
		}
		else{
			alert ("You have successfully added " + k + " items to the cart.")
			number.innerHTML=j;
		}
	}

//reset the cart
	reset.onclick = function(e){
		if (confirm("Do you really want to reset the cart?")){
			alert("The cart has been reset.")
			var number = document.getElementById("number");
			number.innerHTML="0";
		}
		else{e.preventDefault;}
	}
}
