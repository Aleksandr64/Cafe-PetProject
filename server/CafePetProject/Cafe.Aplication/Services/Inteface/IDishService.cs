using Cafe.Domain;
using Cafe.Domain.ResultModels;
using ClassLibrary1.DTOs.DishDTOs.Request;

namespace ClassLibrary1.Services.Inteface;

public interface IDishService
{
    public Result<string> AddNewDish(AddDishRequest dish);
    public Task<Result<IEnumerable<Dish>>> GetAllDish();
}