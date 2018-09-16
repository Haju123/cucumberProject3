Feature: Online Centigrade to Fahrenheit and Fahrenheit to Centigrade Converter
  As a user
  I want to enter data in Centigrade/Fahrenheit
  So that I get the output in Fahrenheit/Centigrade

  Scenario Outline: Online Centigrade to Fahrenheit and Fahrenheit to Centigrade Converter
	Given the input temperature <temp>
	When check the type of convertion required <required_in_type>
	Then the output should be <value>
	  
	
	Examples: 
	
	|temp | required_in_type | value  |
	| 20  |   fahrenheit     | 68     |
	| 70  |   centigrade     | 21.111111111     |
	| 70  |   centigrade     | 128    |
	
		