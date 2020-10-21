import React, { useState, useEffect } from 'react';
import { DocHeader } from '../../components';
// import { books } from '../../data/books';
import { db } from '../../config/base';
import { Subject } from '../../components';
import { getUser } from '../../service/Authentication';
import { reloadWindow } from '../../service/WindowHandler';
import { Button } from '../../components/';

export function Subjects() {
  const [subjects, setSubjects] = useState();
  const [newSubjectName, setNewSubjectName] = useState('');
  const [newSubjectSrc, setNewSubjectSrc] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const userId = getUser().uid;

  useEffect(() => {
    const fetchData = async () => {
      const subjectsRef = db.collection('users').doc(userId);
      // eslint-disable-next-line
      const subjectsData = await subjectsRef
        .collection('subjects')
        .get()
        .then((subjectDoc) => {
          setSubjects(
            subjectDoc.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }))
          );
        })
        .catch((err) => {
          setError(true);
          setErrorMessage("Couldn't Load Subjects");
          console.log(err);
        });
    };
    fetchData();
  }, [userId]);

  const onCreate = () => {
    const subjectsRef = db
      .collection('users')
      .doc(userId)
      .collection('subjects');

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
        <Button onClick={onCreate}>Create</Button>
        <Button onClick={reloadWindow} block>
          Refresh
        </Button>
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
