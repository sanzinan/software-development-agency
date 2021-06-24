import React from 'react';

const OrderCard = ({singleOrder}) => {
    const {title, description, icon, status} = singleOrder;
    return (
        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 border border-1 p-3">
					<div className="box-part text-center">
                        <div className="d-flex justify-content-between">
						<img width='100px' src={icon} alt="..."/>
						<p className="text-danger">{status}</p>
						</div>
                        
						<div className="title">
							<h4>{title}</h4>
						</div>
						<small>{description}</small>
					 </div>
				</div>	 
    );
};

export default OrderCard;