import React, { Component } from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';
import styled from 'styled-components';

const MyButton = styled.button`
	background: red;
	font-size: ${props => (props.huge ? '100px' : '50px')};

	.poop{
		font-size: 100px;
	}
`;

class Page extends Component {
	render() {
		return (
			<div>
				<Meta />
				<Header />
				{ this.props.children }
				<MyButton huge='100'>
					Click Me
					<span className='poop'>poop</span>
				</MyButton>
				<MyButton>
					Click Me
					<span className='poop'>poop</span>
				</MyButton>
			</div>
		);
	}
}

export default Page;