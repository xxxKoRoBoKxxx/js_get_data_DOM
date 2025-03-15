'use strict';

function convertStrToNum(text) {
  let numberArray = [...text].filter((symbol) => symbol !== ',');

  return +numberArray.reduce((res, element) => (res += element), '');
}

function convertNumToStr(number) {
  let stringNubmer = '';
  for (let i = `${number}`.length - 1; i >= 0; i--) {
    stringNubmer = `${number}`[i] + stringNubmer;
    if ((i - `${number}`.length) % 3 === 0 && i !== 0) {
      stringNubmer = ',' + stringNubmer;
    }
  }

  return stringNubmer;
}

function totalPopulation() {
  return [...document.querySelectorAll('span.population')].reduce(
    (sum, element) => sum + convertStrToNum(element.innerText),
    0,
  );
}

document.querySelector('span.total-population').innerText =
  convertNumToStr(totalPopulation());

document.querySelector('span.average-population').innerText = convertNumToStr(
  Math.round(
    totalPopulation() /
      [...document.querySelectorAll('span.population')].length,
  ),
);
