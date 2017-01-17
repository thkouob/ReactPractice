/// <reference path="../react/react.js" />
/// <reference path="../react/react-dom.js" />

class ProductItem extends React.Component{
    render(){
        return <div>
                    <div className="row">
                        <div className="col-md-3">1 ImageList</div>
                        <div className="col-md-6">2 Item description</div>
                        <div className="col-md-3">3 Item add to cart</div>
                    </div>
                    <div>
                        <div>4 Item tab</div>
                    </div>
                    <div>
                        <div>5 Item compare</div>
                    </div>
               </div>
    }
}
window.App.ProductItem=ProductItem;