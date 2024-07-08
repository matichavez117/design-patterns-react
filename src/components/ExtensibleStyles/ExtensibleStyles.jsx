const ExtensibleStyles = ({ customStyle }) => {
    return (
        <button style={{ ...baseStyle, ...customStyle }}>Click me!</button>
    );
}

export default ExtensibleStyles;

const baseStyle = {
    color: 'blue',
    padding: '10px',
    margin: '5px',
}