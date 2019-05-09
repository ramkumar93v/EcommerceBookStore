import React from 'react';


const  CheckoutItem =(props)=> {
console.log(props)

let url=`http://localhost:8081/${props.id}.jpg`
    return (

      <li className={"items " + (props.evenClass ? 'odd' : 'even')}>

    <div className="infoWrap">
        <div className="cartSection">
        <img src={url} alt="" className="itemImg" />
          <p className="itemNumber">#QUE-007544-002</p>
          <h3>{props.name}</h3>

           <p> <input type="text"  className="qty" value={props.nos}/> x {props.price}</p>

          <p className="stockStatus"> In Stock</p>
        </div>


        <div className="prodTotal cartSection">
          <p>Rs. {props.nos * props.price}</p>
        </div>
              <div className="cartSection removeWrap">
           <a href="#" className="remove">x</a>
        </div>
      </div>
      </li>

    )


  }


export default CheckoutItem
