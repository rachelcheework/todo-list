import React, { useState, useRef, useEffect } from 'react';

const EditableText = ({ initialText }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);
  const inputRef = useRef(null);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleBlur = () => {
    if (text.trim() === ''){
      setText('Double Click to Insert Text Here');
    }
    setIsEditing(false);
    // Save the changes or perform any required actions here
  };

  // Focus the input field when editing starts
  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);


  return (
    <div onDoubleClick={handleDoubleClick}>
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={handleChange}
          onBlur={handleBlur}
          ref={inputRef}
        />
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
};

export default EditableText;