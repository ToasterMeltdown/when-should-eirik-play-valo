// Set the target date for 2030 (January 1, 2030)
const targetDate = new Date("January 1, 2030 00:00:00").getTime();

// Function to update the countdown every second
function updateCountdown() {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the difference between the target date and current date
    const timeDifference = targetDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Update the countdown text on the page
    document.querySelector(".countdown").innerHTML = `${days} Days &#183; ${hours} Hours &#183; ${minutes} Minutes &#183; ${seconds} Seconds`;

    // If the countdown is over, display a message
    if (timeDifference < 0) {
        document.querySelector(".countdown").innerHTML = "It's 2030! Time has arrived!";
    }
}

// Update the countdown every 1000 milliseconds (1 second)
setInterval(updateCountdown, 1000);