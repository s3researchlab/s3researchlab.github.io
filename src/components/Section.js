function Title({ children }) {
    return <>
        <h4 className="text-dark">{children}</h4>
        <hr />
    </>;
}

export default function Section({ children }) {

    if (children[1].props.children.length === 0) {
        return <></>;
    }

    return children;
}

Section.Title = Title;
