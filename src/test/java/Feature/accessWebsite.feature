Feature: Access Websites through internet
#  @Sanity
# Scenario: Access google.com
#   Given I am a Google chrome user
#    When I access Google.com
#    Then I see Google Home page
#
#  Scenario: Access amazon.com
#    Given I am a Google chrome user
#    When I access amazon.com
#    Then I see Amazon Home page
#
#  Scenario: Access booking.com
#    Given I am a Google chrome user
#    When I access booking.com
#    Then I see booking.com Home page

  Scenario: Booking.com "Where are you going?" input box
    Given I am a Google chrome user
    When I access booking.com
    Then I see WhereAreYouGoing input box
    And I see See today's great deals link