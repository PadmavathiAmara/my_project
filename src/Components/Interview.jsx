import React, { useState } from 'react';
export const Interview = () => {
  const [matches, setMatches] = useState([]);
  const [remainingStudents, setRemainingStudents] = useState(Array.from({ length: 18 }, (_, index) => index + 1));
  const [currentMatch, setCurrentMatch] = useState([]);
  const matchStudents = () => {
    if (remainingStudents.length < 2) {
      console.log("Matching not possible");
      return;
    }
    const randomIndex1 = Math.floor(Math.random() * remainingStudents.length);
    const student1 = remainingStudents[randomIndex1];
    let randomIndex2 = Math.floor(Math.random() * remainingStudents.length);
    while (randomIndex2 === randomIndex1) {
      randomIndex2 = Math.floor(Math.random() * remainingStudents.length);
    }
    const student2 = remainingStudents[randomIndex2];
    setCurrentMatch([student1, student2]);
  };
  const acceptMatch = () => {
    setMatches([...matches, currentMatch]);
    setRemainingStudents(remainingStudents.filter((student) => student !== currentMatch[0] && student !== currentMatch[1]));
    setCurrentMatch([]);
  };
  const rejectMatch = () => {
    setCurrentMatch([]);
  };
  return (
    <div>
      <button onClick={matchStudents}>Match</button>
      {currentMatch.length === 2 && (
        <div>
          <p>Matched: Student {currentMatch[0]} and Student {currentMatch[1]}</p>
          <button onClick={acceptMatch}>Accept</button>
          <button onClick={rejectMatch}>Reject</button>
        </div>
      )}
      <ul>
        {matches.map(([student1, student2], index) => (
          <li key={index}>
            Student {student1} is matched with Student {student2}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Interview;