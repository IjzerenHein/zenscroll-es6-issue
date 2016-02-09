import React from 'react';
import {zenscroll} from 'zenscroll'; // having to use {zenscroll} is weird, should be plain: zenscroll

const data = [
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

];

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			pageIndex: 0
		};
	}

	nextPage(next) {
		this.setState({pageIndex: this.state.pageIndex + (next ? 1 : -1)});
		//scrollTo(0, 0);
		zenscroll.toY(0);
		//zenscroll.to(document.getElementById('questionary'));
	}

	render() {
		const items = [];
		for (let i = Math.max(0, this.props.itemsPerPage * this.state.pageIndex), n = Math.min(data.length, this.props.itemsPerPage * (this.state.pageIndex + 1)); i < n; i++) {
			items.push(<Item key={i % this.props.itemsPerPage} data={data[i]} />);
		}
		return <div id="questionary" className="questionary">
			{items}
			<div>
				<div className="btn" onClick={() => this.nextPage(false)}>Previous</div>
				<div className="btn" onClick={() => this.nextPage(true)}>Next</div>
			</div>
		</div>;
	}
}
App.propTypes = {
	itemsPerPage: React.PropTypes.number
};
App.defaultProps = {
	itemsPerPage: 6
};

class Item extends React.Component {
	constructor() {
		super();
	}
	render() {
		return <div className="item">
			<div className="statement">{this.props.data}</div>
			<div className="option-group">
				<Option size="large" color="green"/>
				<Option size="medium" color="green"/>
				<Option size="small" color="green"/>
				<Option size="small" color="neutral"/>
				<Option size="small" color="purple"/>
				<Option size="medium" color="purple"/>
				<Option size="large" color="purple"/>
			</div>
		</div>
	}
}

const Option = (props) => <div className={'option ' + props.size + ' ' + props.color} />
