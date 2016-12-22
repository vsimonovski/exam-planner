import React from 'react';
import CourseForm from './CourseForm';


class Edit extends React.Component {
    render() {
        return (
            <div className="edit-wrap">
                <h1 className="edit-wrap__title">Exam Planer </h1>
                <CourseForm addCourse={this.props.addCourse}/>
            </div>
        )
    }
}

export default Edit;