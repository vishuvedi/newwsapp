import React, { Component } from 'react'
import Step from './newscomp';
import PropTypes from 'prop-types';
export class news extends Component {
article =[
    {
        "source": {
            "id": null,
            "name": "Moneycontrol"
        },
        "author": null,
        "title": "Loading Current News  ",
        "url": "https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif",
        "publishedAt": "2021-11-17T10:25:23Z",
        "content": "The initial public offering (IPO) of Go Fashion, one of Indias largest womens bottom-wear brands, was subscribed 1.97 percent on November 17. Bids were received for 1.58 crore equity shares against a… [+2336 chars]"
    },
   
]
constructor()
{
    super();
    this.state = {
        article : this.article,
        loading : false
    }
}
 async componentDidMount()
 {
     let url = `https://saurav.tech/NewsAPI/top-headlines/category/${this.props.category}/in.json`;
     let data = await fetch(url);
     let parseData = await data.json()
     console.log(data);
     console.log(parseData);
     this.setState({article : parseData.articles})

 }
    render() {
        return (
          <div className = "container-my-3">
              <h2> Fossil - News </h2>
              <div className = "row">
                  {this.state.article.map((element)=>{
                  return <div className = "col-md-4 "  key = {element.url} >
                      <Step title = {element.title} desc = {element.description}  urlnews = {element.url} imageurl ={element.urlToImage} />
                  </div> })}
              </div>

         </div>

        )
    }
}

export default news

