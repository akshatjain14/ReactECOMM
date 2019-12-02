import React, { Component } from 'react'
import Img from "gatsby-image"
import Heading from "../Reuseable/Heading"

const getCaty = items => {
    let holdItems = items.map( items =>{
        return items.node.category
    })
    let holdCategories = new Set(holdItems)
    let categories = Array.from(holdCategories)
    categories =['all',...categories]
    return categories
}
export default class Coursecart extends Component {
    constructor(props){
        super(props)
        this.state ={
            courses: props.courses.edges,
            mycourses: props.courses.edges,
            mycategories: getCaty(props.courses.edges),

        }
    }
    catyClicked = category => {
        let keepItsafe = [...this.state.courses]
        if(category === 'all'){
            this.setState(() => {
                return{
                    mycourses: keepItsafe
                }
            })
        }else{
            let holdme = keepItsafe.filter(({node}) => node.category === category)
            this.setState(() => {
                return{
                    mycourses: holdme
                }
            })
        }

    }
  render() {
      //console.log(this.state.courses);

    return (
      <section className="py-5">
        <div className="container">
                <Heading title="COURSES" />
                <div className="col-10 mx-auto text-center">
                {
                    this.state.mycategories.map((category,index) =>{
                        return(
                            <button
                            type="button"
                            className="btn btn-warning m-3 px-3"
                            key={index}
                            onClick={()=>{
                                this.catyClicked(category)
                            }
                            }>
                                {category}
                            </button>
                        )
                    })
                }

                </div>
                <div className="row">
                    {
                        this.state.mycourses.map(({ node }) =>{
                            return(
                                <div key={node.id} className="col-11 col-md-6 d-flex my-3 mx-auto">
                                <Img fixed={node.image.fixed}/>
                                <div className="flex-grow-1 px-3 py-1">
                                    <div className="d-flex justify-content-between">
                                    <h6 className="mb-0">{node.title}</h6>
                                    <h6 className="mb-0 text-success">${node.price}</h6>
                                </div>
                                <p className="text-muted">
                                    <small>{node.description.description}</small>
                                </p>
                                <button
                                    data-item-id={node.id}
                                    data-item-price={node.price}
                                    data-item-url="https://learncodeonline.in/"
                                    data-item-image={node.image.fixed.src}
                                    data-item-name={node.title}
                                className="btn btn-warning snipcart-add-item">JOIN NOW</button>
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
