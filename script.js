document.getElementById('sendBtn').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;
    if (userInput) {
        const conversationDiv = document.getElementById('conversation');
        const userMessage = document.createElement('p');
        userMessage.textContent = "You: " + userInput;
        conversationDiv.appendChild(userMessage);
        document.getElementById('userInput').value = '';
        // Later we'll send this input to the backend and display the AI's response
    }
});

