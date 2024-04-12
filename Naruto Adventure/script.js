let dayCounter = 1; // Initial day counter value

function sleep() {
    // Increment the day counter
    dayCounter++;
    // Update the day counter display
    document.getElementById('day').textContent = dayCounter;
}
