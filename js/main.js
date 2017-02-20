
// Refer to the `index.html` file for the validation rules that must be enforced.
//document ready handler
$(document).on('ready', function() {
  $('#order-form').validate( {
    submitHandler:function(form) {
      form.submit();
    },
    //sets the rules for user form entries.
   rules: {
     //ensures name is entered and it appropriate length.
    'your-name': {
      required:true,
      maxlength:128,
      minlength:2
    },
     //ensures address is entered by user and is greater than one character.
     'your-address': {
      required:true,
      minlength:1,
     },
     //ensures that user enters a city name into the form.
     'your-city': {
      required: true,
     },
     //State must be added to the form by the user and must be the 2 digit state code.
     'your-state': {
      required: true,
      minlength:2,
      maxlength:2,
      },
     //Zip code must be entered and must be 5 digits. Whole numbers only.
     'your-zip': {
      required:true,
      minlength:5,
      digits:true,
      },
     //card holder name is a required field.
     'card-holder-name': {
      required:true,
      },
     //a valid card number must be entered by user.
     'card-number': {
      required:true,
      creditcard:true,
     },
     //an expiry date must be chosen from drop down.
     'expiry-month': {
      required:true,
     },
     //an expiry  year must be chosen from drowpdown.
    'expiry-year': {
      required:true,
     },
     //user must enter the 3 digit code on the back of their credit card.
     'cvv': {
      required:true,
      number:true,
      minlength:3,
      maxlength:3,
     },
     //a shipping method must be indicated.
     'shipping-method': {
      required:true,
     },
     //comments are not required but cannot exceed 500 characters.
     'comments': {
      required:false,
      maxlength:500,
     }
  },
    //the following are the messages that will appear if rules are not followed for the indicated fieds, to guide the user to enter the correct information
  messages: {
     //users are instructed they must enter a name in the correct form.
    'your-name': {
      required: 'Please enter your name using letters only',
      maxlength: 'Your name cannot exceed 128 characters',
      minlength: 'Your name must consist of at least 2 characters.',
    },
    //users are instructed to enter an address, and a message will appear if they don't enter more than one character.
    'your-address': {
      required: 'Please enter an address.',
      minlength: 'Your address must consist of at least 1 character.',
    },
    //Users are instructed that they must enter a city.
    'your-city': {
      required: 'Please enter a city.',
    },
    //Users are reminded to enter a state and that it must be the 2 digit code.
    'your-state': {
      required: 'Please enter the 2 letter abbreviation for your state',
      minlength: 'Enter the 2 letter abbreviation.',
      maxlength: 'Enter your state abbreviation. Do not exceed 2 letters.',
    },
    //User are guided to enter a correct zip code.
    'your-zip': {
      required: 'Please enter your zip code',
      minlength: 'Zip code must not exceed 5 digits.',
      digits: 'Zip code must only contain whole numbers.'
    },
    //User is instructed to enter correct credit card name.
    'card-holder-name': {
      required: 'Please enter the name as it is written on your credit card',
    },
    //user is reminded to enter a valid card number.
    'card-number': {
      required: 'Please enter your credit card number',
      creditcard: 'This is not a valid credit card number',
    },
    //User is instructed to choose a correct expiry month and year.
    'expiry-month': {
      required: 'Please select the expiry month of your credit card.',
    },
    'expiry-year': {
      required: 'Please select the expiry  year of your credit card.',
    },
    //user guided to use a correct cvv.
    'cvv': {
      required: 'Please enter the 3 digit number on the back of your credit card.',
    },
    //user is instructed that a shipping method must be chosen.
    'shipping-method': {
      required: 'Please select a shipping method.',
    },
    //user is instructed regarding length requirements for comments.
    'comments': {
      maxlength: 'Your comment must not exceed 500 characters.',
    },
  }
    
});

});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})