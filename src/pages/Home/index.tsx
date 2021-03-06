import React from 'react';
import './Home.css';
import { data } from '../../Mock/data';
import { Card, Banner } from '../../components';

interface Props {}

const Home = (props: Props) => {
	return (
		<div className="home">
			<Banner />
			<div className="home__section">{data.map((house) => <Card key={house.id} house={house} />)}</div>
		
		</div>
	);
};

export default Home;
