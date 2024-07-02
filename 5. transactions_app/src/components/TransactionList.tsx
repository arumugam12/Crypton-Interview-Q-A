import React from 'react';
import TransactionItem, { TransactionItemProps } from './TransactionItem';
import './TransactionList.scss';

const transactions: TransactionItemProps[] = [
  { name: 'Eren', date: '01 June 2024', time: '11:50 PM', amount: '+₹13.00', type: 'Received', imageUrl: "/eren.png" },
  { name: 'Thornfinn', date: '30 May 2024', time: '06:23 PM', amount: '-₹9.00', type: 'Outgoing', imageUrl: '/thorfinn.jpg' },
  { name: 'Ichigo', date: '31 May 2024', time: '10:10 AM', amount: '+₹20.00', type: 'Received', imageUrl: '/aizen.png' }
];

const TransactionList: React.FC = () => {
  return (
    <div className="transaction-list">
      <div className="header">
        <span>Last Transactions</span>
        <a href="/see-all">See All</a>
      </div>
      {transactions.map((transaction, index) => (
        <TransactionItem key={index} {...transaction} />
      ))}
    </div>
  );
};

export default TransactionList;
