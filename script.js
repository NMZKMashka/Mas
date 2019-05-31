 
   window.addEventListener('DOMContentLoaded', function(){
	   let info = document.getElementsByClassName('info-header')[0],
	       tab = document.getElementsByClassName('info-header-tab'),
	       tabcontent = document.getElementsByClassName('info-tabcontent');
	   function hideTabContent(a){
		   for (let i = a; i<tabcontent.length; i++){
			   tabcontent[i].classList.remove('show');
			   tabcontent[i].classList.add('hide');	   
		   }  
	   }
	   hideTabContent(1)
	   function showTabContent(b){
		   if (tabcontent[b].classList.contains('hide')){
			   hideTabContent(0);
			   tabcontent[b].classList.remove('hide');
			   tabcontent[b].classList.add ('show');
		   }  
	   }
	   info.addEventListener('click', function(event){
		   let target = event.target;
		   if (target.className == 'info-header-tab'){
			   for (let i = 0; i < tab.length; i++){
				 if (target == tab[i]){
					 showTabContent(i);
					 break;
				 }  
			   }
		   };
		   
	   });
	   
	   let endDate = '2019-06-06';

	function getTime(endTime) {
		let t = Date.parse(endTime) - Date.parse(new Date()),
		seconds = Math.floor((t/1000) % 60),
		minutes = Math.floor((t/1000/60) % 60),
		hours = Math.floor(t/(1000*60*60));

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function setTime(id, endTime) {
		let timer = document.getElementById(id),
		hours = timer.querySelector('.hours'),
		minutes = timer.querySelector('.minutes'),
		seconds = timer.querySelector('.seconds');

		function updateTime() {
			let t = getTime(endTime);
			if (t.hours <= 0 && t.minutes <= 0 && t.seconds <= 0) {
				hours.innerHTML = '00';
				minutes.innerHTML = '00';
				seconds.innerHTML = '00';
			} else if (t.hours < 10) {
				hours.innerHTML = '0'+t.hours;
			} else if (t.minutes < 10) {
				minutes.innerHTML = '0'+t.minutes;
			} else if (t.seconds < 10) {
				seconds.innerHTML = '0'+t.seconds;
			} else {
				hours.innerHTML = t.hours;
				minutes.innerHTML = t.minutes;
				seconds.innerHTML = t.seconds;
			}

			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
		updateTime();
		let timeInterval = setInterval(updateTime, 1000);
	}

	setTime('timer', endDate);

	}); 
	
