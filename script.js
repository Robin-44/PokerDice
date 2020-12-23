var lancers = 3;
var id = ["dice1", "dice2", "dice3", "dice4", "dice5",];
var diceValues = [0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6]
var main = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

function roll(element)
{
	if (lancers > 0)
	{
		var dice = document.getElementById(element);
		var diceValue = Math.floor(Math.random()*6) + 1;
		dice.innerHTML = "<img src='pict/"+diceValue+"_dice.jpg'>";
		if (element == "dice1")
		{
			diceValues[0] = diceValue;
		}
		if (element == "dice2")
		{
			diceValues[1] = diceValue;
		}
		if (element == "dice3")
		{
			diceValues[2] = diceValue;
		}
		if (element == "dice4")
		{
			diceValues[3] = diceValue;
		}
		if (element == "dice5")
		{
			diceValues[4] = diceValue;
		}
	}
}

function roll_dice()
{
	id.forEach(element => roll(element));
	lancers = lancers - 1;
	count();
}			

function index(dice)
{
	id.forEach(element => id.indexOf(element));
	var pos = id.indexOf(dice);
	return del (pos);
}

function del(pos)
{
	var erase = id.splice(pos, 1);
}

function hide(btn, dice)
{
	document.getElementById(btn).style.display="none";
	document.getElementById("as").innerHTML = 1;
	count();
}

function count()
{
	main = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	document.getElementById("paire").innerHTML = 0;
	document.getElementById("double_paire").innerHTML = 0;
	document.getElementById("petite_suite").innerHTML = 0;
	document.getElementById("brelan").innerHTML = 0;
	document.getElementById("grande_suite").innerHTML = 0;
	document.getElementById("full").innerHTML = 0;
	document.getElementById("carré").innerHTML = 0;
	document.getElementById("poker").innerHTML = 0;
	var arr = diceValues;
	var counts = {};

	for (var i = 0; i < arr.length; i++) 
	{
	  	var num = arr[i];
	  	counts[num] = counts[num] ? counts[num] + 1 : 1;
	}

	var as = counts[1]-1;
	var roi = counts[2]-1;
	var reine = counts [3]-1;
	var valet = counts [4]-1;
	var dix = counts [5]-1;
	var neuf = counts [6]-1;
	document.getElementById("as").innerHTML = as;
	document.getElementById("roi").innerHTML = roi;
	document.getElementById("reine").innerHTML = reine;
	document.getElementById("valet").innerHTML = valet;
	document.getElementById("dix").innerHTML = dix;
	document.getElementById("neuf").innerHTML = neuf;

	var total = [as, roi, reine, valet, dix, neuf];
	/*console.log(total);*/

	var aStr = total;
	for (var i = 0; i < aStr.length; i++)
	{
	   	var supp = aStr[i];
	   	switch (supp)
	   	{
	      	case 5 :
				main[7] = main[7] + 1; /*Poker*/
				document.getElementById("poker").innerHTML = main[7];
				break;
			case 4 :
				main[6] = main[6] + 1; /*Carré*/
				document.getElementById("carré").innerHTML = main[6];
				break;
			case 3 :
				main[3] = main[3] + 1; /*Brelan*/
				document.getElementById("brelan").innerHTML = main[3];
				break;
			case 2 :
				main[0] = main[0] + 1; /*Paire*/
				document.getElementById("paire").innerHTML = main[0];
				break;
			case 1 :
				main[9] = main[9] + 1;
				break;
		}
	}

	if (main[0] == 2)
	{
		main[1] = 1;
		main[0] = 0;
		document.getElementById("paire").innerHTML = main[0];
		document.getElementById("double_paire").innerHTML = main[1];
	}

	if (main[0] == 1 & main[3] == 1)
	{
		main[0] = 0;
		main[3] = 0;
		main[5] = 1;
		document.getElementById("paire").innerHTML = main[0];
		document.getElementById("brelan").innerHTML = main[3];
		document.getElementById("full").innerHTML = main[5];
	}

	if (as == 1 & roi == 1 & reine == 1 & valet == 1 & dix == 1)
	{
		main[4] = 1;
		document.getElementById("grande_suite").innerHTML = main[4];
	}

	if (roi == 1 & reine == 1 & valet == 1 & dix == 1 & neuf == 1)
	{
		main[2] = 1;
		document.getElementById("petite_suite").innerHTML = main[2];
	}
	pts = (main[0] * 5) + (main[1] * 10) + (main[2] * 15) + (main[3] * 20) + (main[4] * 25) + (main[5] * 30) + (main[6] * 35) + (main[7] * 50) + " pts";
	document.getElementById("total_pts").innerHTML = pts;
}