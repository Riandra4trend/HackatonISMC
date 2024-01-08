// pages/index.tsx

import { useState } from 'react';

const Config = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <div>
      {isEdit ? 
      <div>

      </div>
      : 'Hello, Hell!'}
      <button onClick={handleEdit}>Toggle Text</button>
    </div>
  );
};

export default Config;
