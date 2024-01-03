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

    public static Dish ToDishPutRequest(this PutDishRequest putDish)
    {
        return new Dish
        {
            DishId = putDish.DishId,
            Title = putDish.Title,
            Description = putDish.Description,
            Price = putDish.Price,
            ImageUrl = putDish.ImageUrl
        };
    }
}