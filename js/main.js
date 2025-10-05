//the mainly tutorial for the calcs is - https://www.yeshiva.org.il/wiki/index.php/%D7%9E%D7%93%D7%A8%D7%99%D7%9A_%D7%9C%D7%94%D7%9B%D7%A0%D7%AA_%D7%9C%D7%95%D7%97_%D7%A9%D7%A0%D7%94_%D7%A2%D7%91%D7%A8%D7%99

window.onload = function() {
    // TODO:: Do your initialization job
	if(localStorage["version"] == null)
		localStorage["version"] = "1";

	if(localStorage["city"] == null)
		localStorage["city"] = 0;
	
	if(localStorage["colorInstructions"] == null)
		localStorage["colorInstructions"] = "red";
	var instructions = document.getElementsByClassName("instructions");
	for(i = 0; i < instructions.length; i++)
		instructions[i].style.color = localStorage["colorInstructions"];
	
	if(localStorage["sizeText"] == null)
		localStorage["sizeText"] = "2em";
	var texts = document.getElementsByClassName("text");
	if(document.title == "הגדרות")
		colorVal();
	for(i = 0; i < texts.length; i++)
		texts[i].style.fontSize = localStorage["sizeText"];
	
	switch(document.title){
	case "ברכת המזון":
		breadText();
		break;
	case "מעין שלוש":
		grainText();
		break;
	case "בורא נפשות":
		break;
	case "תפריט":
		var d = new Date();
		document.getElementById("year").value = d.getFullYear();
		document.getElementById("day").value = d.getDate();
		document.getElementById("month").value = d.getMonth() + 1;
		
		if(document.getElementById("hebDate") != null)
			runAll();
		break;
	default:
		break;
	}

	getAddons();
	
    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try {
            	if(document.title == "תפריט")
            		tizen.application.getCurrentApplication().exit();
            	else
            		window.history.back();
            } catch (ignore) {}
        }
    });
    
    
};


function changeVersion(){
	var version = document.getElementById("selectVersion").value;
	localStorage["version"] = version;
}

function changeColor(){
	var color = document.getElementById("selectColorInstructions").value;
	var textColor = document.getElementById("exam1");
	textColor.style.color = color;
	localStorage["colorInstructions"] = color;
}

function changeSize(){
	var size = document.getElementById("selectSizeText").value;
	var textSize = document.getElementById("exam2");
	textSize.style.fontSize = size;
	localStorage["sizeText"] = size;
}

function changeCity(){
	var city = document.getElementById("selectCity").value;
	localStorage["city"] = city;
}

function colorVal(){
	document.getElementById("selectVersion").value = localStorage["version"];
	document.getElementById("selectColorInstructions").value = localStorage["colorInstructions"];
	document.getElementById("exam1").style.color = localStorage["colorInstructions"];
	document.getElementById("selectSizeText").value = localStorage["sizeText"];
	document.getElementById("exam2").style.fontSize = localStorage["sizeText"];
	document.getElementById("selectCity").value = localStorage["city"];
}

function showExams(){
	document.getElementById("exam1").style.color = document.getElementById("selectColorInstructions").value;
	document.getElementById("exam2").style.fontSize = document.getElementById("selectSizeText").value;
}

function backMenu(){
	window.location = "index.html";
}

function breadText(){
	var ashcenaz = document.getElementById("ashcenaz");
	var sfard = document.getElementById("sfard");
	var edotHamizrach = document.getElementById("edotHamizrach");
	
	switch(parseInt(localStorage["version"])){
		case 1:
			ashcenaz.style.display = "block";
			sfard.style.display = "none";
			edotHamizrach.style.display= "none";
			break;
		case 2:
			ashcenaz.style.display = "none";
			sfard.style.display = "block";
			edotHamizrach.style.display= "none";
			break;
		case 3:
			ashcenaz.style.display = "none";
			sfard.style.display = "none";
			edotHamizrach.style.display= "block";
			break;
		default:
			break;
	}
}

function grainText(){
	var ashcenaz = document.getElementById("ashcenaz");
	var sfard = document.getElementById("sfard");
	var edotHamizrach = document.getElementById("edotHamizrach");
	
	switch(parseInt(localStorage["version"])){
		case 1:
			ashcenaz.style.display = "block";
			sfard.style.display = "none";
			edotHamizrach.style.display= "none";
			break;
		case 2:
			ashcenaz.style.display = "none";
			sfard.style.display = "block";
			edotHamizrach.style.display= "none";
			break;
		case 3:
			ashcenaz.style.display = "none";
			sfard.style.display = "none";
			edotHamizrach.style.display= "block";
			break;
		default:
			break;
	}
}

function getAddons(){
	var holidayVersion;
	var goodday = false;
	
	if(localStorage["version"] == 1)
		holidayVersion = "A";
	else if(localStorage["version"] == 2)
		holidayVersion = "S";
	else
		holidayVersion = "EH";
	
	if(localStorage["hebrewDay"] == "א'" || localStorage["hebrewDay"] == "ל'"){
		holidayVersion += "RoshHodesh";
		goodday = true;
	}
		
	for(i = 0; i < document.getElementsByClassName(holidayVersion).length; i++)
		document.getElementsByClassName(holidayVersion)[i].style.display = "block";
	
	
	if(localStorage["version"] == 1)
		holidayVersion = "A";
	else if(localStorage["version"] == 2)
		holidayVersion = "S";
	else
		holidayVersion = "EH";
	
	switch(localStorage["hebrewMonth"]){
		case "תשרי":
			switch(localStorage["hebrewDay"]){
				case "א'":
				case "ב'":
					holidayVersion += "RoshHashana";
					goodday = true;
					break;
				case "י'":
					holidayVersion += "YomKipoor";
					goodday = true;
					break;
				case 'ט"ו':
					holidayVersion += "Hag-";
				case 'ט"ז':
				case 'י"ז':
				case 'י"ח':
				case 'י"ט':
				case "כ'":
				case 'כ"א':
					holidayVersion += "Soocot";
					goodday = true;
					break;
				case 'כ"ב':
					holidayVersion += "ShminiAtzeret";
					goodday = true;
					break;
			}
			break;
		case "כסלו":
			switch(localStorage["hebrewDay"]){
				case 'כ"ה':
				case 'כ"ו':
				case 'כ"ז':
				case 'כ"ח':
				case 'כ"ט':
				case "ל'":
					holidayVersion += "Hanoka";
					goodday = true;
					break;
			}
			break;
		case "טבת":
			switch(localStorage["hebrewDay"]){
				case "א'":
				case "ב'":
					holidayVersion += "Hanoka";
					goodday = true;
					break;
				case "ג'":
					if(missOrFull == 'K')
						holidayVersion += "Hanoka";
						goodday = true;
					break;
			}
			break;
		case "אדר":
		case "אדר ב'":
			switch(localStorage["hebrewDay"]){
				case 'י"ד':
					holidayVersion += "Porim";
					goodday = true;
					break;
				case 'ט"ו':
					holidayVersion += "Porim";
					goodday = true;
					break;
			}
			break;
		case "ניסן":
			switch(localStorage["hebrewDay"]){
				case 'ט"ו':
					holidayVersion += "Hag-";
				case 'ט"ז':
				case 'י"ז':
				case 'י"ח':
				case 'י"ט':
				case "כ'":
				case 'כ"א':
					holidayVersion += "Pesach";
					goodday = true;
					break;
			}
			break;
		case "סיוון":
			switch(localStorage["hebrewDay"]){
				case "ו'":
					holidayVersion += "Shavoohot";
					goodday = true;
					break;
			}
			break;
	}
	
	for(i = 0; i < document.getElementsByClassName(holidayVersion).length; i++){
		document.getElementsByClassName(holidayVersion)[i].style.display = "block";
	}

	if(goodday){
		for(i = 0; i < document.getElementsByClassName("inlineAddon").length; i++)
			document.getElementsByClassName("inlineAddon")[i].style.display = "inline";
		for(i = 0; i < document.getElementsByClassName("hide").length; i++)
			document.getElementsByClassName("hide")[i].style.display = "none";
	}
}

var passover;
var passoverMonth = 3;
var roshHashanaDay;
var roshHashanaMonth;

var isMeoobheret;
var missOrFull;
var beforeRoshHashana;

var day;
var month;
var year;

var hebrewDay = 1;
var hebrewMonth = 1;
var hebrewYear;


function runAll(){
	hebrewDay = 1;
	hebrewMonth = 1;
	
	getYear();
	calcRiseSet(true, "sunrise");
	calcRiseSet(false, "sunset");
	getPassover();
	getRoshHashana();
	isBeforeRoshHashana();
	getHebrewYear();
	getIsMeoobheret();
	getMissOrFullDays();
	getHebrewDate();
	isHoliday();
	
	document.getElementById("hebDate").innerHTML += "<br />" + "זריחה: " + localStorage["sunrise"];
	document.getElementById("hebDate").innerHTML += "<br />" + "שקיעה: " + localStorage["sunset"];
}

function isHoliday(){
	if(hebrewDay == "א'" || hebrewDay == "ל'")
		document.getElementById("hebDate").innerHTML += "<br />" + 'ראש חודש';
	
	switch(hebrewMonth){
		case "תשרי":
			switch(hebrewDay){
				case "א'":
				case "ב'":
					document.getElementById("hebDate").innerHTML += "<br />" + "ראש השנה";
					break;
				case "ג'":
					document.getElementById("hebDate").innerHTML += "<br />" + "צום גדליה";
					break;
				case "י'":
					document.getElementById("hebDate").innerHTML += "<br />" + "יום כיפור";
					break;
				case 'ט"ו':
					document.getElementById("hebDate").innerHTML += "<br />" + "סוכות";
					break;
				case 'ט"ז':
				case 'י"ז':
				case 'י"ח':
				case 'י"ט':
				case "כ'":
					document.getElementById("hebDate").innerHTML += "<br />" + "חול המועד סוכות";
					break;
				case 'כ"א':
					document.getElementById("hebDate").innerHTML += "<br />" + "הושענא רבה";
					break;
				case 'כ"ב':
					document.getElementById("hebDate").innerHTML += "<br />" + "שמיני עצרת";
					break;
				case 'כ"ג':
					document.getElementById("hebDate").innerHTML += "<br />" + '(שמחת תורה (בחו"ל';
					break;
			}
			break;
		case "כסלו":
			switch(hebrewDay){
				case 'כ"ה':
				case 'כ"ו':
				case 'כ"ז':
				case 'כ"ח':
				case 'כ"ט':
				case "ל'":
					document.getElementById("hebDate").innerHTML += "<br />" + "חנוכה";
					break;
			}
			break;
		case "טבת":
			switch(hebrewDay){
				case "א'":
				case "ב'":
					document.getElementById("hebDate").innerHTML += "<br />" + "חנוכה";
					break;
				case "ג'":
					if(missOrFull == 'K')
						document.getElementById("hebDate").innerHTML += "<br />" + "חנוכה";
					break;
				case "י'":
					document.getElementById("hebDate").innerHTML += "<br />" + "צום עשרה בטבת"
					break;
			}
			break;
		case "שבט":
			switch(hebrewDay){
				case 'ט"ו':
					document.getElementById("hebDate").innerHTML += "<br />" + 'ט"ו בשבט';
					break;
			}
			break;
		case "אדר":
		case "אדר ב'":
			switch(hebrewDay){
				case 'י"ג':
					document.getElementById("hebDate").innerHTML += "<br />" + "תענית אסתר";
					break;
				case 'י"ד':
					document.getElementById("hebDate").innerHTML += "<br />" + "פורים";
					break;
				case 'ט"ו':
					document.getElementById("hebDate").innerHTML += "<br />" + "שושן פורים";
					break;
			}
			break;
		case "ניסן":
			switch(hebrewDay){
				case 'ט"ו':
					document.getElementById("hebDate").innerHTML += "<br />" + "פסח";
					break;
				case 'ט"ז':
				case 'י"ז':
				case 'י"ח':
				case 'י"ט':
				case "כ'":
					document.getElementById("hebDate").innerHTML += "<br />" + "חול המועד פסח";
					break;
				case 'כ"א':
					document.getElementById("hebDate").innerHTML += "<br />" + "שביעי של פסח";
					break;
			}
			break;
		case "אייר":
			switch(hebrewDay){
				case 'י"ח':
					document.getElementById("hebDate").innerHTML += "<br />" + 'ל"ג בעומר';
					break;
			}
			break;
		case "סיוון":
			switch(hebrewDay){
				case "ו'":
					document.getElementById("hebDate").innerHTML += "<br />" + "שבועות";
					break;
			}
			break;
		case "תמוז":
			switch(hebrewDay){
				case 'י"ז':
					document.getElementById("hebDate").innerHTML += "<br />" + 'צום י"ז בתמוז';
					break;
			}
			break;
		case "אב":
			switch(hebrewDay){
				case "ט'":
					document.getElementById("hebDate").innerHTML += "<br />" + 'תשעה באב';
					break;
			}
			break;
	}
}

function getHebrewDayLetters(){
	switch(hebrewDay){
		case 1:
			hebrewDay = "א'";
			break;
		case 2:
			hebrewDay = "ב'";
			break;
		case 3:
			hebrewDay = "ג'";
			break;
		case 4:
			hebrewDay = "ד'";
			break;
		case 5:
			hebrewDay = "ה'";
			break;
		case 6:
			hebrewDay = "ו'";
			break;
		case 7:
			hebrewDay = "ז'";
			break;
		case 8:
			hebrewDay = "ח'";
			break;
		case 9:
			hebrewDay = "ט'";
			break;
		case 10:
			hebrewDay = "י'";
			break;
		case 11:
			hebrewDay = 'י"א';
			break;
		case 12:
			hebrewDay = 'י"ב';
			break;
		case 13:
			hebrewDay = 'י"ג';
			break;
		case 14:
			hebrewDay = 'י"ד';
			break;
		case 15:
			hebrewDay = 'ט"ו';
			break;
		case 16:
			hebrewDay = 'ט"ז';
			break;
		case 17:
			hebrewDay = 'י"ז';
			break;
		case 18:
			hebrewDay = 'י"ח';
			break;
		case 19:
			hebrewDay = 'י"ט';
			break;
		case 20:
			hebrewDay = "כ'";
			break;
		case 21:
			hebrewDay = 'כ"א';
			break;
		case 22:
			hebrewDay = 'כ"ב';
			break;
		case 23:
			hebrewDay = 'כ"ג';
			break;
		case 24:
			hebrewDay = 'כ"ד';
			break;
		case 25:
			hebrewDay = 'כ"ה';
			break;
		case 26:
			hebrewDay = 'כ"ו';
			break;
		case 27:
			hebrewDay = 'כ"ז';
			break;
		case 28:
			hebrewDay = 'כ"ח';
			break;
		case 29:
			hebrewDay = 'כ"ט';
			break;
		case 30:
			hebrewDay = "ל'";
			break;
	}
}

function getHebrewMonthLetters(){
	switch(hebrewMonth){
		case 1:
			hebrewMonth = "תשרי";
			break;
		case 2:
			hebrewMonth = "חשוון";
			break;
		case 3:
			hebrewMonth = "כסלו";
			break;
		case 4:
			hebrewMonth = "טבת";
			break;
		case 5:
			hebrewMonth = "שבט";
			break;
		case 6:
			if(isMeoobheret)
				hebrewMonth = "אדר א'";
			else
				hebrewMonth = "אדר";
			break;
		case 7:
			if(isMeoobheret)
				hebrewMonth = "אדר ב'";
			else
				hebrewMonth = "ניסן";
			break;
		case 8:
			if(isMeoobheret)
				hebrewMonth = "ניסן";
			else
				hebrewMonth = "אייר";
			break;
		case 9:
			if(isMeoobheret)
				hebrewMonth = "אייר";
			else
				hebrewMonth = "סיוון";
			break;
		case 10:
			if(isMeoobheret)
				hebrewMonth = "סיוון";
			else
				hebrewMonth = "תמוז";
			break;
		case 11:
			if(isMeoobheret)
				hebrewMonth = "תמוז";
			else
				hebrewMonth = "אב";
			break;
		case 12:
			if(isMeoobheret)
				hebrewMonth = "אב";
			else
				hebrewMonth = "אלול";
			break;
		case 13:
			hebrewMonth = "אלול";
			break;
	}
}

function getHebrewYearLetters(){
	var sum = 0;
	
	var tempYear = hebrewYear - 5000;
	hebrewYear = "ה";
	
	while(sum < tempYear){
		if(sum + 400 <= tempYear){
			hebrewYear += "ת";
			sum += 400;
		} else if(sum + 300 <= tempYear){
			hebrewYear += "ש";
			sum += 300;
		} else if(sum + 200 <= tempYear){
			hebrewYear += "ר";
			sum += 200;
		} else if(sum + 100 <= tempYear){
			hebrewYear += "ק";
			sum += 100;
		} else if(sum + 90 <= tempYear){
			hebrewYear += "צ";
			sum += 90;
		} else if(sum + 80 <= tempYear){
			hebrewYear += "פ";
			sum += 80;
		} else if(sum + 70 <= tempYear){
			hebrewYear += "ע";
			sum += 70;
		} else if(sum + 60 <= tempYear){
			hebrewYear += "ס";
			sum += 60;
		} else if(sum + 50 <= tempYear){
			hebrewYear += "נ";
			sum += 50;
		} else if(sum + 40 <= tempYear){
			hebrewYear += "מ";
			sum += 40;
		} else if(sum + 30 <= tempYear){
			hebrewYear += "ל";
			sum += 30;
		} else if(sum + 20 <= tempYear){
			hebrewYear += "כ";
			sum += 20;
		} else if(sum + 10 <= tempYear){
			hebrewYear += "י";
			sum += 10;
		} else if(sum + 9 <= tempYear){
			hebrewYear += "ט";
			sum += 9;
		} else if(sum + 8 <= tempYear){
			hebrewYear += "ח";
			sum += 8;
		} else if(sum + 7 <= tempYear){
			hebrewYear += "ז";
			sum += 7;
		} else if(sum + 6 <= tempYear){
			hebrewYear += "ו";
			sum += 6;
		} else if(sum + 5 <= tempYear){
			hebrewYear += "ה";
			sum += 5;
		} else if(sum + 4 <= tempYear){
			hebrewYear += "ד";
			sum += 4;
		} else if(sum + 3 <= tempYear){
			hebrewYear += "ג";
			sum += 3;
		} else if(sum + 2 <= tempYear){
			hebrewYear += "ב";
			sum += 2;
		} else if(sum + 1 <= tempYear){
			hebrewYear += "א";
			sum += 1;
		}
	}
	
	hebrewYear = hebrewYear.substring(0, hebrewYear.length - 1) + '"' + hebrewYear.charAt(hebrewYear.length - 1);
}

function getHebrewDate(){
	var countDays = 0;
	var tempMonth = roshHashanaMonth;
	var tempYear = hebrewYear - 3761;
	
	if(!(day == roshHashanaDay && month == roshHashanaMonth && year + 3761 == hebrewYear)){
		if(year + 3761 == hebrewYear && month == roshHashanaMonth && day > roshHashanaDay){
			countDays = day - roshHashanaDay;
		} else {
			tempMonth++;
			
			if(roshHashanaMonth == 9)
				countDays = 30 - roshHashanaDay ;
			else if(roshHashanaMonth == 10)
				countDays = 31 - roshHashanaDay;
			
			while(tempYear < year || (tempYear == year && tempMonth < month)){
				switch(tempMonth){
					case 1:
					case 3:
					case 5:
					case 7:
					case 8:
					case 10:
						countDays += 31;
						tempMonth++;
						break;
					case 4:
					case 6:
					case 9:
					case 11:
						countDays += 30;
						tempMonth++;
						break;
					case 2:
						if(tempYear % 4 == 0){
							if(tempYear % 100 == 0 && tempYear % 400 != 0)
								countDays += 28;
							else
								countDays += 29;
						} else {
							countDays += 28;
						}
						tempMonth++;
						break;
					case 12:
						countDays += 31;
						tempMonth = 1;
						tempYear++;
						break;
				}
			}
			
			countDays += day;
		}
	}
	
	
	
	
	while((countDays >= 30 && hebrewMonth % 2 == 1 && !isMeoobheret)
	|| (countDays >= 29 && hebrewMonth % 2 == 0 && !isMeoobheret)
	|| (missOrFull == "H" && countDays >= 30 && hebrewMonth == 2)
	|| (missOrFull == "K" && countDays >= 29 && hebrewMonth == 3)
	|| (((countDays >= 30 && hebrewMonth % 2 == 1) || (countDays >= 29 && hebrewMonth % 2 == 0)) && hebrewMonth < 6 && isMeoobheret)
	|| (isMeoobheret && hebrewMonth >= 6 && ((countDays >= 29 && hebrewMonth % 2 == 1) || (countDays >= 30 && hebrewMonth % 2 == 0)))){
		switch (hebrewMonth){
			case 2:
				if(missOrFull == "H")
					countDays -= 30;
				else
					countDays -= 29;
				hebrewMonth++;
				break;
			case 3:
				if(missOrFull == "K")
					countDays -= 29;
				else
					countDays -= 30;
				hebrewMonth++;
				break;
			case 12:
				if(isMeoobheret){
					countDays -= 30;
					hebrewMonth++;
				} else {
					countDays -= 29;
					hebrewMonth = 1;
				}
				break;
			case 13:
				countDays -= 29;
				hebrewMonth = 1;
				break;
			default:
				if(!isMeoobheret){
					if(hebrewMonth % 2 == 0)
						countDays -= 29;
					else
						countDays -= 30;
				} else {
					if(hebrewMonth < 6){
						if(hebrewMonth % 2 == 0)
							countDays -= 29;
						else
							countDays -= 30;
					} else {
						if(hebrewMonth % 2 == 0){
							countDays -= 30;
						} else {
							countDays -= 29;
						}
					}
				}
				
				hebrewMonth++;
				break;
		}
	}
	
	hebrewDay += countDays;
	
	getHebrewDayLetters();
	getHebrewMonthLetters();
	getHebrewYearLetters();
	
	document.getElementById("hebDate").innerHTML = hebrewDay + " " + hebrewMonth + " " + hebrewYear;
	localStorage["hebrewDay"] = hebrewDay;
	localStorage["hebrewMonth"] = hebrewMonth;
	localStorage["hebrewYear"] = hebrewYear;
}

//calc if Kislev is missing or Heshvan is full or neither
function getMissOrFullDays(){
	var roshHashanaDays;
	var roshHashanaHours;
	var roshHashanaParts;
	var roshHashanaRealDay;
	
	var nextRoshHashanaDays;
	var nextRoshHashanaHours;
	var nextRoshHashanaParts;
	var nextRoshHashanaRealDay;
	
	//first molad
	const firstMoladDays = 2;
	const firstMoladHours = 5;
	const firstMoladParts = 204;
	//difference of molads
	const diffMoladDays = 29;
	const diffMoladHours = 12;
	const diffMoladParts = 793;
	
	var meoobheret = hebrewYear % 19;
	var pastMonthes;
	var daysRegularYear = 354;
	
	if(isMeoobheret){
		daysRegularYear += 30;
	}

	//calc how many months have passed since first molad
	if(meoobheret <= 3)
		pastMonthes = 0;
	else if(meoobheret <= 6)
		pastMonthes = 1;
	else if(meoobheret <= 8)
		pastMonthes = 2;
	else if(meoobheret <= 11)
		pastMonthes = 3;
	else if(meoobheret <= 14)
		pastMonthes = 4;
	else if(meoobheret <= 17)
		pastMonthes = 5;
	else if(meoobheret <= 19)
		pastMonthes = 6;
	else
		pastMonthes = 7;
	
	pastMonthes += parseInt((hebrewYear - 1) / 19) * 7;
	
	pastMonthes += (hebrewYear - 1) * 12;


	//calc this year rosh hashana molad
	roshHashanaParts = diffMoladParts * pastMonthes + firstMoladParts;
	roshHashanaHours = diffMoladHours * pastMonthes + firstMoladHours;
	roshHashanaDays = diffMoladDays * pastMonthes + firstMoladDays;
	
	//calc the real day in the week of rosh hashana
	roshHashanaHours += parseInt(roshHashanaParts / 1080);
	roshHashanaParts = roshHashanaParts % 1080;
	roshHashanaDays += parseInt(roshHashanaHours / 24);
	roshHashanaHours = roshHashanaHours % 24;
	roshHashanaDays = roshHashanaDays % 7;
	
	if(roshHashanaDays == 0)
		roshHashanaDays = 7;
	
	roshHashanaRealDay = roshHashanaDays;
	
	if(roshHashanaHours >= 18)
		roshHashanaRealDay++;
	
	if(roshHashanaRealDay > 7)
		roshHashanaRealDay -= 7;
	
	if(roshHashanaRealDay == 1 || roshHashanaRealDay == 4 || roshHashanaRealDay == 6)
		roshHashanaRealDay++;
		
	//calc next year rosh hashana molad
	if(isMeoobheret){
		nextRoshHashanaParts = diffMoladParts * 13 + roshHashanaParts;
		nextRoshHashanaHours = diffMoladHours * 13 + roshHashanaHours;
		nextRoshHashanaDays = diffMoladDays * 13 + roshHashanaDays;
	} else {
		nextRoshHashanaParts = diffMoladParts * 12 + roshHashanaParts;
		nextRoshHashanaHours = diffMoladHours * 12 + roshHashanaHours;
		nextRoshHashanaDays = diffMoladDays * 12 + roshHashanaDays;
	}
	
	//calc the real day in the week of next rosh hashana
	nextRoshHashanaHours += parseInt(nextRoshHashanaParts / 1080);
	nextRoshHashanaParts = nextRoshHashanaParts % 1080;
	nextRoshHashanaDays += parseInt(nextRoshHashanaHours / 24);
	nextRoshHashanaHours = nextRoshHashanaHours % 24;
	nextRoshHashanaDays = nextRoshHashanaDays % 7;
	
	if(nextRoshHashanaDays == 0)
		nextRoshHashanaDays = 7;
	
	nextRoshHashanaRealDay = nextRoshHashanaDays;
	
	if(nextRoshHashanaHours > 18)
		nextRoshHashanaRealDay++;
	
	if(nextRoshHashanaRealDay > 7)
		nextRoshHashanaRealDay -= 7;
	
	if(nextRoshHashanaRealDay == 1 || nextRoshHashanaRealDay == 4 || nextRoshHashanaRealDay ==6)
		nextRoshHashanaRealDay++;
	
	
	//calc which month is missing or full or nothing
	if((roshHashanaRealDay + daysRegularYear) % 7 > nextRoshHashanaRealDay){
		missOrFull = "K"; //Kislev is missing a day
	}else if((roshHashanaRealDay + daysRegularYear) % 7 < nextRoshHashanaRealDay){
		missOrFull = "H"; //Heshvan get another day
	}
	else{
		missOrFull = "R"; //Regular year
	}
}

function getIsMeoobheret(){
	var meoobheret = hebrewYear % 19;
	
	isMeoobheret = meoobheret == 3 || meoobheret == 6 || meoobheret == 8 || meoobheret == 11 || meoobheret == 14 || meoobheret == 17 || meoobheret == 19;
}

function getHebrewYear(){
	hebrewYear = parseInt(year) + 3760;
	
	if(!beforeRoshHashana){
		hebrewYear += 1;
	} else {
		year--;
		getPassover();
		getRoshHashana();
		year++;
	}
		
	
}

function isBeforeRoshHashana(){
	if((parseInt(localStorage["hour"]) > parseInt(localStorage["sunset"].split(":")[0])) || (parseInt(localStorage["hour"]) == parseInt(localStorage["sunset"].split(":")[0]) && parseInt(localStorage["min"]) >= parseInt(localStorage["sunset"].split(":")[1]))){
		getNextDay();
		calcRiseSet(true, "sunrise");
		calcRiseSet(false, "sunset");
	}
	
	if(month < roshHashanaMonth)
		beforeRoshHashana = true;
	else if(month == roshHashanaMonth && day < roshHashanaDay)
		beforeRoshHashana = true;
	else
		beforeRoshHashana = false;
}

function getNextDay(){
	day++;
	
	if(day > 31 && (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10)){
		day = 1;
		month++;
	} else if(day > 30 && (month == 4 || month == 6 || month == 9 || month == 11)){
		day = 1;
		month++;
	} else if(month == 2){
		if(tempYear % 4 == 0){
			if(tempYear % 100 == 0 && tempYear % 400 != 0)
				if(day > 28){
					day = 1;
					month++;
				}
			else{
				if(day > 29){
					day = 1;
					month++;
				}
			}
		} else {
			if(day > 28){
				day = 1;
				month++;
			}
		}
	} else if(month == 12 && day > 31){
		day = 1;
		month = 1;
		year++;
	}
	
	localStorage["day"] = day;
	localStorage["month"] = month;
	localStorage["year"] = year;
}

function getRoshHashana(){
	var daysBetween = 163;
	
	if(passoverMonth == 3)
		daysBetween -= 31 - passover;
	else
		daysBetween -= 30 - passover;
	roshHashana = 1;
	roshHashanaMonth = passoverMonth + 1;
	
	while((daysBetween > 31 && (roshHashanaMonth == 5 || roshHashanaMonth == 7 || roshHashanaMonth == 8 || roshHashanaMonth == 10)) || (daysBetween > 30 && (roshHashanaMonth == 4 || roshHashanaMonth == 6 || roshHashanaMonth == 9))){
		switch(roshHashanaMonth){
			case 5:
			case 7:
			case 8:
			case 10:
				daysBetween -= 31;
				break;
			case 4:
			case 6:
			case 9:
				daysBetween -= 30;
				break;
		}
		roshHashanaMonth++;
	}
	
	roshHashanaDay = daysBetween;
}

function getPassover(){
	//done according to https://he.wikipedia.org/wiki/%D7%94%D7%9C%D7%95%D7%97_%D7%94%D7%99%D7%95%D7%9C%D7%99%D7%90%D7%A0%D7%99
	passoverMonth = 3;
	var A = parseInt(year) + 3760;//tizen.time.getCurrentDateTime().getFullYear() + 3760;
	var a = (12 * A + 17) % 19;
	var b = A % 4;
	var x = 32 + (4343/98496) + (1 + 272953/492480) * a + b / 4 - (313 / 98496) * A;
	var c = (3 * A + 5 * b + parseInt(x / 1) + 5) % 7;
	
	if(c == 2 || c == 4 || c == 6){
		passover = 1 + parseInt(x / 1);
	} else if (c == 1 && a > 6 && x % 1 >= (1367/2160)){
		passover = 2 + parseInt(x / 1);
	} else if(c == 0 && a > 11 && x % 1 >= (23269 / 25920)){
		passover = 1 + parseInt(x / 1);
	} else 
		passover = parseInt(x / 1);

	passover += 13;
	
	if(passover > 31){
		passover -= 31;
		passoverMonth += 1;
	}
	
	
}

//gets curent year, month, day and time
function getYear(){
	var d = new Date();
	year = parseInt(document.getElementById("year").value);
	localStorage["year"] = year;
	day = parseInt(document.getElementById("day").value);
	month = parseInt(document.getElementById("month").value);
	localStorage["day"] = document.getElementById("day").value;
	localStorage["month"] = document.getElementById("month").value;
	
	var time = (d.getHours()) + ":" + (d.getMinutes());
	localStorage["hour"] = parseInt(time.split(":")[0]);
	localStorage["min"] = parseInt(time.split(":")[1]);
}

var cities = [{City:"Haifa", lat:"32.81841", lon:"34.9885"},
              {City:"Ashdod", lat:"31.79213", lon:"34.64966"},
              {City:"Tel Aviv", lat:"32.08088", lon:"34.78057"},
              {City:"Netanya", lat:"32.33291", lon:"34.85992"},
              {City:"Kfar Saba", lat:"32.175", lon:"34.90694"},
              {City:"Hadera", lat:"32.44192", lon:"34.9039"},
              {City:"Rishon Lsiyon", lat:"31.97102", lon:"34.78939"},
              {City:"Ashkelon", lat:"31.66926", lon:"34.57149"},
              {City:"Tigrah", lat:"32.08707", lon:"34.88747"},
              {City:"Nazareth", lat:"32.70056", lon:"35.29722"},
              {City:"Beersheba", lat:"31.25181", lon:"34.7913"},
              {City:"Acre", lat:"32.92814", lon:"35.07647"},
              {City:"Eilat", lat:"29.55805", lon:"34.94821"},
              {City:"Afula", lat:"32.60907", lon:"35.2892"},
              {City:"H̱olon", lat:"32.01034", lon:"34.77918"},
              {City:"Bnei Brak", lat:"32.08074", lon:"34.8338"},
              {City:"Nahariyya", lat:"33.00892", lon:"35.09814"},
              {City:"Arad", lat:"31.25882", lon:"35.21282"}
              ];

      function calcRiseSet(isRise, id){
      	var isSummer = false;
      	
      	var lat = cities[localStorage["city"]]["lat"];
      	var lon = cities[localStorage["city"]]["lon"];
      	
      	const toRad = Math.PI / 180;
      	const toDeg = 180 / Math.PI;
      	const zenith = 90.8;
      	
      	var day = parseInt(localStorage["day"]);
      	var month = parseInt(localStorage["month"]);
      	var year = parseInt(localStorage["year"]);
      	
      	if(month > 3 && month < 10)
      		isSummer = true;
      	else if(month == 3){
      		var d = new Date();
      		d.setFullYear(year, 2, 31);
      		var fridayBeforeSunday = d.getDate() - d.getDay() - 2;
      		
      		if(day > fridayBeforeSunday)
      			isSummer = true;
      	} else if(month == 10){
      		var d = new Date();
      		d.setFullYear(year, 9, 31);
      		var lastSunday = d.getDate() - d.getDay();
      		
      		if(day <= lastSunday)
      			isSummer = true;
      	}
      	
      	var N1 = Math.floor(275 * month / 9);
      	var N2 = Math.floor((month + 9) / 12);
      	var N3 = (1 + Math.floor((year - 4 * Math.floor(year / 4) + 2) / 3));
      	var N = N1 - (N2 * N3) + day - 30;
      	
      	var lngHour = lon / 15;
      	var t;
      	
      	if(isRise)
      		t = N + ((6 - lngHour) / 24);
      	else
      		t = N + ((18 - lngHour) / 24);
      	
      	
      	var M = (0.9856 * t) - 3.289;
      	
      	var L = M + (1.916 * Math.sin(toRad * M)) + (0.020 * Math.sin(2 * M * toRad)) + 282.634;
      	while(L > 360)
      		L -= 360;
      	while(L < 0)
      		L += 360;
      	
      	var RA = (1/toRad) * Math.atan(0.91764 * Math.tan(L * toRad));
      	while(RA > 360)
      		RA -= 360;
      	while(RA < 0)
      		RA += 360;
      	
      	var Lquadrant = (Math.floor(L / 90)) * 90;
      	var RAquadrant = (Math.floor(RA / 90)) * 90;
      	RA = RA + (Lquadrant - RAquadrant);
      	RA = RA / 15;
      	
      	var sinDec = 0.39782 * Math.sin(L * toRad);
      	var cosDec = Math.cos(Math.asin(sinDec));
      	
      	var cosH = (Math.cos(zenith * toRad) - (sinDec * Math.sin(lat * toRad))) / (cosDec * Math.cos(lat * toRad));
      	if(cosH > 1)
      		return "Sun Not Rising";
      	
      	if(cosH < -1)
      		return "Sum Not Setting";
      	
      	
      	var H;
      	
      	if(isRise)
      		H = 360 - (1 / toRad) * Math.acos(cosH);
      	else
      		H = (1 / toRad) * Math.acos(cosH);
      	
      	H = H / 15;
      	
      	var T = H + RA - (0.06571 * t) - 6.622;
      	
      	var UT = T - lngHour;
      	while(UT > 24)
      		UT -= 24;
      	while(UT < 0)
      		UT += 24;
      	
      	var hr = parseInt(UT) + 2;
      	while(hr > 24)
      		hr -= 24;
      	while(hr < 0)
      		hr += 24;
      	
      	if(isSummer)
      		hr += 1;
      	
      	var min = Math.round((UT - parseInt(UT)) * 60);
		
		if(min == 60){
			hr += 1;
			min = 0;
		}
		if(min <= 9)
		  localStorage[id] = hr + ":0" + min;
	  	else
		  localStorage[id] = hr + ":" + min;
      }
