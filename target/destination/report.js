$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("bookingWebsite.feature");
formatter.feature({
  "line": 1,
  "name": "test Booking website",
  "description": "",
  "id": "test-booking-website",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2790001751,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Access booking.com",
  "description": "",
  "id": "test-booking-website;access-booking.com",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am a Google chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I access booking.com",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I see booking.com Home page",
  "keyword": "Then "
});
formatter.match({
  "location": "AccessWebsite.i_am_a_google_chrome_user()"
});
formatter.result({
  "duration": 133460949,
  "status": "passed"
});
formatter.match({
  "location": "AccessWebsite.step6()"
});
formatter.result({
  "duration": 12162610066,
  "status": "passed"
});
formatter.match({
  "location": "AccessWebsite.step7()"
});
formatter.result({
  "duration": 144576119,
  "status": "passed"
});
formatter.after({
  "duration": 91531850,
  "status": "passed"
});
formatter.before({
  "duration": 1410402247,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Access booking.com register",
  "description": "",
  "id": "test-booking-website;access-booking.com-register",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I am a Google chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I access booking.com",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click Register button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I see Register form",
  "keyword": "Then "
});
formatter.match({
  "location": "AccessWebsite.i_am_a_google_chrome_user()"
});
formatter.result({
  "duration": 64393,
  "status": "passed"
});
formatter.match({
  "location": "AccessWebsite.step6()"
});
formatter.result({
  "duration": 10130295058,
  "status": "passed"
});
formatter.match({
  "location": "AccessWebsite.step9()"
});
formatter.result({
  "duration": 406700762,
  "status": "passed"
});
formatter.match({
  "location": "AccessWebsite.step10(String)"
});
formatter.result({
  "duration": 722084,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027StepDefinitions.AccessWebsite.step10(String) in file:/Users/balajakka/TestAutomationPractice/target/test-classes/\u0027 with pattern [^I see Register form$] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep: Then I see Register form\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:117)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:42)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:262)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:84)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat com.intellij.rt.execution.application.AppMain.main(AppMain.java:147)\n",
  "status": "failed"
});
formatter.after({
  "duration": 86387953,
  "status": "passed"
});
formatter.uri("googleWebsite.feature");
formatter.feature({
  "line": 1,
  "name": "Access Websites through internet",
  "description": "",
  "id": "access-websites-through-internet",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1706031971,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Access google.com",
  "description": "",
  "id": "access-websites-through-internet;access-google.com",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am a Google chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I access Google website",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I see Google Home page",
  "keyword": "Then "
});
formatter.match({
  "location": "AccessWebsite.i_am_a_google_chrome_user()"
});
formatter.result({
  "duration": 74980,
  "status": "passed"
});
formatter.match({
  "location": "AccessWebsite.step2()"
});
formatter.result({
  "duration": 2168220250,
  "status": "passed"
});
formatter.match({
  "location": "AccessWebsite.step3()"
});
formatter.result({
  "duration": 6034664,
  "status": "passed"
});
formatter.after({
  "duration": 90704948,
  "status": "passed"
});
formatter.uri("multiBnak.feature");
formatter.feature({
  "line": 1,
  "name": "Multi Bank",
  "description": "",
  "id": "multi-bank",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Open Multi Windows",
  "description": "",
  "id": "multi-bank;open-multi-windows",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "I am a chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I access \"\u003cBankName\u003e\" Website",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I can see \"\u003cBankWebsite\u003e\" homePage",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "multi-bank;open-multi-windows;",
  "rows": [
    {
      "cells": [
        "BankName",
        "BankWebsite"
      ],
      "line": 8,
      "id": "multi-bank;open-multi-windows;;1"
    },
    {
      "cells": [
        "https://www.hsbc.com/",
        "HSBC"
      ],
      "line": 9,
      "id": "multi-bank;open-multi-windows;;2"
    },
    {
      "cells": [
        "https://www.barclays.co.uk/",
        "Barclays"
      ],
      "line": 10,
      "id": "multi-bank;open-multi-windows;;3"
    },
    {
      "cells": [
        "https://www.lloydsbank.com/",
        "Lloyds"
      ],
      "line": 11,
      "id": "multi-bank;open-multi-windows;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1324372677,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Open Multi Windows",
  "description": "",
  "id": "multi-bank;open-multi-windows;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "I am a chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I access \"https://www.hsbc.com/\" Website",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I can see \"HSBC\" homePage",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MultiBank.step1()"
});
formatter.result({
  "duration": 115376,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.hsbc.com/",
      "offset": 10
    }
  ],
  "location": "MultiBank.step2(String)"
});
formatter.result({
  "duration": 40106047569,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HSBC",
      "offset": 11
    }
  ],
  "location": "MultiBank.step3(String)"
});
formatter.result({
  "duration": 12741070,
  "status": "passed"
});
formatter.after({
  "duration": 98866595,
  "status": "passed"
});
formatter.before({
  "duration": 1437966202,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Open Multi Windows",
  "description": "",
  "id": "multi-bank;open-multi-windows;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "I am a chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I access \"https://www.barclays.co.uk/\" Website",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I can see \"Barclays\" homePage",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MultiBank.step1()"
});
formatter.result({
  "duration": 72985,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.barclays.co.uk/",
      "offset": 10
    }
  ],
  "location": "MultiBank.step2(String)"
});
formatter.result({
  "duration": 9015820758,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Barclays",
      "offset": 11
    }
  ],
  "location": "MultiBank.step3(String)"
});
formatter.result({
  "duration": 74914714,
  "status": "passed"
});
formatter.after({
  "duration": 141442881,
  "status": "passed"
});
formatter.before({
  "duration": 1263112670,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Open Multi Windows",
  "description": "",
  "id": "multi-bank;open-multi-windows;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "I am a chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I access \"https://www.lloydsbank.com/\" Website",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I can see \"Lloyds\" homePage",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MultiBank.step1()"
});
formatter.result({
  "duration": 65802,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.lloydsbank.com/",
      "offset": 10
    }
  ],
  "location": "MultiBank.step2(String)"
});
formatter.result({
  "duration": 10063825255,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lloyds",
      "offset": 11
    }
  ],
  "location": "MultiBank.step3(String)"
});
formatter.result({
  "duration": 15045778,
  "status": "passed"
});
formatter.after({
  "duration": 91814997,
  "status": "passed"
});
formatter.uri("testfile.feature");
formatter.feature({
  "line": 1,
  "name": "Quick Balance",
  "description": "",
  "id": "quick-balance",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1304631595,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Open Quick Balance",
  "description": "//BDD test case",
  "id": "quick-balance;open-quick-balance",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am a google chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I access santander website",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I can see Santander Home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Santander.test1()"
});
formatter.result({
  "duration": 140371,
  "status": "passed"
});
formatter.match({
  "location": "Santander.test2()"
});
formatter.result({
  "duration": 7944430701,
  "status": "passed"
});
formatter.match({
  "location": "Santander.test3()"
});
formatter.result({
  "duration": 387016777,
  "status": "passed"
});
formatter.after({
  "duration": 102746248,
  "status": "passed"
});
formatter.uri("websiteAccess.feature");
formatter.feature({
  "line": 1,
  "name": "Access Websites through internet",
  "description": "",
  "id": "access-websites-through-internet",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": ": Access google.com",
  "description": "",
  "id": "access-websites-through-internet;:-access-google.com",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am a Google chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I access \"\u003cwebsiteName\u003e\" website",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I see \"\u003cwebsiteTitle\u003e\" Home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "access-websites-through-internet;:-access-google.com;",
  "rows": [
    {
      "cells": [
        "websiteName",
        "websiteTitle"
      ],
      "line": 10,
      "id": "access-websites-through-internet;:-access-google.com;;1"
    },
    {
      "cells": [
        "Google",
        "Google"
      ],
      "line": 11,
      "id": "access-websites-through-internet;:-access-google.com;;2"
    },
    {
      "cells": [
        "Booking",
        "Booking"
      ],
      "line": 12,
      "id": "access-websites-through-internet;:-access-google.com;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1291919260,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": ": Access google.com",
  "description": "",
  "id": "access-websites-through-internet;:-access-google.com;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am a Google chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I access \"Google\" website",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I see \"Google\" Home page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AccessWebsite.i_am_a_google_chrome_user()"
});
formatter.result({
  "duration": 69129,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Google",
      "offset": 10
    }
  ],
  "location": "AccessWebsite.step8(String)"
});
formatter.result({
  "duration": 1327545679,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Google",
      "offset": 7
    }
  ],
  "location": "AccessWebsite.step9(String)"
});
formatter.result({
  "duration": 5295059,
  "status": "passed"
});
formatter.after({
  "duration": 94761645,
  "status": "passed"
});
formatter.before({
  "duration": 1342063507,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": ": Access google.com",
  "description": "",
  "id": "access-websites-through-internet;:-access-google.com;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am a Google chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I access \"Booking\" website",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I see \"Booking\" Home page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AccessWebsite.i_am_a_google_chrome_user()"
});
formatter.result({
  "duration": 51664,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Booking",
      "offset": 10
    }
  ],
  "location": "AccessWebsite.step8(String)"
});
formatter.result({
  "duration": 10500462415,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Booking",
      "offset": 7
    }
  ],
  "location": "AccessWebsite.step9(String)"
});
formatter.result({
  "duration": 160032759,
  "status": "passed"
});
formatter.after({
  "duration": 89905543,
  "status": "passed"
});
});