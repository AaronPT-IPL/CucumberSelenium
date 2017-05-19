import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.logging.Level;
import java.util.logging.Logger;

import static junit.framework.TestCase.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

/**
 * Created by Emanuel on 05/05/2017.
 */
public class StepdefsForm {

    private static WebDriver driver;
    static {
        Logger.getLogger("").setLevel(Level.OFF);
        System.setProperty("webdriver.gecko.driver", "drivers\\geckodriver.exe");
        System.setProperty("webdriver.edge.driver", "drivers\\MicrosoftWebDriver.exe");
        System.setProperty("webdriver.chrome.driver", "drivers\\chromedriver.exe");
        System.setProperty("phantomjs.binary.path", "drivers\\phantomjs.exe"); //

        if (driver == null) {
            driver = new HtmlUnitDriver();
            driver = new ChromeDriver();
        }
    }

    @Given("^I navigate to the form$")
    public void iNavigateToTheForm() throws Throwable {
        driver.get("https://www.w3schools.com/php/demo_form_validation_complete.php");
    }

    @Given("^the \"([^\"]*)\" field is empty$")
    public void theFieldIsEmpty(String field) throws Throwable {
        WebElement webElement = driver.findElement(By.name(field));
        webElement.clear();
        assertEquals("", webElement.getText());
    }

    @When("^the form is submitted$")
    public void theFormIsSubmitted() throws Throwable {
        WebElement webElement = driver.findElement(By.name("submit"));
        webElement.click();

        String nameFieldText = driver.findElement(By.name("name")).getAttribute("value");
        assertTrue(driver.findElement(By.xpath("//body")).getText().contains(nameFieldText));
        
        String emailFieldText = driver.findElement(By.name("email")).getAttribute("value");
        assertTrue(driver.findElement(By.xpath("//body")).getText().contains(emailFieldText));
        
        String websiteFieldText = driver.findElement(By.name("website")).getAttribute("value");
        assertTrue(driver.findElement(By.xpath("//body")).getText().contains(websiteFieldText));
        
        String commentFieldText = driver.findElement(By.name("comment")).getAttribute("value");
        assertTrue(driver.findElement(By.xpath("//body")).getText().contains(commentFieldText));
    }

    @Then("^the \"([^\"]*)\" error message should be shown for the \"([^\"]*)\" field$")
    public void theErrorMessageShouldBeShownForTheField(String errorMessage, String field) throws Throwable {
        if(field.equals("name")){
            assertTrue(driver.findElement(By.cssSelector("form > span.error")).getText().matches(("\\* " + errorMessage)));
        } else if (field.equals("email")){
            assertTrue(driver.findElement(By.xpath("//span[2]")).getText().matches("\\* " + errorMessage));
        } else {
            fail("Unknown field: " + field);
        }
    }

    @Given("^the \"([^\"]*)\" field is filled out with: \"([^\"]*)\"$")
    public void theFieldIsFilledOutWith(String field, String value) throws Throwable {
        WebElement webElement = driver.findElement(By.name(field));
        webElement.clear();
        webElement.sendKeys(value);
        new WebDriverWait(driver, 2).until(ExpectedConditions.textToBePresentInElementValue(webElement, value));
    }

    @Then("^no error message should be shown for the \"([^\"]*)\" field$")
    public void noErrorMessageShouldBeShownForTheField(String field) throws Throwable {
        if(field.equals("name")){
            assertTrue(driver.findElement(By.cssSelector("form > span.error")).getText().matches(("\\*")));
        } else if (field.equals("email")){
            assertTrue(driver.findElement(By.xpath("//span[2]")).getText().matches(("\\*")));
        } else {
            fail("Unknown field: " + field);
        }
    }
}
