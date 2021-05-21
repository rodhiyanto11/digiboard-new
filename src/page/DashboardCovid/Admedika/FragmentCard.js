import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const FragmentCard = (props) => {
    return (
        <div className="col-md-2">
            <div class="mb-2 card bg-white ">
                <div className="card-body ">
                    <div className="card-content-header mb-4">
                        <FontAwesomeIcon icon={["fas", "play"]} className="mr-2" />Total Provider
                                    </div>
                    <div className="card-value">
                        4,076,722{props.st}
                                        </div>
                </div>
            </div>
        </div>
    )
}
export default React.memo(FragmentCard)