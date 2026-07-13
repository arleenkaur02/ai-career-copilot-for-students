const analyzeButton = document.querySelector("#analyze-button");
const scoreValue = document.querySelector("#score-value");
const scoreRingValue = document.querySelector("#score-ring-value");
const scoreRing = document.querySelector(".score-ring");
const waitlistForm = document.querySelector(".waitlist-form");

analyzeButton?.addEventListener("click", () => {
  const scores = [78, 84, 91];
  const nextScore = scores[(scores.indexOf(Number(scoreValue.textContent)) + 1) % scores.length];

  scoreValue.textContent = nextScore;
  scoreRingValue.textContent = `${nextScore}%`;
  scoreRing.style.background = `conic-gradient(var(--gold) ${nextScore}%, rgba(255, 255, 255, 0.16) 0)`;
  analyzeButton.textContent = "Analysis refreshed";

  window.setTimeout(() => {
    analyzeButton.textContent = "Analyze job";
  }, 1200);
});

waitlistForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = waitlistForm.querySelector("button");
  button.textContent = "Request received";
  button.disabled = true;
});
