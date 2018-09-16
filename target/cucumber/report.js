$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumber/converter.feature");
formatter.feature({
  "line": 1,
  "name": "Online Centigrade to Fahrenheit and Fahrenheit to Centigrade Converter",
  "description": "As a user\r\nI want to enter data in Centigrade/Fahrenheit\r\nSo that I get the output in Fahrenheit/Centigrade",
  "id": "online-centigrade-to-fahrenheit-and-fahrenheit-to-centigrade-converter",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 15,
  "name": "Online Centigrade to Fahrenheit and Fahrenheit to Centigrade Converter",
  "description": "",
  "id": "online-centigrade-to-fahrenheit-and-fahrenheit-to-centigrade-converter;online-centigrade-to-fahrenheit-and-fahrenheit-to-centigrade-converter;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "the input temperature 20",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "check the type of convertion required fahrenheit",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the output should be 68",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 22
    }
  ],
  "location": "ConverterSteps.the_input_temperature(String)"
});
formatter.result({
  "duration": 12657365835,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fahrenheit",
      "offset": 38
    }
  ],
  "location": "ConverterSteps.check_the_type_of_convertion_required_fahrenheit(String)"
});
formatter.result({
  "duration": 2578447213,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "68",
      "offset": 21
    }
  ],
  "location": "ConverterSteps.the_output_should_be(String)"
});
formatter.result({
  "duration": 700413,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Online Centigrade to Fahrenheit and Fahrenheit to Centigrade Converter",
  "description": "",
  "id": "online-centigrade-to-fahrenheit-and-fahrenheit-to-centigrade-converter;online-centigrade-to-fahrenheit-and-fahrenheit-to-centigrade-converter;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "the input temperature 70",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "check the type of convertion required centigrade",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the output should be 21.111111111",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "70",
      "offset": 22
    }
  ],
  "location": "ConverterSteps.the_input_temperature(String)"
});
formatter.result({
  "duration": 11156324277,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "centigrade",
      "offset": 38
    }
  ],
  "location": "ConverterSteps.check_the_type_of_convertion_required_fahrenheit(String)"
});
formatter.result({
  "duration": 6209706328,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21.111111111",
      "offset": 21
    }
  ],
  "location": "ConverterSteps.the_output_should_be(String)"
});
formatter.result({
  "duration": 170289,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Online Centigrade to Fahrenheit and Fahrenheit to Centigrade Converter",
  "description": "",
  "id": "online-centigrade-to-fahrenheit-and-fahrenheit-to-centigrade-converter;online-centigrade-to-fahrenheit-and-fahrenheit-to-centigrade-converter;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "the input temperature 70",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "check the type of convertion required centigrade",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the output should be 128",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "70",
      "offset": 22
    }
  ],
  "location": "ConverterSteps.the_input_temperature(String)"
});
formatter.result({
  "duration": 11540264692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "centigrade",
      "offset": 38
    }
  ],
  "location": "ConverterSteps.check_the_type_of_convertion_required_fahrenheit(String)"
});
formatter.result({
  "duration": 7042100681,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "128",
      "offset": 21
    }
  ],
  "location": "ConverterSteps.the_output_should_be(String)"
});
formatter.result({
  "duration": 405144,
  "status": "passed"
});
});