import React from 'react';


const  BookListItem =(props)=> {
console.log(props)

let url=`http://localhost:8081/${props.id}.jpg`
    return (

      <div className="col col-xs-12 col-md-6 col-lg-4 item">
      <div className="product-grid5">
               <div className='img-container'>

                 <img
                 src={url}
                 className="img-responsive"
                 />
                <span className="product-discount-label">20%</span>

                <ul className="social">
                        <li><a onClick={()=>props.quickSearch(props.id)} ><i className="fa fa-search"></i></a></li>
                         <li><a onClick={()=>props.addItemtoCart(props)}><i className="fa fa-shopping-bag"></i></a></li>
                    </ul>
               </div>
               <h4>{props.name}</h4>
               <p>Rs. {props.price}</p>
               </div>

             </div>

    )


  }


export default BookListItem
