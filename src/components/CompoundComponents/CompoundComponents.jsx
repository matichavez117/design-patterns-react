import React from 'react';
import { Article, ArticleTitle, ArticleContent, ArticleFooter } from './components/Article';

const CompoundComponents = () => {
    return (
        <>
            <Article style={{ color: '#FFC820' }}>
                <ArticleTitle>Title</ArticleTitle>
                <ArticleContent style={{ color: '#B53EFE' }}>Content</ArticleContent>
                <ArticleFooter>Footer</ArticleFooter>
            </Article>
        </>
    );
};

export default CompoundComponents;

// Compound components es un patron de diseño donde varios componentes se utilizan juntos de modo que comparten entre si estados y propiedades.
// Este patrón se utiliza cuando varios componentes trabajan juntos para tener un estado compartido y manejar la lógica juntos.

// Un ejemplo de componentes compuestos se puede ver en HTML con los elementos <select> y <option>.
// No hacen mucho por sí solos, pero juntos te permiten crear una experiencia completa.

// Este tipo de componentes nos pueden servir, por ejemplo, para evitar hacer un solo componente y pasarle multiples propiedades.
// De esta manera las propiedades se las podemos pasar directamente a cada parte del componente

// Tambien podemos cambiarles los estilos individualmente sin tener que modificar el codigo interno del mismo.

//Video tutorial: https://www.youtube.com/watch?v=fa-QSmdS7Hs