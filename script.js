let startTime;     // Stores the timestamp when the stopwatch starts
let elapsedTime = 0;     // Tracks the total elapsed time in milliseconds
let timerInterval;     // Stores the interval ID for updating the display

//Get reference to the HTML elements
const display = document.querySelector('.display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

// Function to format milliseconds into HH:MM:SS
function formatTime(milliseconds) {
  const hours = Math.floor(milliseconds / 3600000);
  const minutes = Math.floor((milliseconds % 3600000) / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Function to update the displayed time
function updateTime() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  display.textContent = formatTime(elapsedTime);
}

// Start button click handler
startButton.addEventListener('click', () => {
  startTime = Date.now() - elapsedTime;       // Adjust start time to account for paused time
  timerInterval = setInterval(updateTime, 10);     // Update display every 10ms
   startButton.disabled = true;        // Disable start button to prevent multiple starts
   stopButton.disabled = false;        // Enable stop button
});

// Stop button click handler
stopButton.addEventListener('click', () => {
  clearInterval(timerInterval);      // Stop the interval
   startButton.disabled = false;      // Enable start button
   stopButton.disabled = true;      // Disable stop button
});

// rest button click handler
resetButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  elapsedTime = 0;            // Reset elapsed time
  display.textContent = '00:00:00';     // Reset display
   startButton.disabled = false;
  stopButton.disabled = true;
});

// Initialize button states
// stopButton.disabled = true;
