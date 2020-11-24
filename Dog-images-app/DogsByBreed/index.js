'use strict';

function getDogImage() {
  let dogBreed = $('#dogBreed').val();
  console.log(dogBreed);
  fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert(error));
  }

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

function displayResults(responseJson) {
  let image = `<img src='${responseJson.message}'>`;
  
  if(responseJson.status === 'error') 
  {
    throw `${responseJson.code}: ${responseJson.message}`;
  }

  $('.results-img').replaceWith(image);
  $('.results').removeClass('hidden');
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});