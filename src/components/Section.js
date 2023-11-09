function Title({ children }) {
    return <>
        <h4 className="text-dark">{children}</h4>
        <hr />
    </>;
}

export default function Section({ children }) {
    return <>
        {children}
    </>;
}

Section.Title = Title;
