$(function() {
  
  let pet_info = {
    name : "Appa",
    gender: "Male",
    element: "Airbending",
    weight : 20000,
    happiness: 65
  };
  
  checkAndUpdatePetInfoInHtml();
  
  $('.treat-button').click(clickedTreatButton);
  $('.play-button').click(clickedPlayButton);
  $('.exercise-button').click(clickedExerciseButton);
  
  function clickedTreatButton() {
    pet_info['happiness'] = pet_info['happiness'] + 10;
    pet_info['weight'] = pet_info['weight'] + 3;
    checkAndUpdatePetInfoInHtml();
  }
  
  function clickedPlayButton() {
    pet_info['happiness'] = pet_info['happiness'] + 5;
    pet_info['weight'] = pet_info['weight'] - 5;
    checkAndUpdatePetInfoInHtml();
  }
  
  function clickedExerciseButton() {
    pet_info['happiness'] = pet_info['happiness'] - 10;
    pet_info['weight'] = pet_info['weight'] - 5;
    checkAndUpdatePetInfoInHtml();
  }

  function checkAndUpdatePetInfoInHtml() {
    checkWeightAndHappinessBeforeUpdating();  
    updatePetInfoInHtml();
  }
  
  function checkWeightAndHappinessBeforeUpdating() {
    if (pet_info['weight'] < 1) {
      pet_info['weight'] = 1;
    }
  }
  
  function updatePetInfoInHtml() {
    $('.name').text(pet_info['name']);
    $('.weight').text(pet_info['weight']);
    $('.happiness').text(pet_info['happiness']);
  }
  
})