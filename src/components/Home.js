import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import Loader from "./layouts/Loader";
import MetaData from "./layouts/MetaData";
import Product from "./product/Product";
import  {toast} from 'react-toastify';
import Pagination from 'react-js-pagination';
import Carousel from "./layouts/Carousal";
import Announcements from "./layouts/Announcements";
import Contact from "./user/Contact";
import Map from "./layouts/Map";


export  default function Home(){
    const dispatch = useDispatch();
    const {products, loading, error, productsCount, resPerPage} =    useSelector((state) => state.productsState)
    const [currentPage, setCurrentPage] = useState(1);
 
    const setCurrentPageNo = (pageNo) =>{

        setCurrentPage(pageNo)
       
    }

    useEffect(()=>{
        if(error) {
            return toast.error(error,{
                position: toast.POSITION.TOP_RIGHT
            })
        }
        dispatch(getProducts(null, null, null, null, currentPage)) 
    }, [error, dispatch, currentPage])


    return ( <Fragment>
            {loading ? <Loader/>:
                <Fragment>
                    <MetaData title={'Buy Best Products'} />

                    <Announcements/>
                    <Carousel/>

                <div className="container">       
                    <h1 id="products_heading" style={{color:'#2F4F4F'}}>Latest Products</h1>
                    <section id="products" className="container">
                        <div className="row">
                            { products && products.map(product => (
                                <Product col={3} key={product._id}  product={product}/>
                            ))}
                        
                        </div>
                    </section>
                    {productsCount > 0 && productsCount > resPerPage?
                   <div className="d-flex justify-content-center mt-5 pagination-container">
                   <Pagination 
                       activePage={currentPage}
                       onChange={setCurrentPageNo}
                       totalItemsCount={productsCount}
                       itemsCountPerPage={resPerPage}
                       nextPageText={'Next'}
                       firstPageText={'First'}
                       lastPageText={'Last'}
                       itemClass={'page-item'}
                       linkClass={'page-link'}
                   />     
                    </div> : null }
               </div>
                </Fragment>
           }
            <section className='d-flex justify-content-center justify-content-lg-between p-3 border-bottom' style={{ background: 'linear-gradient(90deg, rgba(47,79,79,1) 0%, rgba(75,131,131,1) 60%, rgba(82,164,164,1) 100%)', color: 'white' }}>
                <div className="container d-flex justify-content-between w-100">
                    <Map />
                    <div className="d-flex align-items-center">
                        <div className="mx-2"></div> 
                        <Contact />
                    </div>
                </div>
            </section>
        </Fragment>
    )
}