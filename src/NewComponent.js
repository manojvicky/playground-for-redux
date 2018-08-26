import React from 'react';

import AlertBanner from "./AlertBanner/AlertBanner";

const NewComponent = (props)=>{
    return(
        <div>
        <AlertBanner type="warning" config={props.config}/>
        <div>hello</div>
        </div>
    );
}
export default NewComponent;