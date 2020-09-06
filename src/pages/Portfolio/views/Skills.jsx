import React, { Component } from 'react';
import { skillsData } from '../../../data/skillsData';

export default class Skills extends Component {
  render() {
    return (
      <div>
        {skillsData.map((skill) => {
          return (
            <div style={{ display: 'inline-block' }}>
              <h1>{skill.name}</h1>
              <img src={skill.imgURL} alt=""></img>
            </div>
          );
        })}
      </div>
    );
  }
}
