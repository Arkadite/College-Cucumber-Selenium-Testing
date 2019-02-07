#Search.feature

Feature: University of Green Bay Search Testing
    I should be able to go to a website
    and check its search functionality   

    Scenario: UWGB Search for School of Business    
        When I search uwgb for "School of Business"
        Then I should see a number of results
        
    Scenario: UWGB Search for Computer Science 
        When I search uwgb for "Computer Science"
        Then I should see a number of results
        
                
    Scenario: UWGB Search for Cofrin Library 
        When I search uwgb for "Cofrin Library"
        Then I should see a number of results
        
                
    Scenario: UWGB Search for Housing 
        When I search uwgb for "Housing"
        Then I should see a number of results
        
                
    Scenario: UWGB Search for Facilities
        When I search uwgb for "Facilities"
        Then I should see a number of results
        