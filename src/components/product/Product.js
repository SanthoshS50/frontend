import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Product({ product }) {
    // console.log(product)
    const [hovered, setHovered] = useState(false);

    return (
        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
    <div className={`card p-3 rounded ${hovered ? 'shadow-lg' : ''}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        {product.images.length > 0 &&
            <div style={{width: '100%', height: '250px', overflow: 'hidden'}}>
                <img
                    className="card-img-top mx-auto"
                    src={product.images[0].image}
                    alt={product.name}
                    style={{objectFit: 'cover', width: '100%', height: '100%'}}
                />
            </div>
        }
        <div className="card-body d-flex flex-column">
            <h5 className="card-title">
                <Link to={`/product/${product._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>{product.name}</Link>
            </h5>
            <div className="ratings mt-auto">
                <div className="rating-outer">
                    <div className="rating-inner" style={{ width: `${(product.ratings / 5) * 100}%` }}></div>
                </div>
                <span id="no_of_reviews">({product.numOfReviews} Reviews)</span>
            </div>
            <p className="card-text">${product.price}</p>
            <Link to={`/product/${product._id}`} id="view_btn" className="btn btn-block">View Details</Link>
        </div>
    </div>
</div>

    );
}
