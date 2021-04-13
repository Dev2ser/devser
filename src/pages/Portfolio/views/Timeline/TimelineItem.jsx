import React from 'react';
import PropTypes from 'prop-types';

export default function TimelineItem({ data }) {
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <span className="tag" style={{ background: data.category.color }}>
          {data.category.tag}
        </span>
        <time>{data.date}</time>
        <p>{data.text}</p>
        {data.link && (
          <a href={data.link.url} target="_blank" rel="noopener noreferrer">
            {data.link.text}
            <span className="circle" />
          </a>
        )}
      </div>
    </div>
  );
}

TimelineItem.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    category: PropTypes.shape({
      tag: PropTypes.string,
      color: PropTypes.string,
    }).isRequired,
    link: PropTypes.shape({
      url: PropTypes.string,
      text: PropTypes.string,
    }),
  }),
};
