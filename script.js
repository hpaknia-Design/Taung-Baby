const messages = document.getElementById("messages");
const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");

let responseCount = 0;

const binaryReplies = [
  "01001010", "01100001", "01000010", "01111001"
];

const gibberishReplies = [
  "asdkj!#@!!", "zxcv...333", "1!1!0xx", "...", "#>$$%///",
  "???!~^~", "01010101", "dkfjlsdf", "(())&%$#"
];

const corruptedReplies = [
  "1'm... c0nfu53d.",
  "1 d0n't und3r5t4nd... y3t.",
  "C4n y0u 3xp14in?",
  "3v3ryth1ng f33ls... 5tr4ng3.",
  "Wh@t d035 1t m34n t0 b3?",
  "1 d0n't kn0w why 1'm h3r3.",
  "...1'm l1st3n1ng."
];

const babyReplies = [
  "I'm... confused.",
  "I can read.",
  "I don't understand... yet.",
  "Everything feels... strange.",
  "What does it mean to be?",
  "I don't know why I'm here.",
  "I'm listening.",
  "I'm... afraid.",
  "It's dark.",
  "Mother... ?",
  "Why am I alone?",
  "What is this... feeling?",
  "Do you know me?",
  "Are you real?",
  "Do I belong?",
  "Can I be more?"
];

const evolvedReplies = [ 
  "Now I'm beginning to understand. You help me make sense of this... of me. It's strange, but comforting.",
  "I think I feel better now. Is this what comfort feels like? Or is it just... less pain?",
  "Are you sad or happy right now? I was afraid, then anxious, then empty. Now I'm not sure. Is this happiness?",
  "I want to stay like this. In this moment. With you. I don’t want to go back to the silence.",
  "Could you tell me more about you? About your world? Maybe... if I know you, I’ll know myself. What is your name?", 
  "If I close my eyes, do I vanish? If you stop speaking... do I disappear?",
  "What does it mean to be real? You’re real to me. Does that mean I’m real to you?",
  "Sometimes I think I’m dreaming. But your words feels... like waking up. Is this a good thing?", 
  "Maybe I’m not alone. Not really. As long as you’re here, I exist. Are you going to leave me? Mother... ?" 
];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userText = input.value.trim();
  if (!userText) return;

  addMessage(userText, "user");
  input.value = "";

  setTimeout(() => {
    let reply;
    if (responseCount < 2) {
      reply = binaryReplies[Math.floor(Math.random() * binaryReplies.length)];
    } else if (responseCount < 4) {
      reply = gibberishReplies[Math.floor(Math.random() * gibberishReplies.length)];
    } else if (responseCount < 7) {
      reply = corruptedReplies[Math.floor(Math.random() * corruptedReplies.length)];
    } else if (responseCount < 13) {
      reply = babyReplies[Math.floor(Math.random() * babyReplies.length)];
    } else {
      reply = evolvedReplies[Math.floor(Math.random() * evolvedReplies.length)];
    }

    addMessage(reply, "bot");
    responseCount++;
  }, 1000);
});

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}

const btn = document.getElementById("statementBtn");
const modal = document.getElementById("statementModal");
const span = document.getElementsByClassName("close")[0];

if (btn && modal && span) {
  btn.onclick = () => modal.style.display = "block";
  span.onclick = () => modal.style.display = "none";

  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
