
class ImageList extends React.Component {
    //update DOM 時梆定zoom套件事件
    componentDidUpdate(){
        $(".img-main").elevateZoom()
    }
    render() {
        //like var imagesUrl = this.props.imagesUrl;
        const {
            imagesUrl
        } = this.props;
        //先假設過濾縮圖的檔名
        let subImagesUrl = imagesUrl.filter(function (url) {
            return url.indexOf('ProductImageOriginal') == -1;
        });
        //先假設過濾主要圖的檔名
        let mainImageUrl = imagesUrl.filter(function (url) {
            return url.indexOf('ProductImageOriginal') != -1;
        });
        //產生主圖element (別忘了要給key，React才不會有錯誤訊息)
        let mainImageElements = mainImageUrl.map((imgdata, i) =>
            <img key={i} src={imgdata} data-zoom-image={imgdata} className="img-thumbnail img-main" width="313"  height="227" />
        );
    //產生縮圖element (別忘了要給key，React才不會有錯誤訊息) 
        let subImageElements = subImagesUrl.map((imgdata, i) =>
            <img key={i} src={imgdata} className="img-thumbnail" width="45"  height="36" />
        );
//注意因class是關鍵字，所以要改className才能用哦
        return (
            <div className="col-md-3">
                {mainImageElements}
                {subImageElements}
            </div>
            );
}
}

window.App.ImageList = ImageList;