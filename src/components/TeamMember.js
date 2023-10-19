export default function TeamMember({ name, position, img, url, when }) {

    return <>
        <div className="team-member">
            <div className="d-flex">
                <div className="flex-shrink-0">
                    <a href={url} target="_blank">
                        <img className="rounded" src={`images/profile-photo/${img}`} width={65} />
                    </a>
                </div>
                <div className="flex-grow-1 ms-2 text-start">
                    <p className="text-dark fw-bold mb-0">{name}</p>
                    <p className="small mb-0">{position}</p>
                    <p className="small text-start text-secondary">{when}</p>
                </div>
            </div>
        </div >
    </>;
}
