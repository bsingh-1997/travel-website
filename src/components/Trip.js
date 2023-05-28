import './TripStyles.css'
import TripData from './TripData'
function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destination using google maps
            </p>
            <div className='tripcard'>
                <TripData imgg={"https://c4.wallpaperflare.com/wallpaper/380/120/50/chandra-taal-blue-sky-asia-valley-wallpaper-preview.jpg"} heading={"trip in spiti valley"} text={"soiti vakkey uife bnfae aefijfuhurhfuhfeuedhuedfh"}/>
                
                <TripData imgg={"https://c1.wallpaperflare.com/preview/409/738/507/buddha-statue-langza-village-himachal-pradesh-spiti-valley-snow-mountains-history-village.jpg"} heading={"monestry"} text={"soiti vakkey uife bnfae aefijfuhurhfuhfeuedhuedfh"}/>
                
                <TripData imgg={"https://wallpaperaccess.com/full/3511577.jpg"} heading={"winter spiti "} text={"soiti vakkey uife bnfae aefijfuhurhfuhfeuedhuedfh"}/>
            </div>
        </div>
    )
}
export default Trip