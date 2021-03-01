import React from 'react';
import { timelineData } from '../../../../data/timelineData';
import TimelineItem from './TimelineItem';

export default class Timeline extends React.Component {
  componentDidMount() {
    require('../../scss/Timeline.css');
  }

  render() {
    return (
      <section id="journey">
        <h1 className="timeline-title title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900 text-center">
          My Journey
        </h1>
        {timelineData.length > 0 && (
          <div className="timeline-container">
            {timelineData.map((data, idx) => (
              <TimelineItem data={data} key={idx} />
            ))}
          </div>
        )}
        <h1 className="w-32 mx-auto bg-black text-white rounded text-center mt-4">
          Future
        </h1>
      </section>
    );
  }
}
