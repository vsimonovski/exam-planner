import React from 'react';
import Course from './Course';


class View extends React.Component {

    render() {
        return (
            <div className="view-wrap">
                <ul className="list-of-courses">
                    {
                        Object
                        .keys(this.props.course)
                        .map(key => <Course rend={this.render} courses={this.props.course} updateCourse={this.props.updateCourse} removeCourse={this.props.removeCourse} key={key} index={key} details={this.props.course[key]}/>)
                    }
                </ul>
            </div>
        )
    }
}

export default View;