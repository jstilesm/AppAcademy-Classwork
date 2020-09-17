import {connect } from 'react-redux'

import {logout} from '../../actions/session_actions'
import Greeting from './greeting'


const mapStateToProps = state => {
    // debugger
    return {
        currentUser: state.entities.user[state.session.id]
    }
}
// const mapStateToProps = ({ session, entities: {user} }) => {
//     // debugger
//     return {
//         currentUser: user[session.id]
//     };
// };

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})


export default connect(mapStateToProps, mapDispatchToProps)(Greeting);