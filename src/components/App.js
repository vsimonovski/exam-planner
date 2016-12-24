import React from 'react';
import Edit from './Edit';
import View from './View';
import base from '../base';
class App extends React.Component {
    constructor() {
        super();

        this.state = {
            courses: {}
        }
    }

    componentWillMount() {
        this.ref = base.syncState("mainBase/kursevi"
        , {
            context: this,
            state: 'courses'
        });
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    addCourse = ( course ) => {
        const courses = { ...this.state.courses };
        const timeStamp = Date.now();
        courses[`course-${timeStamp}`] = course;
        this.setState({courses});
    }

    updateCourse = ( key, updatedCourse ) => {
        const courses = { ...this.state.courses };
        courses[key] = updatedCourse;
//        console.log(courses);
        this.setState({ courses });
    } 

    removeCourse = ( key ) => {
        const courses = { ...this.state.courses };
        courses[key] = null;
        this.setState({ courses });
    }

    render() {
        return (
            <div className="app-wrap">
                <Edit addCourse={this.addCourse}/>
                <div className="course-wrap">
                    <h1 className="course-wrap__title">Courses: </h1>
                    <View 
                        course={this.state.courses}
                        removeCourse={this.removeCourse}
                        updateCourse={this.updateCourse}
                    />
                </div>
            </div>
        )
    }
}

export default App;