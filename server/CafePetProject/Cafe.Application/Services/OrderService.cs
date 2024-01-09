using Cafe.Domain;
using Cafe.Domain.ResultModels;
using Cafe.Infrustructure.Repositoriy.Interface;
using Cafe.Application.DTOs.OrderDTOs.Request;
using Cafe.Application.Mappers;
using Cafe.Application.Services.Inteface;

namespace Cafe.Application.Services;

public class OrderService : IOrderService
{
    private readonly IOrderRepository _orderRepository;
    private readonly IOrderItemRepository _orderItemRepository;

    public OrderService(IOrderRepository orderRepository, IOrderItemRepository orderItemRepository)
    {
        _orderRepository = orderRepository;
        _orderItemRepository = orderItemRepository;
    }
    
    public async Task<Result<string>> AddNewOrder(AddOrderRequest newOrder)
    {
        if (newOrder == null)
        {
            return new BadRequestResult<string>("Order Object Empty");
        }
        else if(newOrder.OrderItems == null)
        {
            return new BadRequestResult<string>("OrderItem List Empty");
        }

        var order = newOrder.MapOrderAddRequest();
        await _orderRepository.AddOrder(order);
        return new SuccessResult<string>(null);
    }
}