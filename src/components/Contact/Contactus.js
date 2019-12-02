import React from 'react'
import {FaTelegramPlane} from 'react-icons/fa'
import Heading from '../Reuseable/Heading'


export default function Contactus () {
  return (
    <section className="py-3">
            <Heading title="CONTACT US" />
            <div className="col-10 col-sm-8 mx-auto">
                  <form action="https://formspree.io/myygdqqb" method="POST">
                       <div className="form-group">
                        <input type="text" name="name" id="name" placeholder="YOUR NAME.." className="form-control"/>
                      </div>
                      <div className="form-group">
                        <input type="email" name="email" id="email" placeholder="YOUR EMAIL.." className="form-control"/>
                      </div>
                      <div className="form-group">
                        <input type="text" name="mobile" id="mobile" placeholder="YOUR MOBILE.." className="form-control"/>
                      </div>
                      <div className="form-group">
                        <textarea type="text" name="suggestions" id="suggestion" placeholder="YOUR SUGGESTIONS.." className="form-control"/>
                      </div>
                      <button type="submit" className="btn btn-outline-info btn-block"><h4>SUBMIT<FaTelegramPlane/></h4></button>
                    </form>
            </div>


    </section>
  )
}
