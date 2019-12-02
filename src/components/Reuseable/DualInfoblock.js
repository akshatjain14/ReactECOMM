import React from 'react'
import Heading from "./Heading"

export default  function DualInfoblock ({heading})  {
  return (
    <section className="bg-theme my-4 py-4">
    <div className="container">
        <Heading title={heading}/>
        <div className="row">
                <div className="col-lg-8 mx-auto">
                    <p className="lead text-white mb-5 justify">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing
                    elit. Aenean commodo ligula eget dolor. Aenean massa.
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Donec quam felis,
                    ultricies nec, pellentesque eu, pretium quis, sem.
                    Nulla consequat massa quis enim. Donec pede justo,
                    fringilla vel, aliquet nec, vulputate Lorem ipsum dolor
                    sit amet, consectetuer adipiscing elit. Aenean commodo
                    ligula eget dolor. Aenean massa. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec,
                    pellentesque eu, pretium quis, sem. Nulla consequat
                    massa quis enim. Donec pede justo, fringilla vel,
                    aliquet nec, vulputate eget, arcu. In enim justo,
                    rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
                    dictum felis eu pede mollis pretium. Integer tincidunt.
                    Cras dapibus. Vivamus elementum semper nisi. Aenean
                    vulputate eleifend tellus. Aenean leo ligula, porttitor
                    eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                    dapibus in, viverra quis, feugiat a,


                    </p>
                </div>
                <div className="col-lg-4 mx-auto">
                    <div className="card bg-dark">
                        <img src="https://images.pexels.com/photos/2756844/pexels-photo-2756844.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="image goes here"/>
                        <div className="card-body">
                                <h5 className="card-title text-center text-info">Photos</h5>
                                <p className="card-text text-white"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                <a href="#" className="btn btn-warning btn-block">{heading}</a>
                        </div>
                    </div>
                </div>

        </div>
    </div>

    </section>
  )
}
