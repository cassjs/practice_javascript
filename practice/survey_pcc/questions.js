console.log("PCC Housing Insecurity Survey Questions");

function createSurveyQuestions() {
    var q4 = new MultipleSelectQuestionOther(
        "Income/Loan Sources", 
        "Please select all income/loan sources that apply", 
        [
        "Employment", 
        "Parents/Guardians/Family", 
        "School Loans",
        "Child Support", 
        "Alimony", 
        "Scholarships/Grants",
        "Disability",
        "Veterans Benefits"
        ]
    );

    var q2 = new MultipleSelectQuestion(
        "Campus Location",
        "What location do you primarily spend your time when at PCC? (If equally split between campuses, check both.)", 
        [
        "Cascade Campus",
        "Rock Creek Campus",
        "Southeast Campus",
        "Sylvania Campus",
        "Online courses only",
        "Other PCC Center/location"
        ]
    );

    var q8 = new ShortAnswerQuestion(
        "Age",
        "What is your age?"
    );

    var q14 = new MultipleChoiceQuestionOther(
        "Rent/Mortgage Payments",
        "Who pays for the rent/mortgage? (Select all that apply.)",
        [
        "Self",
        "Partner",
        "Spouse",
        "Parents",
        "Other family",
        "Roommates",
        ]
    );

    var q24 = new MultipleChoiceQuestionOther(
        "Expenses You Currently Pay",
        "Please select what expenses other than housing you currently pay:",
        [
        "Childcare",
        "Public Transportation",
        "School – tuition and books, etc.",
        "Vehicle payment and insurance",
        "School loans",
        "Utilities separate from housing costs",
        "Medical insurance",
        "Credit card or personal loans"
        ]
    );

    var q18 = new MultipleChoiceQuestion(
        "Home Forclosure",
        "Have you ever had a home foreclosed on?",
        ["Yes", "No"]
    );

    var allQuestions = [q4, q2, q8, q14, q18, q24];

    for (var counter = 0; counter < allQuestions.length; counter++) {
        allQuestions[counter].number = counter + 1;
    }

    var s1 = new QuestionSection("Demographics", [q4, q2, q8]);
    var s2 = new QuestionSection("Housing Information", [q14, q18, q24]);

    var allSections = [s1, s2];

    for (var counter = 0; counter < allSections.length; counter++) {
        allSections[counter].number = counter + 1;
    }

    return new Survey("PCC Housing Insecurity Survey", [s1, s2]);
}




