package StepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

import static StepDefinitions.HookTest.driver;

/**
 * Created by balajakka on 16/11/2018.
 */
public class Santander {
    @Given ("^I am a google chrome user$")
    public void test1(){
        System.out.println("Hello World");
    }

    @When("^I access santander website$")
    public void test2(){
        driver.get("https://santander.co.uk");
    }
    @Then("^I can see Santander Home page$")
    public void test3(){
        Assert.assertEquals(driver.getTitle().contains("Santander"),true);
    }

}
