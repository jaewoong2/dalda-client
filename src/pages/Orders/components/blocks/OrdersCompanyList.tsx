import useGetOrders from '@/hooks/useGetOrders'
import React from 'react'
import Message from '../molecules/Message'

const OrdersCompanyList = () => {
  const { data } = useGetOrders('company')

  return (
    <ul className="w-[calc(100%+2rem)]">
      {data?.orderList &&
        data?.orderList?.length > 0 &&
        data?.orderList?.map((order) => (
          <Message
            orderStatus={order.orderStatus ?? '주문 요청'}
            orderTitle={`${order.consumerId}님의 주문 요청 입니다`}
            date={order.orderDate ?? '오늘'}
            id={order.id ?? '0'}
          />
        ))}
    </ul>
  )
}

export default OrdersCompanyList
