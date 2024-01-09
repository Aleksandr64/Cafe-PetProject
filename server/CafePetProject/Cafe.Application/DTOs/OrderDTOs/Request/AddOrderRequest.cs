namespace Cafe.Application.DTOs.OrderDTOs.Request;

public class AddOrderRequest
{
    public string CustomerName { get; set; }
    public string PhoneNumber { get; set; }
    public string Address { get; set; }
    public string EmailAddres { get; set; }
    public IEnumerable<AddOrderItemRequest>? OrderItems { get; set; }
}