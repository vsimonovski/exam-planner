import React from 'react';

class Course extends React.Component {
    render() {
        const details = this.props.details;
        
        return(
            <li className="single-course">
                <span className="course-wrap__title">Name: </span> {details.name}
                <br/>
                <span className="course-wrap__title">Date: </span>{details.month}
                <br/>
                <span className="course-wrap__title">Month: </span>{details.date}
                <br/>
                <button className="removeBtn" onClick={() => this.props.removeCourse(this.props.index)}>&times;</button>
            </li>
        )
    }
}

export default Course;