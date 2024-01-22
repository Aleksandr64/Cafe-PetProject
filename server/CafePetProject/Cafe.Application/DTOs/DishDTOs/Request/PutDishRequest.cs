namespace Cafe.Application.DTOs.DishDTOs.Request;

public class PutDishRequest
{
    public Guid Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public double Price { get; set; }
    public string ImageUrl { get; set; }
    public DateTime DateCreate { get; set; }
}