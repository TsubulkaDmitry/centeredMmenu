function ready() {


}
document.addEventListener("DOMContentLoaded", ready);

function mouseOver(name){
	var elem = document.getElementById(name);
	var liCenter = elem.clientWidth/2 + elem.offsetLeft; // центр li 
	var block = document.querySelector("li#"+name+">div"); // получем блок sub menu
	var blockCenter = block.clientWidth/2; // находим середину блока
	var blockMargin = liCenter - blockCenter; // высчитываем отступ слева
	var menu = document.getElementById('main_menu'); 
	var rightIndentation = menu.clientWidth + menu.offsetLeft; // получаем крайнюю правую потку ( за которую нельзя залазить)
	var rightDotBlock = block.offsetLeft + block.clientWidth;

	block.style.left = blockMargin+"px"; // выставляем все елементы по центру

	if (block.offsetLeft < menu.offsetLeft){
		block.style.left = menu.offsetLeft+"px";
	}else if  (rightDotBlock > rightIndentation ){
		block.style.left = rightIndentation - block.clientWidth+"px";
	}
}