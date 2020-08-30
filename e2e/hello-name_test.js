const config = require("./config.json");
Feature("hello-name");

Scenario("test saying hello to someone", (I) => {
  I.amOnPage(config.appUrl);
  I.wait(3);
  I.fillField("#name", "Brenley");
  I.wait(3);
  I.click("Submit");
  I.wait(3);
  I.see("Hello, Brenley");
});
