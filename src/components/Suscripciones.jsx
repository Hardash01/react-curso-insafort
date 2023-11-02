import { suscripcionesData } from "../data/suscripcionesData"

export function Suscripciones () {

    return (
        <div className="mx-auto max-w-screen-xl px-3 md:px-0 md:w-4/6 my-10">
            <h3 className="text-2xl text-center font-bold my-5">Nuestros Planes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 place-content-center">
                {suscripcionesData.map((subs, index) => (
                    <div key={subs.id} className={`${
                        index === 1
                            ? "bg-gradient-to-br from-sky-200 via-gray-100 to-purple-100 border-sky-400 shadow-lg shadow-sky-500"
                            : "bg-gradient-to-br from-sky-200 via-gray-100 to-purple-100"
                    } flex flex-col items-center justify-between px-9 py-4 rounded-xl border border-gray-300 shadow-lg shadow-slate-400`}>
                        <div>
                            <h3 className="text-center font-semibold">{subs.name}</h3>
                            <p className="text-center text-3xl font-bold text-sky-600 mt-2">{subs.tipo}</p>
                            <ul className="mt-3">
                                {subs.carateristicas.map((caracteristicas, index) => (
                                    <li key={index} role="list" className="list-disc text-sm [text-wrap:balance]">
                                        {caracteristicas}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-wrap flex-col">
                            {index === 1 ? <p className="text-center text-sm bg-white p-1 rounded-lg border border-sky-600 shadow-md shadow-sky-300 uppercase font-bold mt-3">Mas Popular</p> : ''}
                            <p className="text-sky-800 font-black text-5xl mt-3 text-center">${subs.precio}<span className="text-base text-gray-700">/mes</span></p>
                            <button className=" text-white bg-sky-800 px-5 py-1.5 mt-3 rounded-2xl hover:bg-sky-600 transition-colors">Seleccionar</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
} 