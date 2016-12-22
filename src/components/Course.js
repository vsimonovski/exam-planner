import React from 'react';

class Course extends React.Component {
    render() {
        const details = this.props.details;
        
        return(
            <li className="single-course">
                <p>{details.name}</p>
                <p>{details.month}</p>
                <p>{details.date}</p>
                <button className="removeBtn" onClick={() => this.props.removeCourse(this.props.index)}>&times;</button>
            </li>
        )
    }
}

export default Course;