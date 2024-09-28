document.addEventListener('DOMContentLoaded', () => {
    const dotDisplay = document.getElementById('dot-display');
    const resultsDisplay = document.getElementById('results');
    const scoreDisplay = document.getElementById('score');
    const averageRTDisplay = document.getElementById('average-rt');
    const feedbackDisplay = document.getElementById('feedback');
    const resetButton = document.getElementById('reset-btn');
    const startButtonContainer = document.getElementById('start-button-container');
    const startButton = document.getElementById('start-btn');

    let totalTrials = 20; // Total number of trials
    let currentTrial = 0; // Current trial counter
    let correctResponses = 0; // Count correct responses
    let reactionTimes = []; // Store reaction times

    let acceptingResponses = false; // Flag to control key press handling

    // Stimuli variables
    const stimuliPairs = [
        { left: 'cat.png', right: 'chair.png' },
        { left: 'dog.png', right: 'lamp.png' },
        { left: 'bird.png', right: 'book.png' },
        { left: 'fish.png', right: 'cup.png' }
    ];
    const dotSide = ['left', 'right']; // Possible sides for dot
    const fixationDuration = 500; // Fixation cross duration in ms
    const stimuliDuration = 1000; // Duration for stimuli in ms

    // Function to generate a new set of stimuli
    function generateTrial() {
        if (currentTrial >= totalTrials) {
            displayResults(); // Show results after the last trial
            return;
        }

        acceptingResponses = false; // Disable response handling during fixation and stimuli
        showFixationCross(); // Show fixation cross

        setTimeout(() => {
            showStimuli(); // Show stimuli
            setTimeout(() => {
                showDot(); // Show dot after stimuli
            }, stimuliDuration);
        }, fixationDuration);
    }

    // Function to show fixation cross
    function showFixationCross() {
        dotDisplay.innerHTML = `
            <div class="dot-section left"></div>
            <div class="dot-section middle">
                <div class="fixation">+</div>
            </div>
            <div class="dot-section right"></div>
        `;
    }

    // Function to show stimuli
    function showStimuli() {
        const stimuli = stimuliPairs[Math.floor(Math.random() * stimuliPairs.length)]; // Random stimuli pair
        dotDisplay.innerHTML = `
            <div class="dot-section left">
                <img src="../assets/${stimuli.left}" alt="Left Stimulus" class="stimulus-img">
            </div>
            <div class="dot-section middle">
            </div>
            <div class="dot-section right">
                <img src="../assets/${stimuli.right}" alt="Right Stimulus" class="stimulus-img">
            </div>
        `;
        dotDisplay.dataset.correctSide = ''; // Clear previous correct side
    }

    // Function to show dot
    function showDot() {
        const side = dotSide[Math.floor(Math.random() * dotSide.length)]; // Random side for dot
        const dotPositionClass = side === 'left' ? 'left' : 'right'; // Determine position class
        dotDisplay.innerHTML = `
            <div class="dot-section left">
                ${side === 'left' ? '<div class="dot">•</div>' : ''}
            </div>
            <div class="dot-section middle">
            </div>
            <div class="dot-section right">
                ${side === 'right' ? '<div class="dot">•</div>' : ''}
            </div>
        `;
        dotDisplay.dataset.correctSide = side; // Set the correct side for response checking
        startTime = new Date().getTime(); // Start reaction time measurement
        acceptingResponses = true; // Enable response handling after dot is shown
    }

    // Function to handle user response
    function handleResponse(event) {
        if (!acceptingResponses) return; // Ignore key presses if not accepting responses

        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            const correctKey = dotDisplay.dataset.correctSide === 'left' ? 'ArrowLeft' : 'ArrowRight';
            const reactionTime = new Date().getTime() - startTime; // Measure reaction time

            if (event.key === correctKey) {
                correctResponses++; // Count correct responses
                reactionTimes.push(reactionTime); // Save reaction time
            }

            currentTrial++; // Move to the next trial
            generateTrial(); // Start the next trial
        }
    }

    // Function to display results
    function displayResults() {
        dotDisplay.textContent = ''; // Clear fixation cross when task ends
        dotDisplay.classList.add('hidden'); // Hide dot display
        resultsDisplay.classList.remove('hidden'); // Show results

        // Calculate average reaction time
        const averageRT = reactionTimes.length ? (reactionTimes.reduce((a, b) => a + b, 0) / reactionTimes.length).toFixed(2) : 'N/A';
        scoreDisplay.textContent = `Total Correct Responses: ${correctResponses} / ${totalTrials}`;
        averageRTDisplay.textContent = `Average Reaction Time: ${averageRT} ms`;

        // Display feedback
        let feedbackMessage = '';
        if (correctResponses >= 15) {
            feedbackMessage = 'Great job! You responded accurately to most of the trials.';
        } else {
            feedbackMessage = 'This task can be challenging. Try focusing on the fixation cross to improve your performance.';
        }
        feedbackDisplay.textContent = feedbackMessage;
    }

    // Function to start the task
    function startTask() {
        startButtonContainer.classList.add('hidden'); // Hide start button container
        resultsDisplay.classList.add('hidden'); // Hide results
        dotDisplay.classList.remove('hidden'); // Show dot display
        correctResponses = 0; // Reset correct responses
        currentTrial = 0; // Reset trial counter
        reactionTimes = []; // Reset reaction times
        generateTrial(); // Start generating trials
    }

    // Function to reset the task
    function resetTask() {
        resultsDisplay.classList.add('hidden'); // Hide results
        dotDisplay.textContent = ''; // Clear dot display
        startButtonContainer.classList.remove('hidden'); // Show start button
        dotDisplay.classList.add('hidden'); // Hide dot display
        currentTrial = 0; // Reset trial counter
        correctResponses = 0; // Reset correct responses
        reactionTimes = []; // Reset reaction times
    }

    // Event listeners
    startButton.addEventListener('click', startTask);
    resetButton.addEventListener('click', resetTask);
    document.addEventListener('keydown', handleResponse);
});
