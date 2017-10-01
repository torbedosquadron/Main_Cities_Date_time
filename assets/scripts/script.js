function tick() {
	var unix_time = Date.now();
	var current_time = new Date();
	var diff = current_time.getTimezoneOffset();
	var diff_miliseconds = diff*60*1000;
	var current_utc = unix_time + diff_miliseconds;

	//define an cites offset array
	var UTC_VA = document.getElementById("UTC_VA");
	var utc_time = new Date(current_utc).toString('ddd, d MMM yyyy hh:mm:ss tt');
	UTC_VA.innerHTML = utc_time;


//index.html
	var Los_Angeles_T_VA= document.getElementById("Los_Angeles_T_VA");
	var Los_Angeles_D_VA= document.getElementById("Los_Angeles_D_VA");
	var Los_Angeles_CT = current_utc + (-7*60*60*1000);
	var Los_Angeles_Time = new Date(Los_Angeles_CT).toString('hh:mm:ss tt');
	var Los_Angeles_Date = new Date(Los_Angeles_CT).toString('ddd, d MMM yyyy');
	Los_Angeles_T_VA.innerHTML = Los_Angeles_Time; 
	Los_Angeles_D_VA.innerHTML = Los_Angeles_Date; 


	var New_York_T_VA= document.getElementById("New_York_T_VA");
	var New_York_D_VA= document.getElementById("New_York_D_VA");
	var New_York_CT = current_utc + (-4*60*60*1000);
	var New_York_Time = new Date(New_York_CT).toString('hh:mm:ss tt');
	var New_York_Date = new Date(New_York_CT).toString('ddd, d MMM yyyy');
	New_York_T_VA.innerHTML = New_York_Time; 
	New_York_D_VA.innerHTML = New_York_Date; 


	var Sau_Paulo_T_VA= document.getElementById("Sau_Paulo_T_VA");
	var Sau_Paulo_D_VA= document.getElementById("Sau_Paulo_D_VA");
	var Sau_Paulo_CT = current_utc + (-3*60*60*1000);
	var Sau_Paulo_Time = new Date(Sau_Paulo_CT).toString('hh:mm:ss tt');
	var Sau_Paulo_Date = new Date(Sau_Paulo_CT).toString('ddd, d MMM yyyy');
	Sau_Paulo_T_VA.innerHTML = Sau_Paulo_Time; 
	Sau_Paulo_D_VA.innerHTML = Sau_Paulo_Date; 

	var London_T_VA= document.getElementById("London_T_VA");
	var London_D_VA= document.getElementById("London_D_VA");
	var London_CT = current_utc + (0*60*60*1000);
	var London_Time = new Date(London_CT).toString('hh:mm:ss tt');
	var London_Date = new Date(London_CT).toString('ddd, d MMM yyyy');
	London_T_VA.innerHTML = London_Time; 
	London_D_VA.innerHTML = London_Date; 


	var Cairo_T_VA= document.getElementById("Cairo_T_VA");
	var Cairo_D_VA= document.getElementById("Cairo_D_VA");
	var Cairo_CT = current_utc + (2*60*60*1000);
	var Cairo_Time = new Date(Cairo_CT).toString('hh:mm:ss tt');
	var Cairo_Date = new Date(Cairo_CT).toString('ddd, d MMM yyyy');
	Cairo_T_VA.innerHTML = Cairo_Time; 
	Cairo_D_VA.innerHTML = Cairo_Date; 


	var Mosco_T_VA= document.getElementById("Mosco_T_VA");
	var Mosco_D_VA= document.getElementById("Mosco_D_VA");
	var Mosco_CT = current_utc + (4*60*60*1000);
	var Mosco_Time = new Date(Mosco_CT).toString('hh:mm:ss tt');
	var Mosco_Date = new Date(Mosco_CT).toString('ddd, d MMM yyyy');
	Mosco_T_VA.innerHTML = Mosco_Time; 
	Mosco_D_VA.innerHTML = Mosco_Date; 


	var Mumbia_T_VA= document.getElementById("Mumbia_T_VA");
	var Mumbia_D_VA= document.getElementById("Mumbia_D_VA");
	var Mumbia_CT = current_utc + (5.5*60*60*1000);
	var Mumbia_Time = new Date(Mumbia_CT).toString('hh:mm:ss tt');
	var Mumbia_Date = new Date(Mumbia_CT).toString('ddd, d MMM yyyy');
	Mumbia_T_VA.innerHTML = Mumbia_Time; 
	Mumbia_D_VA.innerHTML = Mumbia_Date;


	var Beijing_T_VA= document.getElementById("Beijing_T_VA");
	var Beijing_D_VA= document.getElementById("Beijing_D_VA");
	var Beijing_CT = current_utc + (8*60*60*1000);
	var Beijing_Time = new Date(Beijing_CT).toString('hh:mm:ss tt');
	var Beijing_Date = new Date(Beijing_CT).toString('ddd, d MMM yyyy');
	Beijing_T_VA.innerHTML = Beijing_Time; 
	Beijing_D_VA.innerHTML = Beijing_Date;


	var Tokyo_T_VA= document.getElementById("Tokyo_T_VA");
	var Tokyo_D_VA= document.getElementById("Tokyo_D_VA");
	var Tokyo_CT = current_utc + (9*60*60*1000);
	var Tokyo_Time = new Date(Tokyo_CT).toString('hh:mm:ss tt');
	var Tokyo_Date = new Date(Tokyo_CT).toString('ddd, d MMM yyyy');
	Tokyo_T_VA.innerHTML = Tokyo_Time; 
	Tokyo_D_VA.innerHTML = Tokyo_Date;

	var Sydeny_T_VA= document.getElementById("Sydeny_T_VA");
	var Sydeny_D_VA= document.getElementById("Sydeny_D_VA");
	var Sydeny_CT = current_utc + (10*60*60*1000);
	var Sydeny_Time = new Date(Sydeny_CT).toString('hh:mm:ss tt');
	var Sydeny_Date = new Date(Sydeny_CT).toString('ddd, d MMM yyyy');
	Sydeny_T_VA.innerHTML = Sydeny_Time; 
	Sydeny_D_VA.innerHTML = Sydeny_Date;
}

function get_current_time() {
	 setInterval(tick, 1000);
}

window.onload = function () {
	get_current_time();
};