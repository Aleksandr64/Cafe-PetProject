using Cafe.Domain;
using ClassLibrary1.DTOs.DishDTOs.Request;

namespace ClassLibrary1.Mappers;

public static class DishMapper
{
    public static Dish ToDishAddRequest(this AddDishRequest addDish)
    {
        return new Dish
        {
            Title = addDish.Title,
            Description = addDish.Description,
            Price = addDish.Price,
            ImageUrl = addDish.ImageUrl
        };
    }
    
    
}