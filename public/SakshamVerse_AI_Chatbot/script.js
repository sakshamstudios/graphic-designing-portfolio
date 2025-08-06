
function sendMessage() {
  const input = document.getElementById('user-input');
  const chat = document.getElementById('chat');
  const userMessage = input.value.trim();
  if (!userMessage) return;

  const userDiv = document.createElement('div');
  userDiv.className = 'message user';
  userDiv.textContent = userMessage;
  chat.appendChild(userDiv);

  const botDiv = document.createElement('div');
  botDiv.className = 'message bot';
  botDiv.textContent = "🤖 I'm thinking... (actual AI integration can be added)";
  chat.appendChild(botDiv);

  input.value = '';
  chat.scrollTop = chat.scrollHeight;
}
