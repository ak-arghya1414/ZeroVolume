let points = localStorage.getItem("points");

if (points === null) {
    points = 0;
} else {
    points = parseInt(points);
}
let checkins = JSON.parse(localStorage.getItem("checkins")) || {};

updatePointsDisplay();

function updatePointsDisplay() {
    document.getElementById("points-display").innerText = "Points: " + points;
}

function checkIn(location) {
    const today = new Date().toISOString().split("T")[0];

    // If location already checked in today
    if (checkins[location] === today) {
        document.getElementById("checkin-message").innerText =
            "You have already checked in at this location today.";
        return;
    }

    // Add points
    points += 10;
    localStorage.setItem("points", points);

    // Record check-in
    checkins[location] = today;
    localStorage.setItem("checkins", JSON.stringify(checkins));

    updatePointsDisplay();

    document.getElementById("checkin-message").innerText =
        "Successfully checked in at " + location + "! +10 points earned.";
}
