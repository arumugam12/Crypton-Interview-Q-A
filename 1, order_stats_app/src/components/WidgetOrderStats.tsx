import React from 'react';
import './WidgetOrderStats.scss';
import OrderStat from './OrderStat';

interface StatData {
    icon: string;
  value: string | number;
  change: string;
}

interface WidgetOrderStatsProps {
  data: {
    revenue: StatData;
    orders: StatData;
    dineIn: StatData;
    takeAway: StatData;
  };
}

const WidgetOrderStats: React.FC<WidgetOrderStatsProps> = ({ data }) => {
  return (
    <div className="widget-order-stats">
      <OrderStat  icon={data.revenue.icon} label="Revenue" value={data.revenue.value} change={data.revenue.change} />
      <OrderStat  icon={data.orders.icon} label="Orders" value={data.orders.value} change={data.orders.change} />
      <OrderStat  icon={data.dineIn.icon} label="Dine in" value={data.dineIn.value} change={data.dineIn.change} />
      <OrderStat  icon={data.takeAway.icon} label="Take away" value={data.takeAway.value} change={data.takeAway.change} />
    </div>
  );
};

export default WidgetOrderStats;