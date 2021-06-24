import React from 'react';
const FooterCol = (props) => {
    return (
        <div className="col-md-3">
            <div className="text-primary ">{props.menuTitle ? props.menuTitle : <h3 className='m-0 font-monospace border-1'>Softonic Solution</h3> }</div>
            <ul className="list-unstyled mt-4">
                 {
                     props.menuItems.map((item, index) => <li key={index}>
                         <a href={item.link} className="text-white-50 text-decoration-none">{item.name}</a></li>)
                 }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterCol;