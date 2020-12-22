console.log("Housing Insecurity Survey");


function Question(title, text) {
    this.title = title;
    this.text = text;
    this.toHTML = function() {
        var result = "";

        result += "<h3>" + this.number + ". " + this.title + "</h3>\n";
        result += "<p>" + this.text + "</p>\n";

        return result;
    };
    this.getAnswers = function() {
        return {};
    };
}

function MultipleChoiceQuestion(title, text, options) {
    Question.call(this, title, text);

    var superToHTML = this.toHTML;

    this.toHTML = function() {
        var result = superToHTML.call(this);

        result += '<ol id="' + title + '" type="a">\n';
        for (var counter = 0; counter < options.length; counter++) {
            result += '<li><input type="radio" name="' + title + '" value="' + options[counter] + '">' + options[counter] + '</li>\n';
        }
        result += '</ol>\n';
        return result;
    };
    this.getAnswers = function() {
        var answers = {};
        var inputs = document.getElementById(title).getElementsByTagName("input");

        for (var counter = 0; counter < inputs.length; counter++) {
            answers[inputs[counter].value] = inputs[counter].checked;
        }

        return answers; 
    };
} 

function MultipleChoiceQuestionOther(title, text, options) {
    MultipleChoiceQuestion.call(this, title, text, options);

    var superToHTML = this.toHTML;
    var superGetAnswers = this.getAnswers;

    this.toHTML = function() {
        var result = superToHTML.call(this, title, text, options);

        result += '<p>Other: <input id="' + title + '_other" type="text" name="Other"></p>\n';
        return result;
    };
    this.getAnswers = function() {
        var answers = superGetAnswers.call(this);
        var input = document.getElementById(title + "_other");
        answers["Other"] = input.value;

        return answers;
    };
}

function MultipleSelectQuestion(title, text, options) {
    Question.call(this, title, text);

    var superToHTML = this.toHTML;

    this.toHTML = function() {
        var result = superToHTML.call(this);

        result += '<ol id="' + title + '" type="a">\n';
        for (var counter = 0; counter < options.length; counter++) {
            result += '<li><input type="checkbox" name="' + title + '" value="' + options[counter] + '">' + options[counter] + '</li>\n';
        }
        result += '</ol>\n';
        return result;
    };
    this.getAnswers = function() {
        var answers = {};
        var inputs = document.getElementById(title).getElementsByTagName("input");

        for (var counter = 0; counter < inputs.length; counter++) {
            answers[inputs[counter].value] = inputs[counter].checked;
        }

        return answers; 
    };
} 

function MultipleSelectQuestionOther(title, text, options) {
    MultipleSelectQuestion.call(this, title, text, options);

    var superToHTML = this.toHTML;
    var superGetAnswers = this.getAnswers;    //........

    this.toHTML = function() {
        var result = superToHTML.call(this, title, text, options);

        result += '<p>Other: <input id="' + title + '_other" type="text" name="Other"></p>\n';
        return result;
    };
    this.getAnswers = function() {
        var answers = superGetAnswers.call(this);
        var input = document.getElementById(title + "_other");
        answers["Other"] = input.value;

        return answers;
    };
}

function ShortAnswerQuestion(title, text) {
    Question.call(this, title, text);

    var superToHTML = this.toHTML;

    this.toHTML = function() {
        var result = superToHTML.call(this);

        result += '<p>Please enter your answer here: <input id="' + title + '" type="text" name="' + title + '"></p>\n';
        return result;
    };
    this.getAnswers = function () {
        var answers = {};
        var input = document.getElementById(title);

        answers[title] = input.value;

        return answers;
    };
}


function QuestionSection(title, questions) {
    this.title = title;
    this.toHTML = function() {
        var result = "<h2>Section" + this.number + ": " + title + "</h2>\n";

        for (var counter = 0; counter < questions.length; counter++) {
            result += questions[counter].toHTML();
        }
        return result;
    };
    this.getAnswers = function() {
        var answers = {};

        for (counter = 0; counter < questions.length; counter++) {
            answers[questions[counter].title] = questions[counter].getAnswers();
        }
        return answers;
    };
}

function Survey(title, sections) {
    this.toHTML = function() {
        var result = "<h1>" + title + "</h1>\n";

        for (var counter = 0; counter < sections.length; counter++) {
            result += sections[counter].toHTML();
        }
        result += '<input id="submit" type="button" value="Submit">\n'
        return result;
    };
    this.getAnswers = function() {
        var answers = {};

        for (var counter = 0; counter < sections.length; counter++) {
            answers[sections[counter].title] = sections[counter].getAnswers();
        }
        return answers;
    };
}



window.addEventListener("load", function() {
    var survey = createSurveyQuestions();

    function submit() {
        console.log("Answers Submitted.");
        console.log(survey.getAnswers());
    }

    document.getElementById("survey").innerHTML = survey.toHTML();
    document.getElementById("submit").addEventListener("click", submit);
});