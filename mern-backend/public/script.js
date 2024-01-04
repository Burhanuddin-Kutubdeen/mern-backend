const nextButton = document.querySelector('.btn-next');
const prevButton = document.querySelector('.btn-prev');
const submitButton = document.querySelector('.btn-submit');
const steps = document.querySelectorAll('.step');
const formSteps = document.querySelectorAll('.form-step');
let active = 1;

// Event listeners for the "Next" and "Previous" buttons
nextButton.addEventListener('click', () => {
  active++;
  if (active > steps.length) {
    active = steps.length;
  }
  updateProgress();
});

prevButton.addEventListener('click', () => {
  active--;
  if (active < 1) {
    active = 1;
  }
  updateProgress();
});

// Function to update progress and button visibility
const updateProgress = () => {
  // Toggle .active class for each list item
  steps.forEach((step, i) => {
    if (i === active - 1) {
      step.classList.add('active');
      formSteps[i].classList.add('active');
    } else {
      step.classList.remove('active');
      formSteps[i].classList.remove('active');
    }
  });

  // Enable or disable "Prev" and "Next" buttons
  prevButton.disabled = active === 1;
  nextButton.disabled = active === steps.length;

  // Toggle visibility of "Next" and "Submit" buttons
  nextButton.style.display = active < steps.length ? 'block' : 'none';
  submitButton.style.display = active === steps.length ? 'block' : 'none';
};

// Initial call to set up the initial state
updateProgress();



// const nextButton = document.querySelector('.btn-next');
// const prevButton = document.querySelector('.btn-prev');
// const steps = document.querySelectorAll('.step');
// const form_steps = document.querySelectorAll('.form-step');
// let active = 1;


// // -----------
// nextButton.addEventListener('click', ()=>{
//   active++;
//   if (active > steps.length) {
//     active = steps.length;
//   }
//   updateProgress();
// })

// prevButton.addEventListener('click', () =>{
//   active--;
//   if (active < 1){
//     active = 1;
//   }
//   updateProgress();
// })

// const updateProgress = () => {
//   console.log('steps.length =>' + steps.length);
//   console.log('active =>' + active);
//   //toggle .active class for each list 1 item
//   steps.forEach((step, i) =>{
//     if (i==(active-1)){
//       step.classList.add('active');
//       form_steps[i].classList.add('active');
//       console.log('i =>' +1);
//     }else{
//       step.classList.remove('active');
//       form_steps[i].classList.remove('active');
//     }
//   });

//   //enable or disable prev and next buttons
//   if (active == 1){
//     prevButton.disabled = true;
//   }else if (active == steps.length){
//     nextButton.disabled = true;
//   }else {
//     prevButton.disabled = false;
//     nextButton.disabled = false;
//   }
  
// }
