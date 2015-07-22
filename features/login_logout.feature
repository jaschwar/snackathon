@contactcenter1
Feature: I want to test the many variations of logging in and out
    
@loginlogout2      
Scenario: I want to make sure that these things can run concurrently given multiple tags in a feature
    Given I have started a browser with the purecloud login page
    When I login using a valid static username and password
    Then I should be logged in