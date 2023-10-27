const enlaces = [
    {
        id:1,
        name: "Tienda",
        link: "tienda"
    },
    {
        id:2,
        name: "Nosotros",
        link: "nosotros"
    },
    {
        id:3,
        name: "Contacto",
        link: "contacto"
    }
]

export function Footer () {
    return (
        <footer className="bg-sky-950">
            <section className="max-w-screen-xl mx-auto md:w-4/6 flex items-start md:justify-between py-10">
                <div className="flex flex-col w-1/3">
                    <a href="/" className="text-white font-black text-xl">
                        LogoWeb
                    </a>
                    <p className="text-white [text-wrap:balance] mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, aliquam!</p>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-white text-lg font-bold uppercase">Navegacion</h3>
                    <ul className="md:flex flex-col gap-2 text-white mt-2">
                        {enlaces.map(links => (
                            <li key={links.id}>
                                <a href={links.link} className="hover:text-sky-200">
                                    {links.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-white text-lg font-bold uppercase">contactos</h3>
                    <div className="mt-2">
                        <p className="text-white font-bold">Correo Electronico:</p>
                        <p className="text-white text-sm">edwin98santos@gmail.com</p>
                    </div>
                </div>
            </section>
        </footer>
    )
}