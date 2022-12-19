var currentDay = $('#currentDay');
var saveBtn = $('.saveBtn');
var hour9 = $('#hour-9');
var hour10 = $('#hour-10');
var hour11 = $('#hour-11');
var hour12 = $('#hour-12');
var hour13 = $('#hour-13');
var hour14 = $('#hour-14');
var hour15 = $('#hour-15');
var textarea = $('.description');
var currentHour = dayjs().format('HHA')

$(function () {

  saveBtn.on('click', function(event) {
    event.preventDefault();
    // save users input to local storage
    var message = $('#message');
    var userInput = $('.description').val();

    if (userInput === " ") {
      message.text("Please add an appointment.");

    } else{
      window.onbeforeunload = function(){
        localStorage.setItem('Appointment', userInput);
      }

      message.text("Appointment added✅ to local storage.");

      window.onload = function() {
        let savedData = localStorage.getItem('Appointment');

        if (savedData !== null) {
          $('.description').val(savedData)
        }
      }
    }

  }); 
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    // 

    const changeColor = () => {
     
      var newCurrentHour = parseInt(currentHour.split("").slice(0, 2).join(""));
      
      $('.time-block').each(function(){
        var getHours = parseInt($(this).attr('id').split("-")[1]);
        
        if (newCurrentHour === getHours) {
          
          $(this).addClass('present');
  
      } else if (newCurrentHour < getHours) {
          
          $(this).removeClass('present');
          $(this).addClass('future');
  
        } else {
          
          $(this).removeClass('present');
          $(this).removeClass('future');
          $(this).addClass('past');
  
        }
      })
    }; 

    // display the current date in the header of the page.
    const displayTime = () => {
      let currentTime = dayjs().format('dddd, MMMM DD[th] YYYY'); 
      currentDay.text(currentTime); 
    }

    displayTime();
    changeColor();
    getSavedData();
  });