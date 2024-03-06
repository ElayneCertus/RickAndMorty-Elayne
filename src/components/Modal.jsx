import { useState } from "react";
import '../assets/Modal.css'

export const Modal = ({ rym }) => {
 
    const [modals, setModal] = useState(false);

    const openModal = () => { 
        console.log("rym", rym) 
        setModal(true); 
    };
    const cerrarModal = () => {
        setModal(false);
    };

    return (
        <>
            <div className="text-center">
                <button type="button" className="btn btn-primary" onClick={openModal}>Detalle</button>
            </div>

            {
                modals && (
                    <div className="StyContentlmodal"> 
                        <div className="Stylmodal">
                            <div className="btnCerrar">
                                <button type="button" className=" btn btn-light" onClick={cerrarModal}>Cerrar</button>
                            </div>
                            <div className="ContentDescriptionDetalle">
                                <div className="text-center">
                                    <h3><b>{rym.name}</b> </h3>
                                    <img className="styImgModal" src={rym.image} alt="" />
                                </div>
                                <div className="pt-4 pb-2">
                                    <div><label><b>Created:</b> {rym.created.substring(0, 10)} &nbsp; {rym.created.substring(11, 19)}</label></div>
                                    <div><label><b>Origin:</b> {rym.origin.name}</label></div>
                                    <div><label><b>Location:</b> {rym.location.name}</label></div>
                                    <div><label><b>First seen:</b> Episode {rym.episode[0].substring(40, 45)}</label></div>
                                    <div><label><b>Gender:</b> {rym.gender}</label></div>
                                    <div><label><b>Type:</b> {rym.type === "" ? "No tiene tipo" : rym.type}</label></div>
                                    <div><label><b>Species:</b> {rym.species}</label></div>
                                    <label><b>Status:</b> {rym.status}</label>
                                </div>
                                <hr />
                                <div className="pt-2 pb-4">
                                    <h5><b>Episodes</b></h5>

                                    <div>
                                        {rym.episode.map((data) =>
                                            <div key={data}>
                                                <p className="m-0">{data}</p>
                                            </div> 
                                        )}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                )
            }





            {/* {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-[999999] inset-0">

                    <h3>fd</h3>
                </div>
            )} */}
        </>

    )
}







