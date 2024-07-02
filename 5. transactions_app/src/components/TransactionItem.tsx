import React from 'react';
import './TransactionItem.scss';

export interface TransactionItemProps {
  name: string;
  date: string;
  time: string;
  amount: string;
  type: 'Received' | 'Outgoing';
  imageUrl: string;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ name, date, time, amount, type, imageUrl }) => {
  return (
    <div className="transaction-item">
      <img src={imageUrl} alt={name} className="transaction-image" />
      <div className="transaction-details">
        <span className="transaction-name">{name}</span>
        <span className="transaction-date">{date} • {time}</span>
      </div>
      <div className={`transaction-amount ${type === 'Received' ? 'received' : 'outgoing'}`}>
        {amount}
      </div>
      <div className="transaction-type">{type}</div>
    </div>
  );
};

export default TransactionItem;
