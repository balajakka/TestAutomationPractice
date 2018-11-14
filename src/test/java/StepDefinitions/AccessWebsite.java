package StepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

/**
 * Created by balajakka on 12/11/2018.
 */
public class AccessWebsite {

    WebDriver driver;

    @Given("^I am a Google chrome user$")
    public void i_am_a_google_chrome_user(){

        System.setProperty("webdriver.chrome.driver","./src/test/java/chromedriver");

        driver = new ChromeDriver();

//        abc.get("http://www.test.com");

        //System.out.println("my first given statement");
    }

    @When("^I access Google.com$")
    public void step2(){
        System.out.println("my when statement");
        driver.get("https://www.google.co.uk");

    }

    @Then("^I see Google Home page$")
    public void step3(){
        System.out.println();
        Assert.assertEquals(driver.getTitle(), "Google");
        driver.quit();
    }

    @When("^I access amazon.com$")
    public void step4(){
        driver.get("https://www.amazon.co.uk/");
        System.out.println("I Accesed Amazon");
    }

    @Then("^I see Amazon Home page$")
    public void step5(){

        Assert.assertEquals(driver.getTitle().contains("Amazon"), true);
        driver.quit();
    }
    @When("^I access booking.com$")
    public void step6(){
        driver.get("https://www.booking.com");
    }

    @Then("^I see booking.com Home page$")
        public void step7(){
        Assert.assertEquals(driver.getTitle().contains("Booking.com"), true);
        driver.quit();
    }

    @Then("^I see WhereAreYouGoing input box$")
    public void i_see_whereAreGoing_input(){

        WebElement whereAreYouGoingInputBox;
        whereAreYouGoingInputBox= driver.findElement(By.xpath("//input[@placeholder=\"Where are you going?\"]"));
        Assert.assertEquals(whereAreYouGoingInputBox.isDisplayed(),true);
        whereAreYouGoingInputBox.sendKeys("Paris");
        driver.quit();
    }


}
