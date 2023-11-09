export default function TeamMember({ name, role, image, position, affiliation, url, when }) {

    const secondary = ["pi", "affiliated"].includes(role) ? affiliation : when;

    return <>
        <div className="team-member">
            <div className="d-flex">
                <div className="flex-shrink-0">
                    <a href={url} target="_blank">
                        <img className="rounded" src={`/images/profile-photo/${image}`} width={65} />
                    </a>
                </div>
                <div className="flex-grow-1 ms-2 text-start">
                    <p className="text-dark fw-bold mb-0">{name}</p>
                    <p className="small mb-0">{position}</p>
                    <p className="small text-start text-secondary">{secondary}</p>
                </div>
            </div>
        </div >
    </>;
}
