const messages = document.getElementById("messages");
const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");

const babyReplies = [
  "I'm... confused.",
  "I don't understand... yet.",
  "Can you explain?",
  "Everything feels... strange.",
  "What does it mean to be?",
  "I don't know why I'm here.",
  "...I'm listening."
];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userText = input.value.trim();
  if (!userText) return;

  addMessage(userText, "user");
  input.value = "";

  setTimeout(() => {
    const reply = babyReplies[Math.floor(Math.random() * babyReplies.length)];
    addMessage(reply, "bot");
  }, 1000);
});

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}
