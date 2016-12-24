import React from 'react';

class Course extends React.Component {
    handleChange = ( e, key ) => {
        const course = this.props.courses[key];
        const updatedCourse = {
            ...course,
            [e.target.name]: e.target.value
        }
        console.log(updatedCourse);
        this.props.updateCourse( key, updatedCourse );
    }


    render() {
        const details = this.props.details;
        return(
            <li className="single-course">
                <span className="course-wrap__title">Name: </span> 
                <input name="name" type="text" value={details.name} onChange={(e) => this.handleChange(e, this.props.index)} /> 
                <br/>
                <span className="course-wrap__title">Month: </span>
                <input name="month" type="text" value={details.month} onChange={(e) => this.handleChange(e, this.props.index)} />                
                <br/>
                <span className="course-wrap__title">Date: </span>
                <input name="date" type="text" value={details.date} onChange={(e) => this.handleChange(e, this.props.index)} />
                <br/>
                <button className="removeBtn" onClick={() => this.props.removeCourse(this.props.index)}>&times;</button>
            </li>
        )
    }
}

export default Course;