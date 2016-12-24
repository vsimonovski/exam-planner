import React from 'react';

class CourseForm extends React.Component {
    createCourse( e ) {
        e.preventDefault();
        const course = {
            name: this.course_name.value,
            date: this.course_date.value,
            month: this.course_month.value
        }
        this.props.addCourse(course);
        this.courseForm.reset();
    }
    render() {
        return (
            <form ref={(input) => this.courseForm = input} onSubmit={(e) => this.createCourse(e)}>
                <span className="formItemsDesc">Course name:</span>
                <input required className="formItemsField" ref={(input) => this.course_name = input } type="text" />
                <br/>
                <span required className="formItemsDesc">Date of exam:</span>
                <input className="formItemsField" ref={(input) => this.course_date = input } type="text" />
                <br/>
                <span className="formItemsDesc">Month of exam:</span>
                <input required className="formItemsField" ref={(input) => this.course_month = input } type="text" />
                <button className="formBtnAdd" type="submit">Add</button>
            </form>
        )
    }
}

export default CourseForm;