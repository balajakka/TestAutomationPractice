$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("bookingWebsite.feature");
formatter.feature({
  "line": 1,
  "name": "test Booking website",
  "description": "",
  "id": "test-booking-website",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3142547260,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Access booking.com",
  "description": "",
  "id": "test-booking-website;access-booking.com",
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
  "duration": 140187498,
  "status": "passed"
});
formatter.match({
  "location": "AccessWebsite.step6()"
});
formatter.result({
  "duration": 9282577684,
  "status": "passed"
});
formatter.match({
  "location": "AccessWebsite.step7()"
});
formatter.result({
  "duration": 47872571,
  "status": "passed"
});
formatter.after({
  "duration": 104091653,
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
  "duration": 1406008958,
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
  "duration": 85565,
  "status": "passed"
});
formatter.match({
  "location": "AccessWebsite.step2()"
});
formatter.result({
  "duration": 2430168628,
  "status": "passed"
});
formatter.match({
  "location": "AccessWebsite.step3()"
});
formatter.result({
  "duration": 12118549,
  "status": "passed"
});
formatter.after({
  "duration": 138088627,
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
  "keyword": "Scenario Outline",
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
  "duration": 1333513884,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": ": Access google.com",
  "description": "",
  "id": "access-websites-through-internet;:-access-google.com;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
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
  "duration": 143084,
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
  "duration": 2721100999,
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
  "duration": 11983115,
  "status": "passed"
});
formatter.after({
  "duration": 86891499,
  "status": "passed"
});
formatter.before({
  "duration": 1331955400,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": ": Access google.com",
  "description": "",
  "id": "access-websites-through-internet;:-access-google.com;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
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
  "duration": 84132,
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
  "duration": 10365719215,
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
  "duration": 68202571,
  "status": "passed"
});
formatter.after({
  "duration": 94954613,
  "status": "passed"
});
});