import { Button } from "@mui/material";
import { forwardRef, useState, useImperativeHandle } from "react";

const PartiallyControlledComponent = forwardRef((_, ref) => {
    const [on, setOn] = useState(false);

    useImperativeHandle(ref, () => ({
        toggle: () => setOn(!on)
    }));

    return (
        <Button ref={ref} variant="contained" onClick={() => setOn(!on)}>{on ? 'ON' : 'OFF'}</Button>
    );
});

PartiallyControlledComponent.displayName = 'PartiallyControlledComponent';

export default PartiallyControlledComponent;

//Componentes controlados: Son aquellos que se controlan por medio de estados.

//Componentes no controlados: No se controlan con estados sino que se controlan a si mismos internamente.

//Control declarativo: Es el que se hace por medio de accesorios o props.

//Control imperativo: Se hace por medio de referencias (useRef).

//Un componente parcialmente controlado es aquel que tiene tanto valores controlados como no controlados.
//Esto ocurre cuando algunas partes del estado son manejadas por React y otras por el DOM.

//Video tutorial: https://www.youtube.com/watch?v=jMKUty1BWhE