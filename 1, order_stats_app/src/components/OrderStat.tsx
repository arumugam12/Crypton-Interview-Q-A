import React from 'react';
import './OrderStat.scss';

interface OrderStatProps {
  label: string;
  value: string | number;
  change: string;
  icon: string;
}

const OrderStat: React.FC<OrderStatProps> = ({ icon, label, value, change }) => {
  const isPositive = change.includes('+');
  const changeClass = isPositive ? 'positive' : 'negative';

  return (
     <div className="order-stat">
         <div className="label-change">
        <div className="label">{label}</div>
        <div className={`change ${changeClass}`}>{change}</div>
      </div>
      <div className="icon-value">
        <img className="icon" src={icon} alt={`${label} icon`} />
        <div className="value">{value}</div>
      </div>
     
    </div>
  );
};

export default OrderStat;