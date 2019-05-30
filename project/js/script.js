 
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
	   
	}); 