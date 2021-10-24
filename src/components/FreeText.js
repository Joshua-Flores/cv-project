import React from 'react';

export default function FreeText({ content }) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}
