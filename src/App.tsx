import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState(`# Welcome to Markdown Previewer`);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const getMarkdownPreview = () => {
    return { __html: marked(markdown) };
  };

  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <div className="container">
        <textarea 
          id="editor" 
          value={markdown} 
          onChange={handleChange} 
          placeholder="Enter Markdown here"
        />
        <div 
          id="preview" 
          dangerouslySetInnerHTML={getMarkdownPreview()} 
        />
      </div>
    </div>
  );
}

export default App;
