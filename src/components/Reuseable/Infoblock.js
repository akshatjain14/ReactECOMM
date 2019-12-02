import React from 'react'
import Heading from "./Heading"
import { Link } from "gatsby"


export default function Infoblock ({heading})  {
  return (
    <section className=" bg-theme my-5 py-4">
    <div className="container">
        <Heading title={heading} />
    </div>
        <div className="row">
            <div className="col-10 col-sm-8 mx-auto text-white text-center">
             <p className ="lead text-white mb-4">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                eu, pretium quis, sem. Nulla consequat massa quis enim.
                Donec pede justo, fringilla vel, aliquet nec, vulputate
                eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                venenatis vitae, justo. Nulla
             </p>
             <Link to="/about/">
                 <button className="btn btn-warning btn-lg">
                     {heading}
                 </button>
             </Link>

            </div>
        </div>
    </section>
  )
}
