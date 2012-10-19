document.onkeyup = Function("repeatLastAction(event)");
$(document).ready(function() {
	  loadEV();
	});

var lastStat;
var lastAmount = "NaN";

function repeatLastAction(e) {

	var key = e.which;

	if (key == 13) {
		if (lastAmount.toString() != "NaN") {
			ButtonClick(lastStat, lastAmount);
		}
	}
}

function ButtonClick(type, amount) {
	lastAmount = amount;
	lastStat = type;
	if (document.getElementById("pokerus").className == "btn active") {
		amount *= 2;
	}
	if (document.getElementById("macho").className == "btn active") {
		amount *= 2;
	}
	addEVItems();
	addEV(type, amount);
}

function changeGen() {
	var gen = parseInt(document.getElementById("gen").value);
	var genExact = parseFloat(document.getElementById("gen").value);

	hideInfo();

	if (gen == 3) {
		// No awesome items
		document.getElementById("hpMod").className = "btn disabled";
		document.getElementById("attackMod").className = "btn disabled";
		document.getElementById("defenseMod").className = "btn disabled";
		document.getElementById("specialAttackMod").className = "btn disabled";
		document.getElementById("specialDefenseMod").className = "btn disabled";
		document.getElementById("speedMod").className = "btn disabled";
		// No feathers
		document.getElementById("f1").className = "btn disabled";
		document.getElementById("f2").className = "btn disabled";
		document.getElementById("f3").className = "btn disabled";
		document.getElementById("f4").className = "btn disabled";
		document.getElementById("f5").className = "btn disabled";
		document.getElementById("f6").className = "btn disabled";

		if (genExact == 3.2) {
			document.getElementById("infoFRLG").hidden = false;
		} else if (genExact == 3.1) {
			document.getElementById("infoRS").hidden = false;
		}

	} else if (gen == 4) {
		// Awesome items
		document.getElementById("hpMod").className = "btn";
		document.getElementById("attackMod").className = "btn";
		document.getElementById("defenseMod").className = "btn";
		document.getElementById("specialAttackMod").className = "btn";
		document.getElementById("specialDefenseMod").className = "btn";
		document.getElementById("speedMod").className = "btn";
		// No feathers
		document.getElementById("f1").className = "btn disabled";
		document.getElementById("f2").className = "btn disabled";
		document.getElementById("f3").className = "btn disabled";
		document.getElementById("f4").className = "btn disabled";
		document.getElementById("f5").className = "btn disabled";
		document.getElementById("f6").className = "btn disabled";
		if (genExact == 4.2) {
			// Info
			document.getElementById("infoHGSS").hidden = false;
		} else if (genExact == 4.1) {
			document.getElementById("infoDDP").hidden = false;
		}

	} else if (gen == 5) {
		// Awesome items
		document.getElementById("hpMod").className = "btn";
		document.getElementById("attackMod").className = "btn";
		document.getElementById("defenseMod").className = "btn";
		document.getElementById("specialAttackMod").className = "btn";
		document.getElementById("specialDefenseMod").className = "btn";
		document.getElementById("speedMod").className = "btn";
		// feathers
		document.getElementById("f1").className = "btn";
		document.getElementById("f2").className = "btn";
		document.getElementById("f3").className = "btn";
		document.getElementById("f4").className = "btn";
		document.getElementById("f5").className = "btn";
		document.getElementById("f6").className = "btn";
		// Info
		if (genExact == 5.1) {
			document.getElementById("infoBW").hidden = false;
		} else if (genExact == 5.2) {
			document.getElementById("infoBW2").hidden = false;
		}
	}

}

function hideInfo() {
	document.getElementById("infoBW2").hidden = true;
	document.getElementById("infoBW").hidden = true;
	document.getElementById("infoHGSS").hidden = true;
	document.getElementById("infoDDP").hidden = true;
	document.getElementById("infoFRLG").hidden = true;
	document.getElementById("infoRS").hidden = true;
}

function countTotal() {
	var total = 0;
	total += parseInt(document.getElementById("hp").value);
	total += parseInt(document.getElementById("attack").value);
	total += parseInt(document.getElementById("defense").value);
	total += parseInt(document.getElementById("specialAttack").value);
	total += parseInt(document.getElementById("specialDefense").value);
	total += parseInt(document.getElementById("speed").value);

	document.getElementById("total").textContent = total;
	if (total > 510) {
		document.getElementById("total").style.color = "#bd362f";
	} else {
		document.getElementById("total").style.color = "#333";
	}
}

function addEV(type, amount) {
	var ev = parseInt(document.getElementById(type).value);
	if (ev.toString() == "NaN") {
		ev = 0;
	}
	ev += amount;
	if (ev > 252) {
		ev = 252;
	}
	document.getElementById(type).value = ev;
	countTotal();
}

function resetEV() {
	document.getElementById("hp").value = 0;
	document.getElementById("attack").value = 0;
	document.getElementById("defense").value = 0;
	document.getElementById("specialAttack").value = 0;
	document.getElementById("specialDefense").value = 0;
	document.getElementById("speed").value = 0;

	countTotal();
}

function loadEV(){
	var data = readCookie("evData");
	if(data != null){
		var splitData = data.split(',');
		
		document.getElementById("hp").value = splitData[0];
		document.getElementById("attack").value = splitData[1];
		document.getElementById("defense").value = splitData[2];
		document.getElementById("specialAttack").value = splitData[3];
		document.getElementById("specialDefense").value = splitData[4];
		document.getElementById("speed").value = splitData[5];
		document.getElementById("gen").value = splitData[6];
		countTotal();
		changeGen();
	}
}

function saveEV(){
	
	var data = "";
	data += document.getElementById("hp").value.toString() + ",";
	data += document.getElementById("attack").value.toString() + ",";
	data += document.getElementById("defense").value.toString() + ",";
	data += document.getElementById("specialAttack").value.toString() + ",";
	data += document.getElementById("specialDefense").value.toString() + ",";
	data += document.getElementById("speed").value.toString() + ",";
	data += document.getElementById("gen").value.toString();
	
	createCookie("evData",data , 720);
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

function addEVItems() {
	var gen = parseInt(document.getElementById("gen").value);

	if (gen > 3) {
		if (document.getElementById("hpMod").className == "btn active") {
			addEV("hp", 4);
		}
		if (document.getElementById("attackMod").className == "btn active") {
			addEV("attack", 4);
		}
		if (document.getElementById("defenseMod").className == "btn active") {
			addEV("defense", 4);
		}
		if (document.getElementById("specialAttackMod").className == "btn active") {
			addEV("specialAttack", 4);
		}
		if (document.getElementById("specialDefenseMod").className == "btn active") {
			addEV("specialDefense", 4);
		}
		if (document.getElementById("speedMod").className == "btn active") {
			addEV("speed", 4);
		}
		countTotal();
	}
}

function addVitamine(type) {
	addEV(type, 10);
	var ev = parseInt(document.getElementById(type).value);
	if (ev > 100) {
		ev = 100;
	}
	document.getElementById(type).value = ev;
	countTotal();
}

function substractBerry(type) {
	var gen = parseInt(document.getElementById("gen").value);

	// Berrys work a little different in Gen4
	if (gen == 4) {
		var ev = parseInt(document.getElementById(type).value);
		if (ev > 100) {
			document.getElementById(type).value = 100;
		} else {
			addEV(type, -10);
		}
	} else {
		addEV(type, -10);
	}

	var ev = parseInt(document.getElementById(type).value);
	if (ev < 0) {
		ev = 0;
	}
	document.getElementById(type).value = ev;
	countTotal();
}

function addFeather(type) {
	var gen = parseInt(document.getElementById("gen").value);
	if (gen == 5) {
		addEV(type, 1);
		countTotal();
	}
}