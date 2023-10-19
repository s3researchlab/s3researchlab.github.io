function Title({ children }) {
    return <>
        <h4 className="text-dark">{children}</h4>
        <hr />
    </>;
}

function Section({ children }) {

    return <>
        {children}
    </>;
}

Section.Title = Title;

export default Section;
