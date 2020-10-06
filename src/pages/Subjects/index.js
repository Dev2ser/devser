import React, { useState, useEffect } from 'react';
import { DocHeader } from '../../components';
// import { books } from '../../data/books';
import { db } from '../../config/base';
import { Subject } from '../../components';
import { getUser } from '../../service/Authentication';
import { reloadWindow } from '../../service/WindowHandler';

export function Subjects() {
  const [subjects, setSubjects] = useState();
  const [newSubjectName, setNewSubjectName] = useState('');
  const [newSubjectSrc, setNewSubjectSrc] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const user = getUser();
  const userId = user.uid;
  const subjectsRef = db.collection('users').doc(userId).collection('subjects');

  useEffect(() => {
    const fetchData = async () => {
      const subjectsDocs = await subjectsRef
        .get()
        .then((subjectDoc) => {
          setSubjects(
            subjectDoc.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
        })
        .catch((err) => {
          setError(true);
          setErrorMessage("Couldn't Load Subjects");
          console.log(err);
        });
    };
    fetchData();
  }, [subjectsRef, subjects, setSubjects]);

  const onCreate = () => {
    if (newSubjectName !== '' && newSubjectSrc !== '') {
      setError(false);
      setErrorMessage('');
      subjectsRef
        .add({ name: newSubjectName, src: newSubjectSrc })
        .then(reloadWindow);
    } else {
      setError(true);
      setErrorMessage('Missing Fields');
    }
  };

  return (
    <React.Fragment>
      <DocHeader>Subjects</DocHeader>
      <ul>
        <input
          value={newSubjectName}
          onChange={(e) => setNewSubjectName(e.target.value)}
        />
        <input
          value={newSubjectSrc}
          onChange={(e) => setNewSubjectSrc(e.target.value)}
        />
        <button onClick={onCreate}>Create</button>
        {error && <h4>{errorMessage}</h4>}
        {subjects &&
          subjects.map((subject) => (
            <li key={subject.id}>
              <Subject subject={subject} />
            </li>
          ))}
      </ul>
    </React.Fragment>
  );
}
