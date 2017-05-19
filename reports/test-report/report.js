$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("form.feature");
formatter.feature({
  "line": 1,
  "name": "Form validation",
  "description": "The HTML form we will be working at is available at:\r\nhttps://www.w3schools.com/php/demo_form_validation_complete.php\r\nThe form contains various input fields: required and optional text fields, radio buttons, and a submit button.\r\nThe validation rules for the form are as follows:\r\nField Validation Rules\r\n___ ___\r\nName Required. + Must only contain letters and whitespace\r\nE-mail Required. + Must contain a valid email address (with @ and .)\r\nWebsite Optional. If present, it must contain a valid URL\r\nComment Optional. Multi-line input field (textarea)\r\nGender Required. Must select one\r\nError messages should be generated if needed, i.e. if the user tries to submit the form without\r\nfilling out the required fields.",
  "id": "form-validation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2635385129,
  "status": "passed"
});
formatter.background({
  "line": 16,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 17,
  "name": "I navigate to the form",
  "keyword": "Given "
});
formatter.match({
  "location": "StepdefsForm.iNavigateToTheForm()"
});
formatter.result({
  "duration": 3182347206,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Name empty",
  "description": "",
  "id": "form-validation;name-empty",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "the \"name\" field is empty",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "the form is submitted",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "the \"Name is required\" error message should be shown for the \"name\" field",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 5
    }
  ],
  "location": "StepdefsForm.theFieldIsEmpty(String)"
});
formatter.result({
  "duration": 83173825,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsForm.theFormIsSubmitted()"
});
formatter.result({
  "duration": 492565129,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name is required",
      "offset": 5
    },
    {
      "val": "name",
      "offset": 62
    }
  ],
  "location": "StepdefsForm.theErrorMessageShouldBeShownForTheField(String,String)"
});
formatter.result({
  "duration": 44255572,
  "status": "passed"
});
formatter.after({
  "duration": 80354852,
  "status": "passed"
});
formatter.before({
  "duration": 1915733994,
  "status": "passed"
});
formatter.background({
  "line": 16,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 17,
  "name": "I navigate to the form",
  "keyword": "Given "
});
formatter.match({
  "location": "StepdefsForm.iNavigateToTheForm()"
});
formatter.result({
  "duration": 190651033,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Name filled out but invalid",
  "description": "",
  "id": "form-validation;name-filled-out-but-invalid",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "the \"name\" field is filled out with: \"!!!\"",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "the form is submitted",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "the \"Only letters and white space allowed\" error message should be shown for the \"name\" field",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 5
    },
    {
      "val": "!!!",
      "offset": 38
    }
  ],
  "location": "StepdefsForm.theFieldIsFilledOutWith(String,String)"
});
formatter.result({
  "duration": 93578198,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsForm.theFormIsSubmitted()"
});
formatter.result({
  "duration": 394046031,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Only letters and white space allowed",
      "offset": 5
    },
    {
      "val": "name",
      "offset": 82
    }
  ],
  "location": "StepdefsForm.theErrorMessageShouldBeShownForTheField(String,String)"
});
formatter.result({
  "duration": 28687073,
  "status": "passed"
});
formatter.after({
  "duration": 69321001,
  "status": "passed"
});
formatter.before({
  "duration": 1901084484,
  "status": "passed"
});
formatter.background({
  "line": 16,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 17,
  "name": "I navigate to the form",
  "keyword": "Given "
});
formatter.match({
  "location": "StepdefsForm.iNavigateToTheForm()"
});
formatter.result({
  "duration": 212775184,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Name filled out and valid",
  "description": "",
  "id": "form-validation;name-filled-out-and-valid",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@noerror"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "the \"name\" field is filled out with: \"Justino Figueiredo\"",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "the form is submitted",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "no error message should be shown for the \"name\" field",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 5
    },
    {
      "val": "Justino Figueiredo",
      "offset": 38
    }
  ],
  "location": "StepdefsForm.theFieldIsFilledOutWith(String,String)"
});
formatter.result({
  "duration": 111485435,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsForm.theFormIsSubmitted()"
});
formatter.result({
  "duration": 393136450,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 42
    }
  ],
  "location": "StepdefsForm.noErrorMessageShouldBeShownForTheField(String)"
});
formatter.result({
  "duration": 28985990,
  "status": "passed"
});
formatter.after({
  "duration": 66396829,
  "status": "passed"
});
formatter.before({
  "duration": 1902173243,
  "status": "passed"
});
formatter.background({
  "line": 16,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 17,
  "name": "I navigate to the form",
  "keyword": "Given "
});
formatter.match({
  "location": "StepdefsForm.iNavigateToTheForm()"
});
formatter.result({
  "duration": 234949796,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Email empty",
  "description": "",
  "id": "form-validation;email-empty",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "the \"email\" field is empty",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "the form is submitted",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "the \"Email is required\" error message should be shown for the \"email\" field",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 5
    }
  ],
  "location": "StepdefsForm.theFieldIsEmpty(String)"
});
formatter.result({
  "duration": 52018012,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsForm.theFormIsSubmitted()"
});
formatter.result({
  "duration": 381177622,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is required",
      "offset": 5
    },
    {
      "val": "email",
      "offset": 63
    }
  ],
  "location": "StepdefsForm.theErrorMessageShouldBeShownForTheField(String,String)"
});
formatter.result({
  "duration": 41535810,
  "status": "passed"
});
formatter.after({
  "duration": 83890543,
  "status": "passed"
});
formatter.before({
  "duration": 1897219086,
  "status": "passed"
});
formatter.background({
  "line": 16,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 17,
  "name": "I navigate to the form",
  "keyword": "Given "
});
formatter.match({
  "location": "StepdefsForm.iNavigateToTheForm()"
});
formatter.result({
  "duration": 179794222,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Email filled out but invalid",
  "description": "",
  "id": "form-validation;email-filled-out-but-invalid",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 43,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "the \"email\" field is filled out with: \"JustinoFigueiredo\"",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "the form is submitted",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "the \"Invalid email format\" error message should be shown for the \"email\" field",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 5
    },
    {
      "val": "JustinoFigueiredo",
      "offset": 39
    }
  ],
  "location": "StepdefsForm.theFieldIsFilledOutWith(String,String)"
});
formatter.result({
  "duration": 98303570,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsForm.theFormIsSubmitted()"
});
formatter.result({
  "duration": 392390653,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email format",
      "offset": 5
    },
    {
      "val": "email",
      "offset": 66
    }
  ],
  "location": "StepdefsForm.theErrorMessageShouldBeShownForTheField(String,String)"
});
formatter.result({
  "duration": 29293032,
  "status": "passed"
});
formatter.after({
  "duration": 70511110,
  "status": "passed"
});
formatter.before({
  "duration": 1902341304,
  "status": "passed"
});
formatter.background({
  "line": 16,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 17,
  "name": "I navigate to the form",
  "keyword": "Given "
});
formatter.match({
  "location": "StepdefsForm.iNavigateToTheForm()"
});
formatter.result({
  "duration": 178104634,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Email filled out and valid",
  "description": "",
  "id": "form-validation;email-filled-out-and-valid",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 49,
      "name": "@noerror"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "the \"email\" field is filled out with: \"JustinoFigueiredo@email.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "the form is submitted",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "no error message should be shown for the \"email\" field",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 5
    },
    {
      "val": "JustinoFigueiredo@email.com",
      "offset": 39
    }
  ],
  "location": "StepdefsForm.theFieldIsFilledOutWith(String,String)"
});
formatter.result({
  "duration": 136972084,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsForm.theFormIsSubmitted()"
});
formatter.result({
  "duration": 382040591,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 42
    }
  ],
  "location": "StepdefsForm.noErrorMessageShouldBeShownForTheField(String)"
});
formatter.result({
  "duration": 28651152,
  "status": "passed"
});
formatter.after({
  "duration": 77390911,
  "status": "passed"
});
formatter.uri("google.feature");
formatter.feature({
  "line": 1,
  "name": "Google search",
  "description": "",
  "id": "google-search",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1887805118,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Finding some cheese",
  "description": "",
  "id": "google-search;finding-some-cheese",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "I am on the Google search page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I search for \"Cheese!\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "the page title should start with \"Cheese!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsGoogle.iAmOnTheGoogleSearchPage()"
});
formatter.result({
  "duration": 1173248832,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cheese!",
      "offset": 14
    }
  ],
  "location": "StepdefsGoogle.iSearchFor(String)"
});
formatter.result({
  "duration": 127576504,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cheese!",
      "offset": 34
    }
  ],
  "location": "StepdefsGoogle.thePageTitleShouldStartWith(String)"
});
formatter.result({
  "duration": 1013651837,
  "status": "passed"
});
formatter.after({
  "duration": 2343300234,
  "status": "passed"
});
});