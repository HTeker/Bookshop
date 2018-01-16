import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';

import Page from '../Page';
import CardContainer from '../CardContainer';

import WishlistHelper from '../../helpers/WishlistHelper';

const products = [{
        id: "0007461216",
        name: "Mere Christianity",
        description: "One of the most popular and beloved introductions to the concept of faith ever written, `Mere Christianity' has sold millions of copies worldwide.The book brings together C.S. Lewis's legendary radio broadcasts during the war years, in which he set out simply to `explain and defend the belief that has been common to nearly all Christians at all times'.Rejecting the boundaries that divide Christianity's many denominations, `Mere Christianity' provides an unequalled opportunity for believers and nonbelievers alike to absorb a powerful, rational case for the Christian faith.",
        price: 9.07,
        imgUrl: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0074/9780007461219.jpg",
        stock: 0,
        deliveryDays: 5,
        createdAt: "2018-01-15T17:27:37.000Z",
        updatedAt: "2018-01-15T17:27:37.000Z"
    },
    {
        id: "000819680X",
        name: "How to Build a Car : The Autobiography of the World's Greatest Formula 1 Designer",
        description: "'Adrian has a unique gift for understanding drivers and racing cars. He is ultra competitive but never forgets to have fun. An immensely likeable man.' Damon Hill The world's foremost designer in Formula One, Adrian Newey OBE is arguably one of Britain's greatest engineers and this is his fascinating, powerful memoir. How to Build a Car explores the story of Adrian's unrivalled 35-year career in Formula One through the prism of the cars he has designed, the drivers he has worked alongside and the races in which he's been involved. A true engineering genius, even in adolescence Adrian's thoughts naturally emerged in shape and form - he began sketching his own car designs at the age of 12 and took a welding course in his school summer holidays. From his early career in IndyCar racing and on to his unparalleled success in Formula One, we learn in comprehensive, engaging and highly entertaining detail how a car actually works. Adrian has designed for the likes of Mario Andretti, Nigel Mansell, Alain Prost, Damon Hill, David Coulthard, Mika Hakkinen, Mark Webber and Sebastian Vettel, always with a shark-like purity of purpose: to make the car go faster. And while his career has been marked by unbelievable triumphs, there have also been deep tragedies; most notably Ayrton Senna's death during his time at Williams in 1994. Beautifully illustrated with never-before-seen drawings, How to Build a Car encapsulates, through Adrian's remarkable life story, precisely what makes Formula One so thrilling - its potential for the total synchronicity of man and machine, the perfect combination of style, efficiency and speed.",
        price: 14.91,
        imgUrl: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0081/9780008196806.jpg",
        stock: 0,
        deliveryDays: 5,
        createdAt: "2018-01-15T17:27:37.000Z",
        updatedAt: "2018-01-15T17:27:37.000Z"
    },
    {
        id: "000825785X",
        name: "The Grand Tour Guide to the World",
        description: "The world is a big place full of interesting things. And The Grand Tour has seen some of them. That's why few people are better placed to lead you around this vast planet of ours than Jeremy Clarkson, Richard Hammond and James May. As long as you don't mind getting hot and lost. Welcome, everyone, to The Grand Tour Guide to The World. In this indispensable guide, you will find an abundance of information, most of which is probably wrong and possibly dangerous. As well as occasionally accurate guides to the places visited on the show, you'll find exclusive interviews with the presenters and discover their favourite locations for car-based cocking about. As well as being a factually dubious encyclopaedia, The Grand Tour Guide to the World is also a travel companion for those of you who have been inspired by the Grand Tour circus. You'll find tips on how to sing like a native in the Bahamas, how to speak Welsh (wrongly), and how to navigate the magic roundabout in Swindon. On top of all this, we reveal the world's fastest cop cars and the greatest car makers. And there's a picture of James May in an anorak.",
        price: 14.91,
        imgUrl: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0082/9780008257859.jpg",
        stock: 0,
        deliveryDays: 5,
        createdAt: "2018-01-15T17:27:37.000Z",
        updatedAt: "2018-01-15T17:27:37.000Z"
    }];

class WishlistDetail extends Component {

	constructor(props){
		super(props);

		this.state = {
			wishlist: null,
			products: []
		};
	}

	componentDidMount(){
		this.setState({wishlist: WishlistHelper.getWishlistById(this.props.match.params.id)});
		//this.setState({products: WishlistHelper.getProductsOfWishlistById(this.props.match.params.id)});
		this.setState({products: products});
	}

	render(){
		return (
			<Page id="wishlist-detail">
				<Row>
					<Col></Col>
					<Col>
						<CardContainer>
							{(this.state.wishlist) ?
								<h3>{this.state.wishlist.name}</h3>
							: null }
						</CardContainer>

						{(this.state.products.length > 0) ?
							(this.state.products.map(function(product){
								return (
									<CardContainer>
										{product.name}
									</CardContainer>
								);
							}))
						: null }
					</Col>
					<Col></Col>
				</Row>
			</Page>
		);
	}
}

export default WishlistDetail;