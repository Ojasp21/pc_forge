import React, { useState } from 'react';
import axios from 'axios';

const LangFlowAPIComponent = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await axios.post('http://localhost:5000/api/langflow', {
        input_value: message,
        output_type: "chat",
        input_type: "chat",
        tweaks: {
          "ChatInput-NllYu": {},
          "Prompt-UocBe": {},
          "ChatOutput-vnxcX": {},
        },
      });
      setResponse(result.data);
    } catch (error) {
      console.error("Error:", error);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <h1>LangFlow API Chat</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Enter your message"
          value={message}
          onChange={handleMessageChange}
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
      </form>

      {response && (
        <div>
          <h2>Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default LangFlowAPIComponent;



