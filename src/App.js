import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const ListItem = ({ content }) => {
	return <div className='rounded'>{content}</div>;
};

function App() {
	const [userInput, setUserInput] = useState('');
	const [itemList, setItemList] = useState([]);
	return (
		<div className='container-fluid'>
			<div id='searchboxContainer' className='row'>
				<input
					className='rounded'
					type='text'
					value={userInput}
					onChange={(event) => {
						setUserInput(event.target.value);
					}}
				/>
				<button
					className='rounded'
					onClick={() => {
						setItemList([...itemList, userInput]);
						setUserInput('');
					}}
				>
					+
				</button>
			</div>
			<div id='notesContainer'>
				{itemList.map((item, index) => {
					return <ListItem content={item} key={index} />;
				})}
			</div>
		</div>
	);
}

export default App;
