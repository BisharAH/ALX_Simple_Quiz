function checkAnswer() {
  // Step 1: Define the correct answer
  const correctAnswer = "4";

  // Step 2: Get the selected answer
  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  // Step 3: Check if an option is selected
  if (!selectedOption) {
    document.getElementById("feedback").textContent = "Please select an answer.";
    return;
  }

  const userAnswer = selectedOption.value;

  // Step 4: Compare and give feedback
  const feedback = document.getElementById("feedback");
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
    feedback.style.color = "#28a745"; // Optional styling
  } else {
    feedback.textContent = "That's incorrect. Try again!";
    feedback.style.color = "#dc3545"; // Optional styling
  }
}

// Step 5: Add event listener
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
