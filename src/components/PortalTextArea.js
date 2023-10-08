import React from 'react';
import  ReactDOM  from 'react-dom';

//complete this function using portals
const PortalTextArea=react.forwardRef((props, ref)=>{
    return (
        <div id="portal-textfield">
            <textarea id="textarea" ref={ref}></textarea>
        </div>
    );
});
export default PortalTextArea;
//portal-textarea id will be used here for portal purpose