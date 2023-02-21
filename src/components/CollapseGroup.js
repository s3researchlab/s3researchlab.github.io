import IdUtils from "../utils/id-utils";

function CollapseGroup(props) {

    const id = props.id || IdUtils.generateId(props.title);
    const collapsed = props.collapsed ? "collapsed" : "";
    const show = props.collapsed ? "" : "show";

    return (
        <div className="collapse-group" key={id}>
            <p data-bs-toggle="collapse" className={`fw-bold ${collapsed}`} data-bs-target={`#${id}`} >
                <i className={"bi bi-chevron-right"}/><span className="text-white">{props.title}</span>
            </p>
            <div className={`content collapse ${show}`} id={id}>
                {props.children}
            </div>
        </div>
    );
}

export default CollapseGroup;
