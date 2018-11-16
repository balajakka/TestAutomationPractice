package StepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

import static StepDefinitions.HookTest.driver;

/**
 * Created by balajakka on 16/11/2018.
 */
public class MultiBank {
    @Given("^I am a chrome user$")
    public void step1(){
        System.out.println("BANK WEBSITES TEST");
            }
    @When("^I access \"([^\"]*)\" Website$")
    public void step2(String arg){
        driver.get(arg);

    }
    @Then("^I can see \"([^\"]*)\" homePage$")
    public void step3(String arg){
        Assert.assertEquals(driver.getTitle().contains(arg),true);
    }
}
