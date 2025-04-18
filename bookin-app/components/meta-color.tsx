// useMetaColor.js
import { useState, useEffect, SetStateAction } from 'react';

const useMetaColor = () => {
  const [metaColor, setMetaColor] = useState('#ffffff');

  useEffect(() => {
    // Update the meta color on mount
    setMetaColor('#09090b');
  }, []);

  const updateMetaColor = (newColor: SetStateAction<string>) => {
    setMetaColor(newColor);
  };

  return { metaColor, updateMetaColor };
};

export default useMetaColor;