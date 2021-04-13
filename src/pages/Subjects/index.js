import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { IconContext } from 'react-icons';
import { IoMdRefresh, IoIosAddCircleOutline } from 'react-icons/io';
import { ImHome } from 'react-icons/im';
import { DocHeader, Modal, Subject, Header } from '../../components';
import Navigation from '../Portfolio/views/Navigation';
import { db } from '../../config/base';
import { getUser } from '../../service/Authentication';
import { reloadWindow } from '../../service/WindowHandler';

export function Subjects() {
  const [subjects, setSubjects] = useState();
  const [showModal, setShowModal] = useState(false);
  const [newSubjectName, setNewSubjectName] = useState('');
  const [newSubjectSrc, setNewSubjectSrc] = useState('');
  const [newSubjectDescription, setNewSubjectDescription] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const userId = getUser().uid;

  useEffect(() => {
    require('../../utils/tailwind.generated.css');
    const fetchData = async () => {
      const subjectsRef = db.collection('users').doc(userId);
      await subjectsRef
        .collection('subjects')
        .orderBy('created_at', 'desc')
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
  }, []);

  setInterval(() => {
    console.log(subjects);
  }, 4000);

  const onCreate = () => {
    const subjectsRef = db
      .collection('users')
      .doc(userId)
      .collection('subjects');

    if (newSubjectName !== '' && newSubjectSrc !== '') {
      setErrorState(false, '');
      subjectsRef
        .add({
          name: newSubjectName,
          src: newSubjectSrc,
          description: newSubjectDescription,
          created_at: firebase.firestore.Timestamp.now(),
        })
        .then(reloadWindow);
    } else {
      setErrorState(true, 'Missing Fields');
      onChangeModalState();
    }
  };

  const onChangeModalState = () => {
    setShowModal(!showModal);
  };

  const setErrorState = (state, message) => {
    setError(state);
    setErrorMessage(message);
  };
  return (
    <React.Fragment>
      {!showModal ? null : (
        <Modal
          heading="Create Subject"
          actionLabel="Create"
          actionBgColor="bg-indigo-700" // only colors in tailwind.config.js file allowed
          actionHoverBgColor="bg-indigo-600" // only colors in tailwind.config.js file allowed
          actionOutlineColor="ring-indigo-500" // only colors in tailwind.config.js file allowed
          onAction={onCreate}
          onChangeModalState={onChangeModalState}
        >
          <div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-3 sm:col-span-3">
                <label
                  htmlFor="nameInput"
                  className="block text-sm font-medium text-gray-700 text-left"
                >
                  Name
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    id="nameInput"
                    className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md text-sm border-gray-300 pl-2"
                    placeholder="Subject's Name"
                    value={newSubjectName}
                    onChange={(e) => setNewSubjectName(e.target.value)}
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="col-span-3 sm:col-span-3">
                <label
                  htmlFor="linkInput"
                  className="block text-sm font-medium text-gray-700 text-left"
                >
                  Link
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    http://
                  </span>
                  <input
                    type="text"
                    id="linkInput"
                    className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 pl-2"
                    placeholder="www.example.com"
                    value={newSubjectSrc}
                    onChange={(e) => setNewSubjectSrc(e.target.value)}
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="about"
                className="block text-sm font-medium text-gray-700 text-left"
              >
                Description
              </label>
              <div className="mt-1">
                <textarea
                  id="about"
                  rows={4}
                  maxLength="96"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md resize-none"
                  value={newSubjectDescription}
                  onChange={(e) => setNewSubjectDescription(e.target.value)}
                  autoComplete="off"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Brief description for your subject. URLs are hyperlinked.
                Maximum 96 characters allowed.
              </p>
            </div>
          </div>
        </Modal>
      )}
      <DocHeader>Subjects</DocHeader>
      <Navigation />
      <Header title="Subjects" />
      <IconContext.Provider
        value={{
          color: 'rgba(102, 126, 234, 1)',
          className: 'w-12 h-12',
        }}
      >
        <div className="flex w-100 items-center justify-center mt-2">
          <button
            className="focus:outline-none"
            onClick={reloadWindow}
            style={{ marginRight: 'auto', marginLeft: 30 }}
          >
            <IoMdRefresh />
          </button>
          <button
            className="focus:outline-none"
            onClick={onChangeModalState}
            style={{ marginRight: 'auto', marginLeft: -79 }}
          >
            <IoIosAddCircleOutline />
          </button>
          {/* <button
            className="focus:outline-none"
            onClick={onChangeModalState}
            // style={{ marginRight: 'auto', marginLeft: -79 }}
          >
            <ImHome />
          </button> */}
        </div>
        <div className="flex w-100 items-center justify-center mt-2">
          {error && <h4 className="text-red-700">{errorMessage}</h4>}
        </div>
      </IconContext.Provider>
      <section className="m-8 text-gray-700 body-font border border-dashed border-gray-400 rounded min-h-screen">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            {subjects &&
              subjects.map((subject) => (
                <Subject key={subject.id} subject={subject} />
              ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
