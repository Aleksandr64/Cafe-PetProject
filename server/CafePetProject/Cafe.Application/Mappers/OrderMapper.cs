using System.Collections.ObjectModel;
using Cafe.Application.DTOs.OrderDTOs.Request;
using Cafe.Domain;

namespace Cafe.Application.Mappers;

public static class OrderMapper
{
    public static Order MapOrderAddRequest(this AddOrderRequest addOrderRequest)
    {
        
        Order order = new Order
        {
            CustomerName = addOrderRequest.CustomerName,
            PhoneNumber = addOrderRequest.PhoneNumber,
            Address = addOrderRequest.Address,
            EmailAddres = addOrderRequest.EmailAddres,
            TotalAmount = addOrderRequest.TotalAmount,
            OrderItems = new List<OrderItem>()
        };
        order.OrderItems = MapOrderItemsAddRequest(addOrderRequest.OrderItems, order.Id);
        return order;
    }

    private static ICollection<OrderItem> MapOrderItemsAddRequest(IEnumerable<AddOrderItemRequest> orderItemRequests, Guid Id)
    {
        ICollection<OrderItem> orderItems = new List<OrderItem>();
        foreach (var addOrderItem in orderItemRequests) 
        {
            OrderItem orderItem = new OrderItem
            {
                Quantity = addOrderItem.Quantity,
                DishId = addOrderItem.DishId,
                OrderId = Id
                
            };
            orderItems.Add(orderItem);
        }
        return orderItems;
    }
}
