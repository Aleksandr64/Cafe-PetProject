using Cafe.Domain;
using Cafe.Domain.ResultModels;
using ClassLibrary1.DTOs.DishDTOs.Request;

namespace ClassLibrary1.Services.Inteface;

public interface IDishService
{
    public Task<Result<IEnumerable<Dish>>> GetAllDish();
    public Task<Result<Dish>> GetDishById(int id);
    public Result<string> AddNewDish(AddDishRequest dish);
    public Task<Result<string>> ChangeDish(PutDishRequest dish);
    public Task<Result<string>> DeleteById(int id);
}