function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const currentDate = formatDate(now);

  const timeString = `${hours}:${minutes}:${seconds}`;
  const clockElement = document.getElementById("clock");
  clockElement.textContent = timeString;

  const dateElement = document.getElementById("date");
  dateElement.textContent = currentDate;
}

function formatDate(date) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();
