import React from "react";

import getConfig from "next/config";

function Company(props) {

    const {basePath} = getConfig().publicRuntimeConfig;

    let children = React.Children.map(props.children, (child, index) => (
        <li className="py-0 my-0 mt-2" key={index}>
            {child.props.children} <span className="text-muted">{child.props.when}</span>
        </li>
    ));

    return (
        <div className="row g-0 mb-3">
            <div className="col-sm-2 me-3 mb-2" style={{ "width": "56px" }}>
                <img
                    src={`${basePath}${props.logo}`}
                    alt="logo"
                    width={96}
                    height={96}
                    className="img-fluid rounded border"
                />
            </div>
            <div className="col-sm-10 border-bottom">
                <div className="card-body py-0 px-0">
                    <h6 className="py-0 my-0 fw-bold">{props.name}</h6>
                    <p className="py-0 my-0">{props.location}</p>
                    <ul className="mt-2">
                        {children}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Company;
