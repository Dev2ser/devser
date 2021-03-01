import React from 'react';
import { useHistory } from 'react-router-dom';

export function GoBack() {
  const history = useHistory();
  return (
    <button
      onClick={() => {
        history.goBack();
      }}
    >
      Go back
    </button>
  );
}
