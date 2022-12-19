var currentDay = $('#currentDay');
var saveBtn = $('.saveBtn');
var hour9 = $('#hour-9');
var hour10 = $('#hour-10');
var hour11 = $('#hour-11');
var hourText = $('.hour');
var currentHour = dayjs().format('hA').toString();

$(function () {

  saveBtn.on('click', function(event) {
    event.preventDefault();
    // save users input to local storage
    var userInput = $('.description').val();
    var message = $('#message');
    localStorage.setItem('Appointment', userInput);

    if (userInput === " ") {
      message.text("Please add an appointment.");

    } else{
      message.text("Appointment added✅ to local storage.");

    }
  }); 

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //

    const hour9Color = () => {

     if (currentHour === hour9.text()) {
        // add present class 
         hour9.addClass('present');

    } else if (currentHour < hour9.text()) {
        // add future class
        hour9.addClass('future');

      } else {
        // add past class 
        hour9.addClass('past');

      }
    }; 

     let hour10Color = () => {
      if (currentHour === hour10.text()) {
        // add present class
        hour10.addClass('present');

      } else if (currentHour > hour10.text()) {
        // add future class
        hour10.addClass('future');

      } else {
        // add past class 
        hour10.addClass('past');
      }
     };

     let hour11Color = () => {
      if (currentHour === hour10.text()) {
        // add present class
        hour11.addClass('present');

      } else if (currentHour > hour10.text()) {
        // add future class
        hour11.addClass('future');

      } else {
        // add past class 
        hour11.addClass('past');
      }
     }

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //

    // TODO: Add code to display the current date in the header of the page.
    const displayTime = () => {
      let currentTime = dayjs().format('dddd, MMMM DD[th] YYYY'); 
      currentDay.text(currentTime); 
    }

    displayTime();
    hour9Color();
    hour10Color();
    hour11Color();
  });