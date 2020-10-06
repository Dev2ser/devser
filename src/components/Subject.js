import React, { useState, Fragment } from 'react';
import { db } from '../config/base';
import { getUser } from '../service/Authentication';
import { openWindow, reloadWindow } from '../service/WindowHandler';
import { Button } from '.';

export function Subject({ subject }) {
  const [name, setName] = useState(subject.name);
  const [src, setSrc] = useState(subject.src);
  const [isEditing, setIsEditing] = useState(false);

  const user = getUser();
  const userId = user.uid;
  const subjectsRef = db.collection('users').doc(userId).collection('subjects');

  const onOpen = () => {
    openWindow(src);
  };

  const onEdit = () => {
    setIsEditing(true);
  };

  const onUpdate = () => {
    subjectsRef
      .doc(subject.id)
      .set({ ...subject, name, src })
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
      {isEditing ? (
        <Fragment>
          <Button onClick={onUpdate} bgcolor="green">
            Update
          </Button>
          <Button onClick={onDelete} bgcolor="red">
            Delete
          </Button>
          <Button onClick={onCancel}>Cancel</Button>
        </Fragment>
      ) : (
        <Fragment>
          <Button onClick={onOpen} bgcolor="blue">
            Open
          </Button>
          <Button onClick={onEdit}>Edit</Button>
        </Fragment>
      )}
    </Fragment>
  );
}
