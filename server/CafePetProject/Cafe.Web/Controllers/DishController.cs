using Cafe.Web.Helper;
using ClassLibrary1.DTOs.DishDTOs.Request;
using ClassLibrary1.Services.Inteface;
using Microsoft.AspNetCore.Mvc;

namespace Cafe.Web.Controllers;

public class DishController : Controller
{
    private readonly IDishService _dishService;
    
    public DishController(IDishService dishService)
    {
        _dishService = dishService;
    }
    
    [HttpGet("GetAllDish")]
    public async Task<IActionResult> GetAllDish()
    {
        var result = await _dishService.GetAllDish();
        return this.GetResponse(result);
    }

    [HttpGet("GetDishById/{id}")]
    public async Task<IActionResult> GetDishById(int id)
    {
        var result = await _dishService.GetDishById(id);
        return this.GetResponse(result);
    }

    [HttpPost("AddNewDish")]
    public IActionResult AddNewDish([FromBody] AddDishRequest dish)
    {
        var result = _dishService.AddNewDish(dish);
        return this.GetResponse(result);    
    }

    [HttpPut("ChangeDish")]
    public async Task<IActionResult> ChangeDish([FromBody] PutDishRequest dish)
    {
        var result = await _dishService.ChangeDish(dish);
        return this.GetResponse(result);
    }

    [HttpDelete("DeleteById/{id}")]
    public async Task<IActionResult> DeleteById(int id)
    {
        var result = await _dishService.DeleteById(id);
        return this.GetResponse(result);
    }
    
}