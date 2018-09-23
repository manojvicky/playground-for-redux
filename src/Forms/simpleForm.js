import React from 'react'
import { Field, reduxForm } from 'redux-form';

// console.log("field", Field);
// console.log("reduxForm", reduxForm);

const SimpleForm = (props) => {
    return(
        <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <label>Name :</label>
                <Field type="text" component="input" name="name"/>
            </div>
        <button type="submit" >Submit</button>
        </form>
        </div>
    );
}

const Sf = reduxForm({
    form: 'simple'
})(SimpleForm);

export default Sf;