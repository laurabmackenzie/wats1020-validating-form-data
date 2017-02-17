/* Custom JS goes here. */

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
// 2. Define a validation object for use on your page.
// 3. Connect the validation object to an event handler tied to the submit button.

// Refer to the `index.html` file for the validation rules that must be enforced.
$(document).on('ready', function() {
  $('#order-form').validate( {
    submitHandler:function(form) {
      form.submit();
    },
   rules: {
    'your-name': {
      required:true,
      maxlength:128,
      minlength:2
    },
     'your-address': {
      required:true,
      minlength:1,
     },
     'your-city': {
      required: true,
     },
     'your-state': {
      required: true,
      minlength:2,
      maxlength:2,
      },
     'your-zip': {
      required:true,
      minlength:5,
      digits:true,
      },
     'card-holder-name': {
      required:true,
      },
     'card-number': {
      required:true,
      creditcard:true,
     },
     'expiry-month': {
      required:true,
     },
    'expiry-year': {
      required:true,
     },
     'cvv': {
      required:true,
      number:true,
      minlength:3,
      maxlength:3,
     },
     'shipping-method': {
      required:true,
     },
     'comments': {
      required:false,
      maxlength:500,
     }
  },
  messages: {
    'your-name': {
      required: 'Please enter your name using letters only',
      maxlength: 'Your name cannot exceed 128 characters',
      minlength: 'Your name must consist of at least 2 characters.',
    },
    'your-address': {
      required: 'Please enter an address.',
      minlength: 'Your address must consist of at least 1 character.',
    },
    'your-city': {
      required: 'Please enter a city.',
    },
    'your-state': {
      required: 'Please enter the 2 letter abbreviation for your state',
      minlength: 'Enter the 2 letter abbreviation.',
      maxlength: 'Enter your state abbreviation. Do not exceed 2 letters.',
    },
    'your-zip': {
      required: 'Please enter your zip code',
      minlength: 'Zip code must not exceed 5 digits.',
      digits: 'Zip code must only contain whole numbers.'
    },
    'card-holder-name': {
      required: 'Please enter the name as it is written on your credit card',
    },
    'card-number': {
      required: 'Please enter your credit card number',
      creditcard: 'This is not a valid credit card number',
    },
    'expiry-month': {
      required: 'Please select the expiry month of your credit card.',
    },
    'expiry-year': {
      required: 'Please select the expiry  year of your credit card.',
    },
    'cvv': {
      required: 'Please enter the 3 digit number on the back of your credit card.',
    },
    'shipping-method': {
      required: 'Please select a shipping method.',
    },
    'comments': {
      maxlength: 'Your comment must not exceed 500 characters.',
    },
  }
});

});