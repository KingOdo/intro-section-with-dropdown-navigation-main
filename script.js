
document.getElementById('company-link').addEventListener('click', (event) =>{
  event.preventDefault();
  
  const companyDropdown= document.querySelector('.company-dropdown');
  const arrowDown1= document.getElementById('arrow-down1');
  const arrowUp1= document.getElementById('arrow-up1');

  if(companyDropdown.style.display === '' || companyDropdown.style.display==='none'){
    console.log("company clicked");
    companyDropdown.style.display='block';
    console.log(arrowDown1);
    arrowDown1.style.display='none';
    arrowDown1.style.display='block';
    arrowUp1.style.display='block';
  } 
  else{  
    companyDropdown.style.display='none';
    arrowDown1.style.display='block';
    arrowUp1.style.display='none';
  }

});