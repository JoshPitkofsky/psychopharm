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
var Quetiapine ="Quetiapine (Seroquel)";
var Omega_3 ="Omega-3";
var Folate ="Folate";
var s_adenosylmethionine = "s-adenosylmethionine";
var st_johns_wort ="st.john's wort";
var Aripiprazole = "Aripiprazole (Abilify)";
var Fluoxetine_Olanzapine = "Fluoxetine / Olanzapine (Symbyax)";


var drugs = {
//currently generally in order of best choice
Sertraline:-1,
Escitalopram:-1,
Citalopram:-1,
Mirtazapine:-1,
Venlafaxine:-1,
Paroxetine:-1,
Bupropion:-1,
Fluoxetine:-1,
Fluvoxamine:-1,
Duloxetine:-1,
Nortriptyline:-1,
Desipramine:-1,
Imipramine:0,
Trimipramine:0,
Protriptyline:0,
Amitripyline:0,
Doxepin:0,
Clomipramine:0,
//Amoxapine Generally not first choice, overdose can be fatal, slightly better at relieving agitation and anxiety than imipramine
Amoxapine: 2,
//Can cause seizures, generally not antidepressant of first choice
Maprotiline: 2,
Trazodone:1,
Aripiprazole:0,
Desvenlafaxine:0,
Vilazodone:0,
Vortioxetine:0,
Nefazodone:0,
Phenelzine:0,
Isocarboxazid:0,
Tranylcypromine:0,
Fluoxetine_Olanzapine:0,
Selegiline:0,
Atomoxetine:0,
Reboxetine:0,
Modafinil:0,
Lamotrigine:0,
Quetiapine:0,
Omega_3:5,
Folate:5,
s_adenosylmethionine:5,
st_johns_wort:5
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
	drugs.Venlafaxine = drugs.Venlafaxine + 2;
	drugs.Duloxetine = drugs.Duloxetine + 2;
	drugs.Trazodone = drugs.Trazodone + 2;
	drugs.Sertraline = drugs.Sertraline + 2;
	sortList();
	}
	else{
	drugs.Nefazodone = drugs.Nefazodone - 2;
	drugs.Venlafaxine = drugs.Venlafaxine - 2;
	drugs.Duloxetine = drugs.Duloxetine - 2;
	drugs.Trazodone = drugs.Trazodone - 2;
	drugs.Sertraline = drugs.Sertraline - 2;
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
	drugs.Doxepin = drugs.Doxepin - 3;
	drugs.Amitripyline = drugs.Amitripyline - 3;
	drugs.Mirtazapine = drugs.Mirtazapine - 2;
	drugs.Quetiapine = drugs.Quetiapine - 2;
	sortList();
	}
	else{
	drugs.Doxepin = drugs.Doxepin + 3;
	drugs.Amitripyline = drugs.Amitripyline + 3;
	drugs.Mirtazapine = drugs.Mirtazapine + 2;
	drugs.Quetiapine = drugs.Quetiapine + 2;
	sortList();
	}
}

function age(){
	var checkedValue = document.getElementById('age').checked;
	if(checkedValue){
	drugs.Imipramine = drugs.Imipramine + 2;
	drugs.Desipramine = drugs.Desipramine + 4;
	drugs.Trimipramine = drugs.Trimipramine + 2;
	drugs.Protriptyline = drugs.Protriptyline + 2;
	drugs.Nortriptyline = drugs.Nortriptyline + 3;
	drugs.Amitripyline = drugs.Amitripyline + 2;
	drugs.Doxepin = drugs.Doxepin + 2;
	drugs.Clomipramine = drugs.Clomipramine + 2;
	sortList();
	}
	else{
	drugs.Imipramine = drugs.Imipramine - 2;
	// desipramine 12 cases of sudden death in children receiving for adhd or depression
	drugs.Desipramine = drugs.Desipramine - 4;
	drugs.Trimipramine = drugs.Trimipramine - 2;
	drugs.Protriptyline = drugs.Protriptyline - 2;
	drugs.Nortriptyline = drugs.Nortriptyline - 3;
	drugs.Amitripyline = drugs.Amitripyline - 2;
	drugs.Doxepin = drugs.Doxepin - 2;
	drugs.Clomipramine = drugs.Clomipramine - 2;
	sortList();
	}
}

function panic(){
	var checkedValue = document.getElementById('panic').checked;
	if(checkedValue){
	drugs.Bupropion = drugs.Bupropion + 3;
	drugs.Fluvoxamine = drugs.Fluvoxamine - 2;
	drugs.Fluoxetine = drugs.Fluoxetine - 2;
	drugs.Sertraline = drugs.Sertraline - 1;
	drugs.Paroxetine = drugs.Paroxetine - 2;
	drugs.Citalopram = drugs.Citalopram - 1;
	drugs.Escitalopram = drugs.Escitalopram - 1;
	drugs.Vilazodone = drugs.Vilazodone - 1;
	drugs.Vortioxetine = drugs.Vortioxetine - 1;
	sortList();
	}
	else{
	drugs.Bupropion = drugs.Bupropion - 3;
	drugs.Fluvoxamine = drugs.Fluvoxamine + 2;
	drugs.Fluoxetine = drugs.Fluoxetine + 2;
	drugs.Sertraline = drugs.Sertraline + 1;
	drugs.Paroxetine = drugs.Paroxetine + 2;
	drugs.Citalopram = drugs.Citalopram + 1;
	drugs.Escitalopram = drugs.Escitalopram + 1;
	drugs.Vilazodone = drugs.Vilazodone + 1;
	drugs.Vortioxetine = drugs.Vortioxetine + 1;
	sortList();
	}
}

function adhd(){
	var checkedValue = document.getElementById('adhd').checked;
	if(checkedValue){
	drugs.Atomoxetine = drugs.Atomoxetine - 2;
	sortList();
	}
	else{
	drugs.Atomoxetine = drugs.Atomoxetine + 2;
	sortList();
	}
}

function nasal(){
	var checkedValue = document.getElementById('nasal').checked;
	if(checkedValue){
	drugs.Phenelzine = drugs.Phenelzine + 2;
	drugs.Isocarboxazid = drugs.Isocarboxazid + 2;
	drugs.Tranylcypromine = drugs.Tranylcypromine + 2;
	sortList();
	}
	else{
	drugs.Phenelzine = drugs.Phenelzine - 2;
	drugs.Isocarboxazid = drugs.Isocarboxazid - 2;
	drugs.Tranylcypromine = drugs.Tranylcypromine - 2;
	sortList();
	}
}

function diet(){
	var checkedValue = document.getElementById('diet').checked;
	if(checkedValue){
	drugs.Phenelzine = drugs.Phenelzine + 2;
	drugs.Isocarboxazid = drugs.Isocarboxazid + 2;
	drugs.Tranylcypromine = drugs.Tranylcypromine + 2;
	sortList();
	}
	else{
	drugs.Phenelzine = drugs.Phenelzine - 2;
	drugs.Isocarboxazid = drugs.Isocarboxazid - 2;
	drugs.Tranylcypromine = drugs.Tranylcypromine - 2;
	sortList();
	}
}

function atypical(){
	var checkedValue = document.getElementById('atypical').checked;
	if(checkedValue){
	drugs.Clomipramine = drugs.Clomipramine - 2;
	drugs.Phenelzine = drugs.Phenelzine - 2;
	drugs.Isocarboxazid = drugs.Isocarboxazid - 2;
	drugs.Tranylcypromine = drugs.Tranylcypromine - 2;
	drugs.Selegiline = drugs.Selegiline - 2;
	drugs.Venlafaxine = drugs.Venlafaxine + 2;
	drugs.Vortioxetine = drugs.Vortioxetine + 2;
	drugs.Duloxetine = drugs.Duloxetine + 2;

	sortList();
	}
	else{
	drugs.Clomipramine = drugs.Clomipramine +2;
	drugs.Phenelzine = drugs.Phenelzine + 2;
	drugs.Isocarboxazid = drugs.Isocarboxazid + 2;
	drugs.Tranylcypromine = drugs.Tranylcypromine + 2;
	drugs.Selegiline = drugs.Selegiline + 2;
	drugs.Venlafaxine = drugs.Venlafaxine - 2;
	drugs.Vortioxetine = drugs.Vortioxetine - 2;
	drugs.Duloxetine = drugs.Duloxetine - 2;


	sortList();
	}
}

function breastfeeding(){
	var checkedValue = document.getElementById('breastfeeding').checked;
	if(checkedValue){
	drugs.Escitalopram = drugs.Escitalopram + 2;
	drugs.Citalopram = drugs.Citalopram + 2;
	drugs.Fluoxetine = drugs.Fluoxetine + 2;
	sortList();
	}
	else{
	drugs.Escitalopram = drugs.Escitalopram - 2;
	drugs.Citalopram = drugs.Citalopram - 2;
	drugs.Fluoxetine = drugs.Fluoxetine - 2;
	sortList();
	}
}

function seizures(){
	var checkedValue = document.getElementById('seizures').checked;
	if(checkedValue){
	drugs.Bupropion = drugs.Bupropion + 2;
	sortList();
	}
	else{
	drugs.Bupropion = drugs.Bupropion - 2;
	sortList();
	}
}


function weather(){
	var checkedValue = document.getElementById('weather').checked;
	if(checkedValue){
	drugs.Bupropion = drugs.Bupropion - 1;
	drugs.Modafinil = drugs.Modafinil - 2;
	sortList();
	}
	else{
	drugs.Bupropion = drugs.Bupropion + 1;
	drugs.Modafinil = drugs.Modafinil +2;
	sortList();
	}
}

function bloodpressure(){
	var checkedValue = document.getElementById('bloodpressure').checked;
	if(checkedValue){
	drugs.Venlafaxine = drugs.Venlafaxine + 2;
	drugs.Duloxetine = drugs.Duloxetine + 2;
	drugs.Desvenlafaxine = drugs.Desvenlafaxine + 2;
	sortList();
	}
	else{
	drugs.Venlafaxine = drugs.Venlafaxine - 2;
	drugs.Duloxetine = drugs.Duloxetine - 2;
	drugs.Desvenlafaxine = drugs.Desvenlafaxine - 2;
	sortList();
	}
}

function alcoholdependence(){
	var checkedValue = document.getElementById('alcoholdependence').checked;
	if(checkedValue){
	drugs.Escitalopram = drugs.Escitalopram - 2;
	drugs.Aripiprazole = drugs.Aripiprazole - 2;
	sortList();
	}
	else{
	drugs.Escitalopram = drugs.Escitalopram + 2;
	drugs.Aripiprazole = drugs.Aripiprazole + 2;
	sortList();
	}
}

function multiplemedications(){
	var checkedValue = document.getElementById('multiplemedications').checked;
	if(checkedValue){
	drugs.Escitalopram = drugs.Escitalopram - 2;
	drugs.Citalopram = drugs.Citalopram - 2;
	drugs.Selegiline = drugs.Selegiline - 2;
	drugs.Fluoxetine = drugs.Fluoxetine + 2;
	drugs.Fluvoxamine = drugs.Fluvoxamine + 2;
	drugs.Sertraline = drugs.Sertraline + 2;
	drugs.Paroxetine = drugs.Paroxetine + 2;
	sortList();
	}
	else{
	drugs.Escitalopram = drugs.Escitalopram + 2;
	drugs.Citalopram = drugs.Citalopram + 2;
	drugs.Selegiline = drugs.Selegiline + 2;
	drugs.Fluoxetine = drugs.Fluoxetine - 2;
	drugs.Fluvoxamine = drugs.Fluvoxamine - 2;
	drugs.Sertraline = drugs.Sertraline - 2;
	drugs.Paroxetine = drugs.Paroxetine - 2;
	sortList();
	}
}

function treatmentresistant(){
	var checkedValue = document.getElementById('treatmentresistant').checked;
	if(checkedValue){
	drugs.Fluoxetine_Olanzapine = drugs.Fluoxetine_Olanzapine - 2;
	drugs.Quetiapine = drugs.Quetiapine - 2;
	drugs.Aripiprazole = drugs.Aripiprazole - 2;
	sortList();
	}
	else{
	drugs.Fluoxetine_Olanzapine = drugs.Fluoxetine_Olanzapine + 2;
	drugs.Quetiapine = drugs.Quetiapine + 2;
	drugs.Aripiprazole = drugs.Aripiprazole + 2;
	sortList();
	}
}


function weight(){
	var checkedValue = document.getElementById('weight').checked;
	if(checkedValue){
	drugs.Mirtazapine = drugs.Mirtazapine - 2;
	sortList();
	}
	else{
	drugs.Mirtazapine = drugs.Mirtazapine + 2;
	sortList();
	}
}

function hormone(){
	var checkedValue = document.getElementById('hormone').checked;
	if(checkedValue){
	drugs.Fluoxetine = drugs.Fluoxetine + 1;
	drugs.Fluvoxamine = drugs.Fluvoxamine + 1;
	drugs.Bupropion = drugs.Bupropion + 1;
	drugs.Amitripyline = drugs.Amitripyline + 1;
	drugs.Clomipramine = drugs.Clomipramine + 1;
	drugs.Desipramine = drugs.desipramine + 1;
	drugs.Doxepin = drugs.Doxepin + 1;
	drugs.Imipramine = drugs.Imipramine + 1;
	drugs.Nortriptyline = drugs.Nortriptyline + 1;
	drugs.Protriptyline = drugs.Protriptyline + 1;
	drugs.Trimipramine = drugs.Trimipramine + 1;
	drugs.Amoxapine = drugs.Amoxapine + 1;
	drugs.Maprotiline = drugs.Maprotiline + 1;

	sortList();
	}
	else{
	drugs.Fluoxetine = drugs.Fluoxetine - 1;
	drugs.Fluvoxamine = drugs.Fluvoxamine - 1;
	drugs.Bupropion = drugs.Bupropion - 1;
	drugs.Amitripyline = drugs.Amitripyline - 1;
	drugs.Clomipramine = drugs.Clomipramine - 1;
	drugs.Desipramine = drugs.desipramine - 1;
	drugs.Doxepin = drugs.Doxepin - 1;
	drugs.Imipramine = drugs.Imipramine - 1;
	drugs.Nortriptyline = drugs.Nortriptyline - 1;
	drugs.Protriptyline = drugs.Protriptyline - 1;
	drugs.Trimipramine = drugs.Trimipramine - 1;
	drugs.Amoxapine = drugs.Amoxapine - 1;
	drugs.Maprotiline = drugs.Maprotiline - 1;
	sortList();
	}
}

function sexualside(){
	var checkedValue = document.getElementById('sexualside').checked;
	if(checkedValue){
	drugs.Selegiline = drugs.Selegiline - 2;
	drugs.Bupropion = drugs.Bupropion - 2;
	drugs.Mirtazapine = drugs.Mirtazapine - 2;
	drugs.Vilazodone = drugs.Vilazodone - 2;
	drugs.Citalopram = drugs.Citalopram + 2;
	drugs.Escitalopram = drugs.Escitalopram + 2;
	drugs.Fluoxetine = drugs.Fluoxetine + 2;
	drugs.Paroxetine = drugs.Paroxetine + 2;
	drugs.Sertraline = drugs.Sertraline + 2;
	drugs.Venlafaxine = drugs.Venlafaxine + 2;
	drugs.Duloxetine = drugs.Duloxetine + 2;
	drugs.Desvenlafaxine = drugs.Desvenlafaxine + 2;
	drugs.Amitripyline = drugs.Amitripyline + 2;
	drugs.Nortriptyline = drugs.Nortriptyline + 2;
	drugs.Clomipramine = drugs.Clomipramine + 2;
	drugs.Isocarboxazid = drugs.Isocarboxazid + 2;
	drugs.Phenelzine = drugs.Phenelzine + 2;
	drugs.Tranylcypromine = drugs.Tranylcypromine + 2;
	sortList();
	}
	else{
	drugs.Selegiline = drugs.Selegiline + 2;
	drugs.Bupropion = drugs.Bupropion + 2;
	drugs.Mirtazapine = drugs.Mirtazapine + 2;
	drugs.Vilazodone = drugs.Vilazodone + 2;
	drugs.Citalopram = drugs.Citalopram - 2;
	drugs.Escitalopram = drugs.Escitalopram - 2;
	drugs.Fluoxetine = drugs.Fluoxetine - 2;
	drugs.Paroxetine = drugs.Paroxetine - 2;
	drugs.Sertraline = drugs.Sertraline - 2;
	drugs.Venlafaxine = drugs.Venlafaxine - 2;
	drugs.Duloxetine = drugs.Duloxetine - 2;
	drugs.Desvenlafaxine = drugs.Desvenlafaxine - 2;
	drugs.Amitripyline = drugs.Amitripyline - 2;
	drugs.Nortriptyline = drugs.Nortriptyline - 2;
	drugs.Clomipramine = drugs.Clomipramine - 2;
	drugs.Isocarboxazid = drugs.Isocarboxazid - 2;
	drugs.Phenelzine = drugs.Phenelzine - 2;
	drugs.Tranylcypromine = drugs.Tranylcypromine - 2;
	sortList();
	}
}

function pregnant(){
	var checkedValue = document.getElementById('pregnant').checked;
	if(checkedValue){
	drugs.Paroxetine = drugs.Paroxetine + 2;
	sortList();
	}
	else{
	drugs.Paroxetine = drugs.Paroxetine - 2;
	sortList();
	}
}



