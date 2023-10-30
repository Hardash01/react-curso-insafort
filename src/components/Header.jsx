import PropTypes from 'prop-types'

function Header (props) {

    return (
        <div>
            <h1 className="text-center mb-5 text-xl font-bold">{props.title}</h1>
            <p className="text-center">Nombre de Imagen: {props.name}</p>
            <p className="text-center mb-10">Categoria: {props.category}</p>
        </div>
    )
}
Header.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
};

Header.defaultProps = {
    title: "Titulo de la Prop",
    name: "Nombre Predeterminado",
    category: "Edad Predeterminada"
}

export default Header