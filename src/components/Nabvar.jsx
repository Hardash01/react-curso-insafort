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

export function Nabvar () {

    return (
        <header className="bg-sky-800 ">
            <nav className="mx-auto w-4/6 flex flex-col md:flex-row items-center justify-center md:justify-between py-3">
                <a href="/" className="text-white font-black text-xl">
                    LogoWeb
                </a>
                <ul className="md:flex gap-5 text-white">
                    {enlaces.map(links => (
                        <li key={links.id}>
                            <a href={links.link} className="hover:text-sky-200">
                                {links.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}