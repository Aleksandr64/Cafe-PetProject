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
    
    // GET
    [HttpGet("GetAllDish")]
    public async Task<IActionResult> GetAllDish()
    {
        var result = _dishService.GetAllDish();
        return this.GetResponse(result);
    }

    [HttpPost("AddNewDish")]
    public IActionResult AddNewDish([FromBody] AddDishRequest dish)
    {
        var result = _dishService.AddNewDish(dish);
        return this.GetResponse(result);    
    }
}