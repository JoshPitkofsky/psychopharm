var Imipramine ="Imipramine (Tofranil)";
var Desipramine ="Desipramine (Norpramin)";
var Trimipramine ="Trimipramine (Surmontil)";
var Protriptyline ="Protriptyline (Vivactil)";
var Nortriptyline ="Nortriptyline (Pamelor, Aventil)";
var Amitripyline ="Amitripyline (Elavil)";
var Doxepin ="Doxepin (Adapin, Sinequan)";
var Clomipramine ="Clomipramine (Anafranil)";
var Amoxapine ="Amoxapine (Asendin)";
var Maprotiline ="Maprotiline (Ludiomil)";
var Trazodone="Trazodone (Desyrel, Oleptro)";
var Bupropion ="Bupropion (Wellbutrin)";
var Venlafaxine ="Venlafaxine (Effexor)";
var Desvenlafaxine ="Desvenlafaxine (Pristiq)";
var Fluoxetine ="Fluoxetine (Prozac)";
var Sertraline ="Sertraline (Zoloft)";
var Paroxetine ="Paroxetine (Paxil)";
var Citalopram ="Citalopram (Celexa)";
var Fluvoxamine ="Fluvoxamine (Luvox)";
var Escitalopram ="Escitalopram (Lexapro)";
var Vilazodone ="Vilazodone (Viibryd)";
var Vortioxetine ="Vortioxetine (Brintellix)";
var Nefazodone ="Nefazodone (Serzone)";
var Mirtazapine ="Mirtazapine (Remeron)";
var Duloxetine ="Duloxetine (Cymbalta)";
var Phenelzine ="Phenelzine (Nardil)";
var Isocarboxazid ="Isocarboxazid (Marplan, Enerzer)";
var Tranylcypromine ="Tranylcypromine (Parnate)";
var Selegiline ="Selegiline (Emsam)";
var Atomoxetine ="Atomoxetine (Strattera)";
var Reboxetine ="Reboxetine (Vestra)";
var Modafinil ="Modafinil";
var Lamotrigine ="Lamotrigine (Lamictal)";
var quetiapine ="quetiapine (Seroquel)";
var Omega_3 ="Omega-3";
var Folate ="Folate";
var s_adenosylmethionine = "s-adenosylmethionine";
var st_johns_wort ="st.john's wort";


var drugs = {
Imipramine:0,
Desipramine:0,
Trimipramine:0,
Protriptyline:0,
Nortriptyline:0,
Amitripyline:0,
Doxepin:0,
Clomipramine:0,
//Amoxapine Generally not first choice, overdose can be fatal, slightly better at relieving agitation and anxiety than imipramine
Amoxapine: 2,
//Can cause seizures, generally not antidepressant of first choice
Maprotiline: 2,
Trazodone:0,
Bupropion:0,
Venlafaxine:0,
Desvenlafaxine:0,
Fluoxetine:0,
Sertraline:0,
Paroxetine:0,
Citalopram:0,
Fluvoxamine:0,
Escitalopram:0,
Vilazodone:0,
Vortioxetine:0,
Nefazodone:0,
Mirtazapine:0,
Duloxetine:0,
Phenelzine:0,
Isocarboxazid:0,
Tranylcypromine:0,
Selegiline:0,
Atomoxetine:0,
Reboxetine:0,
Modafinil:0,
Lamotrigine:0,
quetiapine:0,
Omega_3:0,
Folate:0,
s_adenosylmethionine:0,
st_johns_wort:0
}
sortList();
function sortList(){
	var sortable = [];
	for (var drug in drugs)
	    sortable.push([drug, drugs[drug]])
		sortable.sort(function(a, b) {
	    return a[1] - b[1]
	})
	var html = "";
	for (var i =0; i < sortable.length; i++) {
	    html += "<li><a href=\"#\" class=\"ui-btn ui-btn-icon-right ui-icon-carat-r\">" + eval(sortable[i][0])+ "</a></li>";
	}
	document.getElementById("medlist").innerHTML = html;
}

function antichole(){
/*	Make drug specific changes here
	Addition means worse choice for treating patient
	Subtraction means better choice for treating patient */
	var checkedValue = document.getElementById('antichol').checked;
	if(checkedValue){
	drugs.Imipramine = drugs.Imipramine + 1;
	drugs.Desipramine = drugs.Desipramine + 2;
	drugs.Trimipramine = drugs.Trimipramine + 1;
	drugs.Protriptyline = drugs.Protriptyline + 1;
	drugs.Nortriptyline = drugs.Nortriptyline + 1;
	drugs.Amitripyline = drugs.Amitripyline + 1;
	drugs.Doxepin = drugs.Doxepin + 1;
	drugs.Clomipramine = drugs.Clomipramine + 1;
	sortList();
	}
	else{
	drugs.Imipramine = drugs.Imipramine - 1;
	drugs.Desipramine = drugs.Desipramine - 2;
	drugs.Trimipramine = drugs.Trimipramine - 1;
	drugs.Protriptyline = drugs.Protriptyline - 1;
	drugs.Nortriptyline = drugs.Nortriptyline - 1;
	drugs.Amitripyline = drugs.Amitripyline - 1;
	drugs.Doxepin = drugs.Doxepin - 1;
	drugs.Clomipramine = drugs.Clomipramine - 1;
	sortList();

	}

}

function liver(){
	var checkedValue = document.getElementById('liver').checked;
	if(checkedValue){
	drugs.Nefazodone = drugs.Nefazodone + 2;
	sortList();
	}
	else{
	drugs.Nefazodone = drugs.Nefazodone - 2;
	sortList();
	}
}

function tcaHistory(){
	var checkedValue = document.getElementById('tcaHistory').checked;
	if(checkedValue){
	drugs.Imipramine = drugs.Imipramine - 1;
	drugs.Desipramine = drugs.Desipramine - 2;
	drugs.Trimipramine = drugs.Trimipramine - 1;
	drugs.Protriptyline = drugs.Protriptyline - 1;
	drugs.Nortriptyline = drugs.Nortriptyline - 2;
	drugs.Amitripyline = drugs.Amitripyline - 1;
	drugs.Doxepin = drugs.Doxepin - 1;
	drugs.Clomipramine = drugs.Clomipramine - 1;
	sortList();
	}
	else{
	drugs.Imipramine = drugs.Imipramine + 1;
	drugs.Desipramine = drugs.Desipramine + 2;
	drugs.Trimipramine = drugs.Trimipramine + 1;
	drugs.Protriptyline = drugs.Protriptyline + 1;
	drugs.Nortriptyline = drugs.Nortriptyline + 2;
	drugs.Amitripyline = drugs.Amitripyline + 1;
	drugs.Doxepin = drugs.Doxepin + 1;
	drugs.Clomipramine = drugs.Clomipramine + 1;
	sortList();
	}
}

function insomnia(){
	var checkedValue = document.getElementById('insomnia').checked;
	if(checkedValue){
	drugs.Doxepin = drugs.Doxepin - 2;
	drugs.Amitripyline = drugs.Amitripyline - 2;
	sortList();
	}
	else{
	drugs.Doxepin = drugs.Doxepin + 2;
	drugs.Amitripyline = drugs.Amitripyline + 2;
	sortList();
	}
}




