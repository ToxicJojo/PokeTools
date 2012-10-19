$('[rel=tooltip]').tooltip();

function CalculateCatchRate() {

	var MaxHp = document.getElementById("input01").value;
	var Hp = document.getElementById("input02").value;
	var catchRate = document.getElementById("input03").value;
	var status = document.getElementById("select04").value;
	
	document.getElementById("catchPercentagePokeBall").textContent = getCatchPercentage(MaxHp, Hp, catchRate, status, 1) + "%";
	document.getElementById("catchPercentageGreatBall").textContent = getCatchPercentage(MaxHp, Hp, catchRate, status, 1.5) + "%";
	document.getElementById("catchPercentageUltraBall").textContent = getCatchPercentage(MaxHp, Hp, catchRate, status, 2) + "%";
	document.getElementById("catchPercentageSafariBall").textContent = getCatchPercentage(MaxHp, Hp, catchRate, status,1.5) + "%";
	document.getElementById("catchPercentageTimerBall").textContent = getCatchPercentage(MaxHp, Hp, catchRate, status, 4) + "%";
	document.getElementById("catchPercentageDiveBall").textContent = getCatchPercentage(MaxHp, Hp, catchRate, status, 3.5) + "%";
	document.getElementById("catchPercentageQuickBall").textContent = getCatchPercentage(MaxHp, Hp, catchRate, status, 4) + "%";
	document.getElementById("catchPercentageNetBall").textContent = getCatchPercentage(MaxHp, Hp, catchRate, status, 3) + "%";
	document.getElementById("catchPercentageDuskBall").textContent = getCatchPercentage(MaxHp, Hp, catchRate, status, 3.5) + "%";
	document.getElementById("catchPercentageLureBall").textContent = getCatchPercentage(MaxHp, Hp, catchRate, status, 3) + "%";
	document.getElementById("catchPercentageMoonBall").textContent = getCatchPercentage(MaxHp, Hp, catchRate, status, 4) + "%";
	document.getElementById("catchPercentageLoveBall").textContent = getCatchPercentage(MaxHp, Hp, catchRate, status, 8) + "%";
}

function getCatchPercentage(MaxHp, Hp, catchRate, status, ball) {
	// Get if the HP is the absolute or a percentage value
	if (Hp[(Hp.length - 1)] == "%") {
		Hp = parseInt(Hp);
		Hp = MaxHp * (Hp / 100);
	}
	//Capture Rate = (( 1 + ( MaxHP × 3 - CurrentHP × 2 ) × CatchRate × BallRate × Status# ) ÷ ( MaxHP × 3 )) ÷ 256
	return Math.floor((((1 + ((MaxHp * 3) - (Hp * 2)) * catchRate * ball * status) / (MaxHp * 3) ) / 256) * 100);
}