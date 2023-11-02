export function Formulario () {
    const handleButtonClick = () => {
        alert('onClick: Botón izquierdo del ratón');
    }

    const handleMouseOver = () => {
        alert('onMouseOver: Pasar el ratón sobre un elemento');
    }

    const handleMouseOut = () => {
        alert('onMouseOut: Quitar el ratón del elemento');
    }

    const handleKeyPress = () => {
        alert('onKeyPress: Pulsar tecla');
    }

    const handleInputChange = () => {
        alert('onChange: Al cambiar el contenido de un input, textarea o select');
    }

    const handleSubmit = (e) => {
    e.preventDefault();
        alert('onSubmit: Pulsar el botón submit del formulario');
    }

    const handleReset = () => {
        alert('onReset: Pulsar el botón reset del formulario');
    }

    return (
        <div className="px-3 md:px-0">
            <h3 className="text-2xl text-center font-bold">Fomulario de Eventos</h3>

            <div className="bg-gray-300 py-5 my-10 mx-auto max-w-screen-xl md:w-3/6 rounded-xl shadow-xl border border-gray-400 shadow-gray-400">
                <form onSubmit={handleSubmit} onReset={handleReset} className="p-5 flex flex-col gap-5">
                    <div className="flex items-center gap-5">
                        <label htmlFor="">Evento onClick</label>
                        <button onClick={handleButtonClick} className="bg-sky-700 py-2 px-5 rounded-xl text-white font-semibold">Boton Izquierdo</button>
                    </div>
                    <div className=" py-2  grid grid-cols-2 gap-5 rounded-xl text-white text-center font-semibold">
                        <div onMouseOver={handleMouseOver} className="bg-sky-700 p-5 rounded-2xl hover:bg-sky-300">
                            Entrar al elemento
                        </div>
                        <div onMouseOut={handleMouseOut} className="bg-sky-700 p-5 rounded-2xl hover:bg-sky-300">
                            Salir del elemento
                        </div>
                    </div>
                    <input
                        type="text"
                        onKeyPress={handleKeyPress}
                        onChange={handleInputChange}
                        className="p-2 rounded-xl"
                        placeholder="escribe una letra para el evento"
                    />
                    <button type="submit" className="bg-sky-700 py-2 px-5 rounded-xl text-white font-semibold">Submit</button>
                    <button type="reset" className="bg-sky-700 py-2 px-5 rounded-xl text-white font-semibold">Reset</button>
                </form>
            </div>
        </div>
    )
}