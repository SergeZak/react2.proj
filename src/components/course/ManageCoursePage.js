import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';


class ManageCoursePage extends React.Component{

  constructor(props, content)
  {
    super(props, content);
  }

  render()
  {
    return(
      <h1>Manage Course</h1>
    );
  }

}


ManageCoursePage.propTypes = {
  ////
};

function mapStateToProps(state, ownProps)
{
  return {
    state: state
  }
}

function mapDispatchToProps(dispatch)
{
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)
