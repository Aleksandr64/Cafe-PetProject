
using Cafe.Domain;
using Cafe.Domain.ResultModels;
using Cafe.Infrustructure.Repositoriy.Interface;
using ClassLibrary1.DTOs.DishDTOs.Request;
using ClassLibrary1.Mappers;
using ClassLibrary1.Services.Inteface;

namespace ClassLibrary1.Services;

public class DishService : IDishService
{
    private readonly IDishRepository _dishRepository;

    public DishService(IDishRepository dishRepository)
    {
        _dishRepository = dishRepository;
    }
    public Result<string> AddNewDish(AddDishRequest dish)
    {
        if (dish == null)
        {
            return new BadRequestResult<string>("Object Empty");
        }

        _dishRepository.AddNewDish(dish.ToDishAddRequest());
        return new SuccessResult<string>(null);
    }

    public async Task<Result<IEnumerable<Dish>>> GetAllDish()
    {
        var result = await _dishRepository.GetAllDish();

        if (result == null)
        {
            return new NotFoundResult<IEnumerable<Dish>>("Error or no dishes in the database");
        }

        return new SuccessResult<IEnumerable<Dish>>(result);
    }
}