Feature: Access Websites through internet


  Scenario Outline: : Access google.com
    Given I am a Google chrome user
    When I access "<websiteName>" website
    Then I see "<websiteTitle>" Home page

  Examples:
    |websiteName|websiteTitle|
    |Google     |Google      |
    |Booking    |Booking     |