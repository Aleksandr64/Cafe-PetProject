
using Cafe.Application.DTOs.DishDTOs.Request;
using Cafe.Application.Services.Inteface;
using Cafe.Domain;
using Cafe.Domain.ResultModels;
using Cafe.Infrustructure.Repositoriy.Interface;
using Cafe.Application.Mappers;

namespace Cafe.Application.Services;

public class DishService : IDishService
{
    private readonly IDishRepository _dishRepository;

    public DishService(IDishRepository dishRepository)
    {
        _dishRepository = dishRepository;
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
    public async Task<Result<Dish>> GetDishById(Guid  id)
    {
        var result = await _dishRepository.GetDishById(id);

        if (result == null)
        {
            return new NotFoundResult<Dish>("Failed get Dish by Id");
        }
        
        return new SuccessResult<Dish>(result);
    }

    public Result<string> AddNewDish(AddDishRequest dish)
    {
        if (dish == null)
        {
            return new BadRequestResult<string>("Object Empty");
        }

        _dishRepository.AddNewDish(dish.MapDishAddRequest());
        return new SuccessResult<string>(null);
    }

    public async Task<Result<string>> ChangeDish(PutDishRequest dish)
    {
        if (dish == null)
        {
            return new BadRequestResult<string>("Object Empty");
        }
        await _dishRepository.ChangeDish(dish.MapDishPutRequest());
        return new SuccessResult<string>(null);
    }

    public async Task<Result<string>> DeleteById(Guid id)
    {
        var result = await _dishRepository.DeleteDishById(id);

        if (result)
        {
            return new BadRequestResult<string>("Error in delete dish.");
        }
        
        return new SuccessResult<string>(null);
    }
}