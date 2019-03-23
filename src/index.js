/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Clipboard } from 'react-native';

export default () => {
  const [content, setContent] = useState(null);

  async function getContent() {
    const data = await Clipboard.getString();
    setContent(data);
  }

  function updateContent(data) {
    if (typeof data === 'string') {
      Clipboard.setString(data);
      setContent(data);
    }
    return content;
  }

  useEffect(() => getContent(), []);

  return [content, updateContent];
};
