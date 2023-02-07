import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function TestPage() {
  const [testData, setTestData] = useState('');

  return (
    <div className="test">
      <h1>{testData}</h1>
    </div>
  );
}