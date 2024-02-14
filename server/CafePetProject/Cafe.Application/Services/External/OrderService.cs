using Cafe.Application.DTOs.OrderDTOs.Request;
using Cafe.Application.Mappers;
using Cafe.Application.Services.Inteface;
using Cafe.Domain.ResultModels;
using Cafe.Infrustructure.Repositoriy.Interface;

namespace Cafe.Application.Services.External;

public class OrderService : IOrderService
{
    private readonly IOrderRepository _orderRepository;

    public OrderService(IOrderRepository orderRepository)
    {
        _orderRepository = orderRepository;
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