using System.ComponentModel.DataAnnotations;

namespace Cafe.Domain;

public class Dish
{
    [Key]
    public int DishId { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public double Price { get; set; }
    public string ImageUrl { get; set; }
}