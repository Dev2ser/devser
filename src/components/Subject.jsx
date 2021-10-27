import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { FiEdit } from 'react-icons/fi';
import { db } from '../config/base';
import { getUser } from '../services/Authentication';
import { prefixLink } from '../services/Helpers';
import { openWindow, reloadWindow } from '../services/WindowHandler';
import { Button, TransitionedSlideOver, Form } from './index';

export function Subject({ subject }) {
  const [name, setName] = useState(subject.name);
  const [src, setSrc] = useState(subject.src);
  const [description, setDescription] = useState(subject.description);
  const [isEditing, setIsEditing] = useState(false);

  const user = getUser();
  const userId = user.uid;
  const subjectsRef = db.collection('users').doc(userId).collection('subjects');

  const onSlideOverClose = () => {
    setIsEditing(false);
  };

  const onOpen = () => {
    const link = prefixLink(src);
    openWindow(link);
  };

  const onEdit = () => {
    setIsEditing(true);
  };

  const onUpdate = () => {
    subjectsRef
      .doc(subject.id)
      .set({ ...subject, name, src, description })
      .then(reloadWindow);
  };

  const onDelete = () => {
    subjectsRef.doc(subject.id).delete().then(reloadWindow);
  };

  const onChangeSlideOverState = () => {
    setIsEditing(!isEditing);
  };

  return (
    <React.Fragment>
      <div className="p-4 lg:w-1/3 w-full">
        <div className="h-full bg-gray-200 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
            CATEGORY
          </h2>
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
            {name}
          </h1>
          <p className="leading-relaxed mb-3">
            {description ? description : 'No Discription Provided'}
          </p>
          <button
            onClick={onOpen}
            className="text-indigo-500 inline-flex items-center"
          >
            Open Link
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            <div className="cursor-pointer" onClick={onEdit}>
              <span className="text-gray-600 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
                <button onClick={onEdit}>
                  <FiEdit />
                </button>
              </span>
              <span className="text-gray-600 inline-flex items-center leading-none text-sm outline-none focus:outline-none focus:ring-0">
                <button onClick={onEdit}>Edit</button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <TransitionedSlideOver
        open={isEditing}
        onChangeState={onChangeSlideOverState}
        onClose={onSlideOverClose}
        data={subject}
      >
        <Form
          data={subject}
          name={name}
          src={src}
          description={description}
          setName={setName}
          setSrc={setSrc}
          setDescription={setDescription}
          deletionHandler={onDelete}
          updateHandler={onUpdate}
        />
      </TransitionedSlideOver>
    </React.Fragment>
  );
}

export function RawSubject({ subject }) {
  const [name, setName] = useState(subject.name);
  const [src, setSrc] = useState(subject.src);
  const [description, setDescription] = useState(subject.description);
  const [isEditing, setIsEditing] = useState(false);

  const user = getUser();
  const userId = user.uid;
  const subjectsRef = db.collection('users').doc(userId).collection('subjects');

  const onOpen = () => {
    const link = prefixLink(src);
    openWindow(link);
  };

  const onEdit = () => {
    setIsEditing(true);
  };

  const onUpdate = () => {
    subjectsRef
      .doc(subject.id)
      .set({ ...subject, name, src, description })
      .then(reloadWindow);
  };

  const onDelete = () => {
    subjectsRef.doc(subject.id).delete().then(reloadWindow);
  };

  const onCancel = () => {
    setIsEditing(false);
  };

  return (
    <Fragment>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        value={src}
        onChange={(e) => {
          setSrc(e.target.value);
        }}
      />
      <input
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      {isEditing ? (
        <Fragment>
          <Button onClick={onUpdate} bgcolor="green" color="white">
            Update
          </Button>
          <Button onClick={onDelete} bgcolor="red" color="white">
            Delete
          </Button>
          <Button onClick={onCancel}>Cancel</Button>
        </Fragment>
      ) : (
        <Fragment>
          <Button onClick={onOpen} bgcolor="blue" color="white">
            Open
          </Button>
          <Button onClick={onEdit}>Edit</Button>
        </Fragment>
      )}
    </Fragment>
  );
}

Subject.propTypes = {
  subject: PropTypes.object,
};

RawSubject.propTypes = {
  subject: PropTypes.object,
};
