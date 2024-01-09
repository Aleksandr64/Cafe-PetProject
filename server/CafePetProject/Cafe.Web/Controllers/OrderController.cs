using Cafe.Web.Helper;
using Cafe.Application.DTOs.OrderDTOs.Request;
using Cafe.Application.Services.Inteface;
using Microsoft.AspNetCore.Mvc;

namespace Cafe.Web.Controllers;

public class OrderController : BaseApiController
{
    private readonly IOrderService _orderService;

    public OrderController(IOrderService orderService)
    {
        _orderService = orderService;
    }
    
    [HttpPost]
    public async Task<IActionResult> AddNewOrder([FromBody] AddOrderRequest newOrder)
    {
        var result = await _orderService.AddNewOrder(newOrder);
        return this.GetResponse(result);
    }
}