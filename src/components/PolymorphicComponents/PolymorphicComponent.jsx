import React from 'react';

const PolymorphicComponent = ({ as, children, ...props }) => {
    const Component = as || 'div';

    return (
        <Component {...props}>{children}</Component>
    );
};

export default PolymorphicComponent;

//El polymorphic component, es un componente que nos permite especificar que elemento de React queremos usar como base
//esto nos permite crear un componente que se comporte de diferentes maneras segun la propiedad "as" que le pasemos, ademas de recibir todas
//las propiedades que necesite.

//Video tutorial: https://www.youtube.com/watch?v=xYR9Am9h60k