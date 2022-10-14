import './Activity.scss';
import '../../Static/commonStyles.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCalendar, faCubes, faList } from "@fortawesome/free-solid-svg-icons";

const Activity = () => {

    return (
        <>
            <div className="m-4">
                <div className="header">
                    Activity Timeline
                </div>

                {/* Types of activity timeline  */}
                <div>
                    <div className="sub-header"> Today </div>
                    <ul className="timeline">
                        <li className="timeline-item">
                            <div className="timeline-figure">
                                <span className="tile tile-circle tile-sm"><FontAwesomeIcon icon={faCalendar} /></span>
                            </div>
                            <div className="timeline-body">
                                <div className="media">
                                    <div className="media-body">
                                        <h6 className="timeline-heading selected-component">
                                            <div className="text-link">Management Meeting - W3 evaluation</div>
                                        </h6>
                                        <p className="mb-0">
                                            Jeffrey Wells created a schedule </p>
                                    </div>
                                    <div className="d-none d-sm-block">
                                        <span className="timeline-date">About a minute ago</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <div className="timeline-figure">
                                <span className="tile tile-circle tile-sm"><FontAwesomeIcon icon={faCubes} /></span>
                            </div>
                            <div className="timeline-body">
                                <div className="media">
                                    <div className="media-body">
                                        <h6 className="timeline-heading selected-component">
                                            <div className="text-link">Support Convertation</div>
                                        </h6>
                                        <p className="mb-0">
                                            Anna Vargas logged a chat with team </p>
                                    </div>
                                    <div className="d-none d-sm-block">
                                        <span className="timeline-date">3 hours ago</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="sub-header"> Yesterday </div>
                    <ul className="timeline">
                        <li className="timeline-item">
                            <div className="timeline-figure">
                                <span className="tile tile-circle tile-sm"><FontAwesomeIcon icon={faCubes} /></span>
                            </div>
                            <div className="timeline-body">
                                <div className="media">
                                    <div className="media-body">
                                        <h6 className="timeline-heading selected-component">
                                            <div className="text-link">Daily Report - Dealing targeting</div>
                                        </h6>
                                        <p className="mb-0">
                                            Arthur Carroll created a todo on task </p>
                                    </div>
                                    <div className="d-none d-sm-block">
                                        <span className="timeline-date">8:14pm</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="sub-header">  January 25, 2018 </div>
                    <ul className="timeline">
                        <li className="timeline-item">
                            <div className="timeline-figure">
                                <span className="tile tile-circle tile-sm"> <FontAwesomeIcon icon={faCalendar} /></span>
                            </div>
                            <div className="timeline-body">
                                <div className="media">
                                    <div className="media-body">
                                        <h6 className="timeline-heading selected-component">
                                            <div className="text-link">Project updated by Sara Carr</div>
                                        </h6>
                                        <p className="mb-0">
                                            Sara Carr updated <strong>Online Store App</strong> to Online Store
                                        </p>
                                        <p className="timeline-date d-sm-none"> at 3:21 AM </p>
                                    </div>
                                    <div className="d-none d-sm-block">
                                        <span className="timeline-date">3:21am</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <div className="timeline-figure">
                                <span className="tile tile-circle tile-sm"><FontAwesomeIcon icon={faCubes} /></span>
                            </div>
                            <div className="timeline-body">
                                <div className="media">
                                    <div className="media-body">
                                        <h6 className="timeline-heading selected-component">
                                            <div className="text-link">Someone assigned you to a task</div>
                                        </h6>
                                        <p className="mb-0">
                                            Angela Petersonassign Make lemonade from scratch  to you
                                        </p>
                                        <p className="timeline-date d-sm-none"> at 5:21pm </p>
                                    </div>
                                    <div className="d-none d-sm-block">
                                        <span className="timeline-date">5:21pm</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <div className="timeline-figure">
                                <span className="tile tile-circle tile-sm"><FontAwesomeIcon icon={faList} /></span>
                            </div>
                            <div className="timeline-body">
                                <div className="media">
                                    <div className="media-body">
                                        <h6 className="timeline-heading selected-component">
                                            <div className="text-link">You have new followers</div>
                                        </h6>
                                        <p className="mb-0">
                                            Willie Dixon and 3 others followed you </p>
                                        <p className="timeline-date d-sm-none"> at 10:32pm </p>
                                    </div>
                                    <div className="d-none d-sm-block">
                                        <span className="timeline-date">10:32pm</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Activity;