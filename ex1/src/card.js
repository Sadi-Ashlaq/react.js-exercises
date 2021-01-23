import React from 'react';
import './card.css';

class Card extends React.Component {
  render() {
    return (
      <div className="wrapper">
          <div className="sub-con">
            <a href="#" alt="edit profile icon"><i className="fas fa-pen pen"></i></a>
            <img src={this.props.user.image} alt="test" className="image-top ">
            </img>
          </div>
           <img src={this.props.user.profileImage} alt="test" className="profile-img ">
            </img>
          <div className="container">
          <div className="content">
          <div className="sub-content">
            <h1>{this.props.user.fullName}</h1>
            <p>{this.props.user.work}</p>
            <span className="location"><i className="fa fa-map-marker" aria-hidden="true"></i>{this.props.user.location}</span>
            <p>{this.props.user.info}</p>
          </div>
          <div className="data">
            <div className="inner-data">
              <a href={this.props.user.facebook} alt="facebook icon"><i  className="fab fa-facebook icon"></i></a>
            </div>
            <div className="inner-data">
              <a href={this.props.user.linkedin} alt="instagram icon"><i className="fab fa-linkedin icon"></i></a>            </div>
            <div className="inner-data">
              <a href={this.props.user.github} alt="githb icon"><i className="fab fa-github icon"></i></a>            </div>
          </div>
          <div href="#" className="btn">Contact me</div>
        </div>
          </div>
      </div>
    );
  }
}

export default Card;


