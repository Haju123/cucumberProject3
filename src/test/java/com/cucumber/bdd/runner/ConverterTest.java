package com.cucumber.bdd.runner;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(monochrome=true,
        format = { "pretty", "html:target/cucumber" },
        glue = "com.cucumber.bdd.steps",
        features = "classpath:cucumber/converter.feature"
)

public class ConverterTest {

}
