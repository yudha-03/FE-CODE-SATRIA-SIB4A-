export default function Sublist({img,text}:{img : string ; text : string ;}){
    return(
        <button className="flex">
            <img className="h-7 brightness-0 invert" src={img} alt="gambar"/>
            <p>{text}</p>
        </button>
    )
}