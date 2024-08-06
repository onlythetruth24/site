document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    const startButton = document.getElementById('start-quiz');

    if (startButton) {
        console.log("Start button found");

        startButton.addEventListener('click', function() {
            console.log("Start button clicked");
            renderQuizQuestions();
            document.getElementById('quiz-form').style.display = 'block';
            document.getElementById('start-container').style.display = 'none';
        });
    } else {
        console.error("Error: Start button (start-quiz) not found");
    }

    function renderQuizQuestions() {
        console.log("Rendering quiz questions");
        const quizForm = document.getElementById('quiz-form');

        // Clear existing content if any
        quizForm.innerHTML = '';

        // Loop through questions array and create HTML elements
        questions.forEach((questionObj, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('quiz-question');

            const questionParagraph = document.createElement('p');
            questionParagraph.textContent = `Question ${index + 1}: ${questionObj.question}`;

            const optionsDiv = document.createElement('div');
            optionsDiv.classList.add('quiz-options');

            questionObj.options.forEach((option) => {
                const label = document.createElement('label');
                label.innerHTML = `<input type="radio" name="question${index}" value="${option.value}"> ${option.text}`;
                optionsDiv.appendChild(label);
            });

            questionDiv.appendChild(questionParagraph);
            questionDiv.appendChild(optionsDiv);
            quizForm.appendChild(questionDiv);
        });

        // Add submit button at the end
        const submitButton = document.createElement('button');
        submitButton.type = 'button';
        submitButton.id = 'quiz-submit';
        submitButton.textContent = 'Submit';
        submitButton.classList.add('quiz-submit-button');
        submitButton.addEventListener('click', checkQuizAnswers);

        quizForm.appendChild(submitButton);
    }

    function checkQuizAnswers() {
        console.log("Submit button clicked");
        const userAnswers = document.querySelectorAll('input[type="radio"]:checked');
        let harrisScore = 0;
        let trumpScore = 0;

        userAnswers.forEach(answer => {
            if (answer.value === 'Harris') {
                harrisScore++;
            } else if (answer.value === 'Trump') {
                trumpScore++;
            }
        });

        console.log("Harris Score:", harrisScore, "Trump Score:", trumpScore);
        displayResults(harrisScore, trumpScore);
    }

    function displayResults(harrisScore, trumpScore) {
        
        console.log("Displaying results:", harrisScore, trumpScore);
        const resultChart = document.getElementById('result-chart');
        resultChart.style.display = 'block';

        const data = {
            labels: ['Harris', 'Trump'],
            datasets: [{
                label: 'Quiz Results',
                data: [harrisScore, trumpScore],
                backgroundColor: ['#2D8BBA', '#D65449'],
                hoverOffset: 4
            }]
        };

        const config = {
            type: 'pie',
            data: data
        };

        if (window.resultChartInstance) {
            window.resultChartInstance.destroy();
        }

        window.resultChartInstance = new Chart(resultChart, config);

        document.getElementById('quiz-form').style.display = 'none';
        const canvas = document.getElementById("resultChart");
        const ctx = canvas.getContext("2d");

        ctx.font = "50px Arial";
        ctx.fillText("Hello World",10,80);
        document.getElementById("backgroundImage").style.backgroundImage="url('results.png')";

    }
});

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));