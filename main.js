//const myObj = document.querySelector('#obj');



// let menu = [
// 	{type: 'button', descrizione: 'comando1'},
// 	{type: 'button', descrizione: 'comando2'},
// 	{type: 'button', descrizione: 'comando3'},
// 	{type: 'button', descrizione: 'comando4'}
// ]

// menu.forEach ((art) => {
// let btn = document.createElement("BUTTON");
// //btn.style.height=40;
// //btn.style.width=100;
// btn.style.paddingBottom = "30px";
// btn.innerHTML = art.descrizione;
// btn.addEventListener("click", function(){console.log("click")});
// let dest=document.getElementById("menu");
// dest.appendChild(btn);
// });


function init(){
	const div01 = document.createElement('div');
	div01.style.height = '100vh';
	// div01.style.backgroundColor = 'MediumSeaGreen';
	div01.classList.add('div01');
	div01.id="page1";
	document.body.appendChild(div01);

	const divClock = document.createElement('div');
	divClock.classList.add('divClock');
	const pH = document.createElement('p');
	pH.classList.add('clk', 'pH');
	pH.innerText = clock().hour;
	divClock.appendChild(pH);

	const pM = document.createElement('p');
	pM.classList.add('clk', 'pM');
	pM.innerText = ':' + clock().minute;
	divClock.appendChild(pM);

	const pS = document.createElement('p');
	pS.classList.add('clk', 'pS');
	pS.innerText = ':' + clock().second;
	divClock.appendChild(pS);

	div01.appendChild(divClock);


	const div02 = document.createElement('div');
	div02.style.height = '100vh';
	// div02.style.backgroundColor = 'Tomato';
	div02.classList.add('div02');
	div02.id="page2";
	document.body.appendChild(div02);

	for (i=0; i<8; i++){
		const div = document.createElement('div');
		// div.style.height = '100px';
		// div.style.width = '100px';
		// div.style.backgroundColor = 'Tomato';
		// div.classList.add('div02');
		div02.appendChild(div);
	}



	const div03 = document.createElement('div');
	div03.style.height = '100vh';
	// div03.style.backgroundColor = 'orange';
	div03.classList.add('div03');
	div03.id="page3";
	document.body.appendChild(div03);

	setInterval(()=>{
		pH.innerText = clock().hour;
		pM.innerText = ':' + clock().minute;
		pS.innerText = ':' + clock().second;
	}, 1000);
}

function clock(){
	const date = new Date();
	const hour = digitalTime(date.getHours());
	const minute = digitalTime(date.getMinutes());
	const second = digitalTime(date.getSeconds());

	const currentTime = {
		hour: hour,
		minute: minute,
		second: second
	}

	// return `${currentTime.hour}:${currentTime.minute}:${currentTime.second}`
	return currentTime;
}

function digitalTime(num){
	return num<10 ? `0${num}` : num;
}


init();
