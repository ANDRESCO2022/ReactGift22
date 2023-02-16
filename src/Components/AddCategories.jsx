import { useState } from 'react';

export const AddCategories = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');
  const handleOnchange = (e) => {
    setInputValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setInputValue('');
  };

  return (
    <form action="" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="busqueda de  gif"
        value={inputValue}
        onChange={handleOnchange}
      />
    </form>
  );
};
