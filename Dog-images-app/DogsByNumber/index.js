'use strict';

function getDogImage() {
  let numberOfDogs = getUserdogNumber();
  fetch(`https://dog.ceo/api/breeds/image/random/${numberOfDogs}`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
    
  }

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

function getUserdogNumber() {
  return $('#numberOfDogs').val();
}

function displayResults(responseJson) {
  let picture = [];
  for(let dog of responseJson.message){
    picture.push(`<img src='${dog}' class='results-img'>`);
  }
//replace the existing image with the new one

  $('.results-img').replaceWith(picture.join(''));
//display results section
  $('.results').removeClass('hidden');
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});