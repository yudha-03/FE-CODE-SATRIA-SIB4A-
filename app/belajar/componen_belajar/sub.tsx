export default function Sub({img, text}: {img : string ; text : string}){
    return(
        <div className="flex gap-2 items-center">
            <img className="h-7" src={img} alt="gambar" />
            <p>{text}</p>
        </div>
    )
}