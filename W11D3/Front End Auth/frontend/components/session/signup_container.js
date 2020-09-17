import {connect} from 'react-redux'
import {createNewUser } from '../../actions/session'
import Signup from './signup'


const mapDispatchtoProps = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser))
})

// no need for mapStatetoProps for sign in

export default connect(null, mapDispatchtoProps)(Signup);