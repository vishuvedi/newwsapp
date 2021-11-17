import React, { Component } from 'react'

export class newscomp extends Component {
    render() {
        let {title , desc , imageurl,urlnews}  = this.props;

        return (
            <>

                <div className="card"  style={{width:"18rem"}}>
  <img src={imageurl} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{desc}</p>
    <a href = {urlnews} target = "_blank" class="btn btn-primary">Read More </a>
  </div>
</div> 
            </>
        )
    }
}

export default newscomp
