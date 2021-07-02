import React from 'react'
import {addDetailItem} from "../../redux/detail/detail.action"
import {withRouter,Link} from "react-router-dom"
import {connect} from "react-redux"
import CustomButton from '../custom button/CustomButton.component'

function DetailButton({item}) {
    
    return (
        <div>
            <Link to="/detail">
                <CustomButton onClick={() => 
                 
                addDetailItem(item)
                //  ,
                //  history.push('/detail')
                }className="detail" >
                    View Details
                </CustomButton>
</Link> 
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addDetailItem(item))
    // ,
    // addDetailItem: item => dispatch(addDetailItem(item))
})

export default withRouter(connect(null, mapDispatchToProps)(DetailButton))

