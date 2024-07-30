import {Link} from 'react-router-dom'
function ProductCard({product}) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      <div className="card p-3 rounded">
        <img className="card-img-top mx-auto" alt={product.name} src={product.image[0].image} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            <Link to={'/product/'+product._id}>
              {product.name}
            </Link>
          </h5>
          <div className="ratings mt-auto">
            <div className="rating-outer">
              <div className="rating-inner" style={{width:`${(product.rating/5) * 100}%`}}/>
            </div>
          </div>
          <p className="card-text">${product.price}</p>
          <Link to={'/product/'+product._id} id="view_btn" className="btn btn-block">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
