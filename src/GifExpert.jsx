import {useState} from 'react';
import {AddCategories, GiftGrid} from './Components';

export const GifExpert = () => {
  const [categories, setCategories] = useState(['valorant']);
  const onAddCategories = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpert</h1>
      <AddCategories
        // setCategories={setCategories}
        onNewCategory={onAddCategories}
      />
      {categories.map((category) => (
        <GiftGrid key={category} category={category} />
      ))}
    </>
  );
};
