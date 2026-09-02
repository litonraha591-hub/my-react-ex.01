import { use } from "react"
 
    import PhotoCard from "./PhotoCard"

export default function Photos({photoDataPromise}){
const photos =use(photoDataPromise)
console.log(photos)
    return(

        <div>
            <h2>{photos.length}</h2>
            {
                photos.map(photo=><PhotoCard photo={photo}></PhotoCard>)
            }
        </div>
    )
}