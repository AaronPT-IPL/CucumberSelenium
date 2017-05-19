import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.logging.Level;
import java.util.logging.Logger;

import static junit.framework.TestCase.assertEquals;

public class StepdefsGoogle {
    private WebDriver driver;

    @Given("^I am on the Google search page$")
    public void iAmOnTheGoogleSearchPage() throws Throwable {
        driver.get("http://www.google.com");
        assertEquals("Google", driver.getTitle());
    }

    @When("^I search for \"([^\"]*)\"$")
    public void iSearchFor(String searchTerm) throws Throwable {
        WebElement element = driver.findElement(By.name("q"));
        element.sendKeys(searchTerm);
        element.submit();
    }

    @Then("^the page title should start with \"([^\"]*)\"$")
    public void thePageTitleShouldStartWith(String pageTitleStart)
            throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.titleContains(pageTitleStart));
    }
    // ----------

    @Before
    public void setUp() {

        Logger.getLogger("").setLevel(Level.OFF);

        System.setProperty("webdriver.gecko.driver",
                "drivers\\geckodriver.exe");
        System.setProperty("webdriver.edge.driver",
                "drivers\\MicrosoftWebDriver.exe");
        System.setProperty("webdriver.chrome.driver",
                "drivers\\chromedriver.exe");
        System.setProperty("phantomjs.binary.path",
                "phantomjs.exe");

        // driver = new FirefoxDriver();
        // driver = new EdgeDriver();
         //driver = new ChromeDriver();
         //driver = new HtmlUnitDriver();
         driver = new PhantomJSDriver();

    }

    @After
    public void tearDown() {
        driver.close();
    }
    
}
