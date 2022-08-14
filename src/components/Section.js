function Component(props) {

    return (
        <h5 className={`mb-4 ${props.className}`}>{props.name}</h5>
    );
}

export default Component;
