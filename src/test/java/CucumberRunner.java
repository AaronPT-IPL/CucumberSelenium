import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by Emanuel on 05/05/2017.
 */
@RunWith(Cucumber.class)
@CucumberOptions(format = {"pretty", "html:reports/test-report"})
public class CucumberRunner { }
