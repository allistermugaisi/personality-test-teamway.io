import React from 'react';

const StartScreen = ({ startTest }) => (
	<div className="start-screen">
		<div className="start-screen-text">
			<h4>Proceed and take your test</h4>
		</div>
		<button className="playBtn" onClick={startTest}>
			Start Test
		</button>
	</div>
);

export default StartScreen;
