import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function TestPage() {
  const [testData, setTestData] = useState('');

  return (
    <div className="test">
      <h1>My Name is Pravin</h1>
      <h1>Pune</h1>
      <h1>Software Engineer</h1>

    </div>
  );
}