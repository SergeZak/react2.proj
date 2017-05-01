import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';


class ManageCoursePage extends React.Component{

  constructor(props, content)
  {
    super(props, content);

    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {}
    };
  }

  render()
  {
    return(
        <CourseForm
          allAuthors={this.props.authors}
          //allAuthors={[]}
          course={this.state.course}
          errors={this.state.errors}
        />
    );
  }

}


ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps)
{

  let course = {id:'', watchHref:'', title:'', authorId:'', length: '', category: ''};

  let authorsFormattedForDropdown = state.authors.map(author=>{
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });

  return {
    course: course,
    authors: authorsFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch)
{
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
