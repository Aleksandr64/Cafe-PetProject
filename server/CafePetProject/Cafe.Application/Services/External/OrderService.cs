using Cafe.Application.DTOs.OrderDTOs.Request;
using Cafe.Application.Mappers;
using Cafe.Application.Services.Inteface;
using Cafe.Application.Validations.Order;
using Cafe.Domain.ResultModels;
using Cafe.Infrustructure.Repositoriy.Interface;
using FluentValidation;

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
        var validationResult = await new AddOrderValidation().ValidateAsync(newOrder);
        if (!validationResult.IsValid)
        {
            return new BadRequestResult<string>(validationResult.Errors);
        }
        
        var order = newOrder.MapOrderAddRequest();
        
        await _orderRepository.AddOrder(order);
        
        return new SuccessResult<string>(null);
    }
}