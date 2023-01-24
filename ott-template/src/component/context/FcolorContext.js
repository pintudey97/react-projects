import React from 'react';
import FcolorContext  from './context';

const FooterColor = (props) => {
    const colorchange = {
        'footerbg':'#05273d',
        'copyrightbg':'#041d2d'
    }
    return (
        <React.Fragment>
            <FcolorContext.Provider value={colorchange}>
                {props.children}
            </FcolorContext.Provider>
        </React.Fragment>
    );
}
 
export default FooterColor;