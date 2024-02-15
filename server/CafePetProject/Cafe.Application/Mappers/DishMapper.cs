using Cafe.Application.DTOs.DishDTOs.Request;
using Cafe.Domain;

namespace Cafe.Application.Mappers;

public static class DishMapper
{
    public static Dish MapDishAddRequest(this AddDishRequest addDish)
    {
        return new Dish
        {
            Title = addDish.Title,
            Description = addDish.Description,
            Price = addDish.Price,
            ImageUrl = addDish.ImageUrl
        };
    }

    public static Dish MapDishPutRequest(this PutDishRequest putDish)
    {
        return new Dish
        {
            Id = putDish.Id,
            Title = putDish.Title,
            Description = putDish.Description,
            Price = putDish.Price,
            ImageUrl = putDish.ImageUrl,
            DateUpdate = DateTime.UtcNow
        };
    }
}