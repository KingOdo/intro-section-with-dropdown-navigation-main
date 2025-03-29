
const arrowDown1=document.getElementById('arrow-down1');
const arrowUp1=document.getElementById('arrow-up1');
const arrowDown = document.getElementById('arrow-down');
const arrowUp = document.getElementById('arrow-up');
// Company dropdown functionality
document.getElementById('company-link').addEventListener('click', (event) => {
  event.preventDefault();

  const companyDropdown = document.querySelector('.company-dropdown');

  if (companyDropdown.style.display === '' || companyDropdown.style.display === 'none') {
    companyDropdown.style.display = 'block';
    arrowDown1.style.display = 'none';
    arrowUp1.style.display = 'inline';
  } else {
    companyDropdown.style.display = 'none';
    arrowDown1.style.display = 'inline';
    arrowUp1.style.display = 'none';
  }
});

// Features dropdown functionality
document.getElementById('features-link').addEventListener('click', (event) => {
  event.preventDefault();

  const featureDropdown = document.querySelector('.feature-dropdown');

  if (featureDropdown.style.display === '' || featureDropdown.style.display === 'none') {
    featureDropdown.style.display = 'inline';
    arrowDown.style.display = 'none';
    arrowUp.style.display = 'inline';
  } else {
    featureDropdown.style.display = 'none';
    arrowDown.style.display = 'inline';
    arrowUp.style.display = 'none';
  }
});