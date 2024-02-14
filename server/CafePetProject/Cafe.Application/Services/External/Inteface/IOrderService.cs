using Cafe.Application.DTOs.OrderDTOs.Request;
using Cafe.Domain.ResultModels;

namespace Cafe.Application.Services.Inteface;

public interface IOrderService
{
    public Task<Result<string>> AddNewOrder(AddOrderRequest newOrder);
}