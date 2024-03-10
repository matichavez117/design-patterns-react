import React from 'react';

const Article = ({ children, ...props }) => {
    return (
        <article {...props}>
            {children}
        </article>
    );
};

const ArticleTitle = ({ children, ...props }) => {
    return (
        <h2 {...props}>{children}</h2>
    );
};

const ArticleContent = ({ children, ...props }) => {
    return (
        <p {...props}>{children}</p>
    );
};

const ArticleFooter = ({ children, ...props }) => {
    return (
        <p {...props}>{children}</p>
    );
};

export { Article, ArticleTitle, ArticleContent, ArticleFooter };

// En este componente se puede compartir logica, cada uno puede tener estados internos o compartirlos por medio de context API, por ejemplo.

// Tambien cada componente tiene propiedades individuales.