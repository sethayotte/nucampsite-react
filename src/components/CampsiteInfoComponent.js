import React, { Component } from 'react';
import { Card, CardBody, CardText, CardTitle, CardImg } from 'reactstrap';

class CampsiteInfo extends Component {
    renderCampsite(campsite) {
        return (
            <div class="col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments(comments) {
        if (comments) {
            return (
                <div className = "col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comment => {
                        return (
                            <div key = {comment.id}>
                                <p>
                                    {comment.text}<br />
                                    {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                                </p>
                            </div>
                        );
                    })}
                </div>
            );
        }
    }

    render() {
    if (this.props.campsite) {
      return (
        <div className="container">
            <div className="row">
            {this.renderCampsite(this.props.campsite)}
            {this.renderComments(this.props.campsite.comments)}
            </div>
        </div>
      );
    }
    return <div></div>;
  }
}

export default CampsiteInfo;