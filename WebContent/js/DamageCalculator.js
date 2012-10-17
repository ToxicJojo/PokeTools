function CalculateDamage() {
	// Getting the data
	var level = document.getElementById("input01").value;
	var attack = document.getElementById("input02").value;
	var defense = document.getElementById("input03").value;
	var basepower = document.getElementById("input04").value;
	var attackraise = document.getElementById("select05").value;
	var defenseraise = document.getElementById("select06").value;
	var stab = 1;
	if (document.getElementById("checkbox7").checked) {
		stab = 1.5;
	}

	var itembonus = document.getElementById("select09").value;
	var lifeorb = 1;
	if (itembonus == 1.5) {
		attack *= 1.5;
	} else if (itembonus == 1.3) {
		lifeorb = 1.3;
	}

	attack = Math.floor(attack * attackraise);
	defense = Math.floor(defense * defenseraise);

	var typebonus = document.getElementById("select08").value;
	var weatherbonus = document.getElementById("select10").value;

	var rMin = 85;
	var rMax = 100;

	var MinDmg = Math.floor(Math.floor((((Math.floor(Math.floor(Math
			.floor(((Math.floor(level * 2 / 5) + 2) * basepower * attack) / 50)
			/ defense)
			* weatherbonus) + 2) /* multipay 3 for a crit */
	* lifeorb) * rMin) / 100)
			* stab)
			* typebonus;

	var MaxDmg = Math.floor(Math.floor((((Math.floor(Math.floor(Math
			.floor(((Math.floor(level * 2 / 5) + 2) * basepower * attack) / 50)
			/ defense)
			* weatherbonus) + 2) /* multipay 3 for a crit */
	* lifeorb) * rMax) / 100)
			* stab)
			* typebonus;
	
	var MinDmgCrit = Math.floor(Math.floor((((Math.floor(Math.floor(Math
			.floor(((Math.floor(level * 2 / 5) + 2) * basepower * attack) / 50)
			/ defense)
			* weatherbonus) + 2) * 3
	* lifeorb) * rMin) / 100)
			* stab)
			* typebonus;

	var MaxDmgCrit = Math.floor(Math.floor((((Math.floor(Math.floor(Math
			.floor(((Math.floor(level * 2 / 5) + 2) * basepower * attack) / 50)
			/ defense)
			* weatherbonus) + 2) * 3
	* lifeorb) * rMax) / 100)
			* stab)
			* typebonus;

	document.getElementById("normalMinimum").textContent = MinDmg;
	document.getElementById("normalMaximum").textContent = MaxDmg;
	document.getElementById("critMinimum").textContent = MinDmgCrit;
	document.getElementById("critMaximum").textContent = MaxDmgCrit;
	
	document.getElementById("normalAverage").textContent = Math.floor((MinDmg + MaxDmg) / 2);
	document.getElementById("critAverage").textContent = Math.floor((MinDmgCrit + MaxDmgCrit) / 2);;
}