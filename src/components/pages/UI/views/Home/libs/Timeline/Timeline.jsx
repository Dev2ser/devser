import React from 'react';
import timelineData from '../../../../../../../data/timelineData';
import TimelineItem from './TimelineItem';
// import '../../css/Timeline.css';

// const Timeline = () =>
// 	timelineData.length > 0 && (
// 		<div className="timeline-container">
// 			{timelineData.map((data, idx) => <TimelineItem data={data} key={idx} />)}
// 		</div>
// 	);

class Timeline extends React.Component {
	componentDidMount() {
		require('../../css/Timeline.css');
	}

	render() {
		return (
			<React.Fragment>
				{timelineData.length > 0 && (
					<div className="timeline-container">
						{timelineData.map((data, idx) => <TimelineItem data={data} key={idx} />)}
					</div>
				)}
			</React.Fragment>
		);
	}
}
export default Timeline;