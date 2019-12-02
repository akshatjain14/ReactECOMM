import React, { Component } from 'react'
import Img from "gatsby-image"
import Heading from "../Reuseable/Heading"
export default class Bundlecart extends Component {
    constructor(props){
        super(props)
        this.state ={
            bundles: props.bundles.edges,
            mybundles: props.bundles.edges,

        }
    }
  render() {
      //console.log(this.state.courses);

    return (
      <section className="py-5">
        <div className="container">
                <Heading title="BUNDLES" />
                <div className="row">
                    {
                        this.state.mybundles.map(({ node }) =>{
                            return(
                                <div key={node.id} className="col-11 col-md-6 d-flex my-3 mx-auto">
                                <Img fixed={node.image.fixed}/>

                                <div className="flex-grow-1 px-3 py-1">
                                    <div className="d-flex justify-content-between">
                                    <h6 className="mb-0">{node.title}</h6>
                                    <h6 className="mb-0 text-success">${node.price}</h6>
                                </div>
                                <button
                                    data-item-id={node.id}
                                    data-item-price={node.price}
                                    data-item-url="https://learncodeonline.in/"
                                    data-item-image={node.image.fixed.src}
                                    data-item-name={node.title}
                                className="btn btn-warning snipcart-add-item text-center">JOIN NOW</button>
                                </div>

                                </div>
                            )
                        })
                    }
                </div>

        </div>

      </section>
    )
  }
}
