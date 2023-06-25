import IdUtils from "../utils/id-utils";

function CollapseGroup(props) {

    const id = props.id || IdUtils.generateId(props.title);
    const collapsed = props.collapsed ? "collapsed" : "";
    const show = props.collapsed ? "" : "show";

    return (
        <div className="collapse-group" key={id}>
            <p data-bs-toggle="collapse" className={`mb-0 ${collapsed}`} data-bs-target={`#${id}`} >
                <i className={"bi bi-chevron-right"} /><span className="text-dark">{props.title}</span>
            </p>
            <div className={`content collapse mt-3 ${show}`} id={id}>
                {props.children}
            </div>
        </div>
    );
}

export default CollapseGroup;
