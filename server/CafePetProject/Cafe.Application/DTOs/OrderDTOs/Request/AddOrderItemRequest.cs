namespace Cafe.Application.DTOs.OrderDTOs.Request;

public class AddOrderItemRequest
{
    public int Quantity { get; set; }
    public Guid DishId { get; set; }
}