import React, { Component } from "react";
import { Fa, Animation } from "mdbreact";
import { Link } from "react-router-dom";

class FeaturedCard extends Component {
	formatWithComma = price => {
		return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	};

	render() {
		const { condo } = this.props;

		return (
			<div>
				<Animation
					type="jello"
					duration="800ms"
					delay="10s"
					style={{ width: "200px", marginRight: " 58px" }}
					className="animation-wrapper"
				>
					<div className=" featured-card-card">
						<div className="view overlay">
							<img
								className="card-img-top"
								src={
									condo.image1 ||
									"https://carepharmaceuticals.com.au/wp-content/uploads/sites/19/2018/02/placeholder-600x400.png"
								}
								alt="condo-card"
							/>

							<a href="#!">
								<div className="mask rgba-white-slight" />
							</a>
						</div>

						<div className="card-body  red darken-4 featured-card-body">
							<div className="d-flex justify-content-between">
								{" "}
								<Link to={`/detail/${condo.id}`}>
									More
									<Fa icon="angle-double-right" />
								</Link>
								<button
									type="button"
									className=" btn  btn-rounded rent-sell-btn  amber darken-1"
								>
									{condo.sellorrent}
								</button>{" "}
							</div>
							<div className="d-flex flex-column featured-card-body">
								<div className="d-flex flex-row align-items-center">
									<Fa
										icon="money"
										size="lg"
										className="card-icon"
									/>
									<p className="price featured-card-body featured-price">
										{" "}
										{this.formatWithComma(condo.price)}
										Birr{" "}
									</p>
									{condo.sellorrent.toLowerCase() ===
									"for rent" ? (
										<p
											style={{
												fontSize: "13px",
												marginBottom: "2px"
											}}
										>
											{" "}
											/month{" "}
										</p>
									) : (
										<p> </p>
									)}
								</div>
								<div className="d-flex flex-row">
									{" "}
									<Fa
										icon="bed"
										size="lg"
										className="card-icon"
									/>
									<p className="bed-rooms"> {condo.type}</p>{" "}
								</div>
								<div>
									<Fa
										icon="map-marker"
										size="lg"
										className="ml-2 mr-3"
									/>{" "}
									{condo.location}
								</div>
							</div>
						</div>
					</div>
				</Animation>
			</div>
		);
	}
}

export default FeaturedCard;
