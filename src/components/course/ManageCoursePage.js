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

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }


  componentWillReceiveProps(nextProps)
  {
    console.log('here', this.props.course.id);

    if(this.props.course.id != nextProps.course.id)
    {
      this.setState({course: Object.assign({}, nextProps.course)})
    }
  }


  updateCourseState(event) {
    let field = event.target.name;
    let course = this.state.course;
    course[field] =  event.target.value;
    return this.setState({course: course});
  }


  saveCourse(event)
  {
    event.preventDefault();
    this.props.actions.saveCourse(this.state.course);
    this.context.router.push('/courses');
  }


  render()
  {
    return(
        <CourseForm
          allAuthors={this.props.authors}
          onChange={this.updateCourseState}
          onSave={this.saveCourse}
          course={this.state.course}
          errors={this.state.errors}
        />
    );
  }

}


ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};


ManageCoursePage.contextTypes = {
  router: PropTypes.object.isRequired
};

function getCourseById(courses, id)
{
  let course = courses.filter(course => course.id == id);

  if(course)
    return course[0];

  return null;
}

function mapStateToProps(state, ownProps)
{
  let courseId = ownProps.params.id; //from the path `/course/:id`

  let course = {id:'', watchHref:'', title:'', authorId:'', length: '', category: ''};

  if(courseId && state.courses.length > 0)
  {
    course = getCourseById(state.courses, courseId);
  }

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
