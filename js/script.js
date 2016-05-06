var btnSearchHotels = document.querySelector('#btn-search-hotels');
var searchHotelsForm = document.querySelector('.js-search-hotels-form');
var arrivalDate = searchHotelsForm.querySelector('[name="arrival-date"]');
var departureDate = searchHotelsForm.querySelector('[name="departure-date"]');
var numberAdults = searchHotelsForm.querySelector('[name="number-adults"]');

searchHotelsForm.addEventListener('submit', function(event) {
  if (!arrivalDate.value || !departureDate.value || !numberAdults.value)  {
    event.preventDefault();
    console.log('Указаны не все данные!');
    return;
  }
});

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27)  {
    btnSearchHotels.checked = false;
  }
});
