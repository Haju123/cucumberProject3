package com.cucumber.bdd.steps;


import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.Before;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ConverterSteps {
	
	ConvertersSet convert = new ConvertersSet();
	WebDriver driver;
	
	

	
	@Given("^the input temperature (.*)$")
	public void the_input_temperature(String temp) throws Throwable {
		
	   System.setProperty("webdriver.chrome.driver",".\\chromedriver.exe");
	   driver = new ChromeDriver();
	   driver.manage().window().maximize();
       driver.manage().deleteAllCookies();
       System.out.println();
	   System.out.println("------------------------------------------------------------------");
	   System.out.println("Online Temperature Converter - Fahrenheit and Celcius");
	   System.out.println("------------------------------------------------------------------");
	   System.out.println("Opening the brower and launching the URL");
	   driver.get("https://www.rapidtables.com/convert/temperature/celsius-to-fahrenheit.html");
	   convert.setTemperature(temp);
	   System.out.println("The temparture value inputed is :"+ convert.getTemperature());
	   
	     	   
	   	   
	}

	@When("^check the type of convertion required (.*)$")
	public void check_the_type_of_convertion_required_fahrenheit(String required_in_type) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		convert.setType_of_convertion(required_in_type);
		if(convert.getType_of_convertion().equalsIgnoreCase("fahrenheit"))
		{
			
			System.out.println("Converting given temperature to Fahrenheit");
			System.out.println("Online Converter site title :"+driver.getTitle());
			driver.findElement(By.xpath("//input[@class='intext']")).sendKeys(convert.getTemperature());
            driver.findElement(By.xpath("(//button[@class='btn'])[1]")).click();
            String convertedValue = driver.findElement(By.xpath("//input[@tabindex='5']")).getAttribute("value");
            convert.setConvertedValue(convertedValue);
			//System.out.println(convert.getConvertedValue());
		}
		else
		{
			System.out.println("Converting given temperature to Centigrade");
			driver.findElement(By.xpath("//button[@title='Swap conversion']")).click();
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			System.out.println("Online Converter site title :"+driver.getTitle());
			driver.findElement(By.xpath("//input[@class='intext']")).sendKeys(convert.getTemperature());
            driver.findElement(By.xpath("(//button[@class='btn'])[1]")).click();
            String convertedValue = driver.findElement(By.xpath("//input[@tabindex='5']")).getAttribute("value");
            convert.setConvertedValue(convertedValue);
            //System.out.println(convert.getConvertedValue());
		
		}
		
		driver.close();
	    
	}

	@Then("^the output should be (.*)$")
	public void the_output_should_be(String value) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		if(convert.getConvertedValue().equals(value))
		{
			if(convert.getType_of_convertion().equals("centigrade"))
			{
				System.out.println("Converted input value "+ convert.getTemperature()+ " to "+ convert.getType_of_convertion()+ ":"+ convert.getConvertedValue()+ "C");
			}
			else
			{
				System.out.println("Converted input value "+ convert.getTemperature()+ " to "+ convert.getType_of_convertion()+ ":"+ convert.getConvertedValue()+ "F");
			}
			System.out.println();
			System.out.println("------------------------------------------------------------------");
			System.out.println();
			
		}
		else
		{
			System.out.println("Online temparature Converter performed correctly for negative scenario as well");
			System.out.println();
			System.out.println("------------------------------------------------------------------");
			System.out.println();
			
		}
	 
	}
	

}
