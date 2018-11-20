package StepDefinitions;


import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;

import static StepDefinitions.HookTest.driver;

/**
 * Created by balajakka on 12/11/2018.
 */
public class AccessWebsite {


    @Given("^I am a Google chrome user$")
    public void i_am_a_google_chrome_user() {


        System.out.println("my first given statement");
    }

    @When("^I access Google website$")
    public void step2(){

        driver.get("http://google.com");

    }

    @Then("^I see Google Home page$")
    public void step3(){

        Assert.assertEquals(driver.getTitle().contains("Google"), true);

    }

    @When("^I access booking.com$")
    public void step6(){
        driver.get("https://www.booking.com/");
    }

    @Then("^I see booking.com Home page$")
    public void step7(){
        Assert.assertEquals(driver.getTitle().contains("Booking.com"), true);
    }

    @When("^I access \"([^\"]*)\" website$")
    public void step8(String arg){

        driver.get("http://"+arg+".com");

    }

    @And("I click Register button")
    public void step9(){

        driver.findElement(By.xpath("//span[contains(text(),'Register')]")).click();

    }

    //span[contains(text(),'Register')]

    @Then("^I see \"([^\"]*)\" Home page$")
    public void step9(String arg){
        Assert.assertEquals(driver.getTitle().contains(arg), true);

    }

    @Then("^I see Register form$")
    public void step10(){
        System.out.println("Test Passed");;

    }



}
