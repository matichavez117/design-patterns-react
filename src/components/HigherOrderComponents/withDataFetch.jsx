
import { useEffect, useState } from "react";

const whitDataFetch = (WrappedComponent) => {
    return function WithDataFetch(props) {
        const [data, setData] = useState([]);
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(null);

        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch('https://pokeapi.co/api/v2/pokemon');
                const data = await response.json();

                setData(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        useEffect(() => {
            fetchData();
        }, []);

        return (
            <WrappedComponent {...{ ...props, data, loading, error }} />
        )
    }
};

export default whitDataFetch;

//Higher order components permite reutilizar logica en varios componentes.

//Un componente de orden superior es una funcion que toma un componente como argumento y devuelve un nuevo componente con toda la logica escrita en el HOC.

//Los HOC permite agregar funcionalidad adicional a un componente sin modificar el codigo del mismo.

//Ejemplo: Se puede utilizar para agrega capacidades de autenticacion o enrutamiento a los componente o
//para agregar un estilo o comportamiento especifico a varios componentes

//Video tutorial: https://www.youtube.com/watch?v=CbZeAP-Etjc