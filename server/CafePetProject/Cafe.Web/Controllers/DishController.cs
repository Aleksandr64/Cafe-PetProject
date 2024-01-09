using Cafe.Application.DTOs.DishDTOs.Request;
using Cafe.Web.Helper;
using Cafe.Application.Services.Inteface;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Cafe.Web.Controllers;

public class DishController : BaseApiController
{
    private readonly IDishService _dishService;
    
    public DishController(IDishService dishService)
    {
        _dishService = dishService;
    }
    
    [HttpGet]
    public async Task<IActionResult> GetAllDish()
    {
        var result = await _dishService.GetAllDish();
        return this.GetResponse(result);
    }

    [HttpGet]
    public async Task<IActionResult> GetDishById(Guid id)
    {
        var result = await _dishService.GetDishById(id);
        return this.GetResponse(result);
    }

    [HttpPost]
    public IActionResult AddNewDish([FromBody] AddDishRequest dish)
    {
        var result = _dishService.AddNewDish(dish);
        return this.GetResponse(result);    
    }

    [HttpPut]
    public async Task<IActionResult> ChangeDish([FromBody] PutDishRequest dish)
    {
        var result = await _dishService.ChangeDish(dish);
        return this.GetResponse(result);
    }

    [HttpDelete]
    public async Task<IActionResult> DeleteById(Guid id)
    {
        var result = await _dishService.DeleteById(id);
        return this.GetResponse(result);
    }
}