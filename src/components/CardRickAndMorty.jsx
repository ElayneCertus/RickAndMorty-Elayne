import { useEffect, useState } from "react"
import { getRickAndMorty } from "../actions/RickAndMorty.api"
import '../assets/CardRickAndMorty.css'
import { Modal } from "./Modal"

export const CardRickAndMorty = () => {

    const [RickAndMorty, setRickAndMorty] = useState([])

    useEffect(() => {
        getRickAndMorty().then(res => console.log(res))
        getRickAndMorty().then(res => setRickAndMorty(res))
    }, [])

    return (
        <>
            <div className="StylContent">
                <div className="py-4 text-center">
                    <h2><b>Rick And Morty</b></h2>
                </div>
                <div className="contentGeneralCard">
                    {RickAndMorty.map((rym) =>
                        <div key={rym.id} className="contentCard">

                            <div className="contentImgCard">
                                <img className="styImgCard" src={rym.image} alt="" />
                            </div>
                            <div className="py-4">
                                <h5 className="text-center"><b>{rym.name}</b> </h5>
                                <div><label><b>Location:</b> {rym.location.name}</label></div>
                                <div><label><b>First seen:</b> Episode {rym.episode[0].substring(40, 45)}</label></div>
                                <div><label><b>Type:</b> {rym.type === "" ? "No tiene tipo" : rym.type}</label></div>
                                <label><b>Status:</b> {rym.status}</label>
                            </div>
                            <Modal rym={rym} />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}