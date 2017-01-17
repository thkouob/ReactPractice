/// <reference path="../react/react.js" />
/// <reference path="../react/react-dom.js" />
/// <reference path="../jquery-1.10.2.js" />

//like var ImageList = window.App.ImageList;
const {
    ImageList
} = window.App;
class ProductItem extends React.Component{
    constructor(props){
    super(props)
        //initial imagesUrl to state
        this.state = {
            imagesUrl: []
        }
    }
    //get Server data
    componentDidMount() {
        let self=this;
        $.getJSON('/home/GetItemLeftData',{},function (data) { 
            self.setState({
                imagesUrl: data.ItemDetail.Image
            })
        })
    }
    render(){
        let imagesUrl=[];
        imagesUrl=this.getImages(this.state.imagesUrl);
        return <div>
                    <div className="row">
                           //div替換ImageList component
                        <ImageList imagesUrl={imagesUrl} />
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
    //div替換ImageList component
    getImages(data) {
        if (data && Object.prototype.toString.call(data) !== '[object Array]') {
            let patterns = data.ImagePathPattern;
            let names = data.ItemCellImageName.split(',')
            let imagesUrl = [];

            patterns.forEach(function (value, i, array) {
                var urlinfo = value.PathPattern.replace('{Size}', value.Size).replace('{ImageName}', names[i]);
                imagesUrl.push(urlinfo);
            }, patterns)
            return imagesUrl;
        }
        return [];
    }
}

window.App.ProductItem=ProductItem;