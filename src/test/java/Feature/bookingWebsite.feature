Feature: test Booking website


  Scenario: Access booking.com
    Given I am a Google chrome user
    When I access booking.com
    Then I see booking.com Home page

  Scenario: Access booking.com register
    Given I am a Google chrome user
    When I access booking.com
    And I click Register button
    Then I see Register form