Feature: Access Websites through internet

 @sanity
 Scenario: Access google.com
   Given I am a Google chrome user
    When I access Google website
    Then I see Google Home page
