using Cafe.Domain;
using Cafe.Infrustructure.Context;
using Cafe.Infrustructure.Repositoriy.Interface;
using Microsoft.EntityFrameworkCore;

namespace Cafe.Infrustructure.Repositoriy;

public class DishRepository : IDishRepository
{
    private readonly CafeDbContext _dbContext;

    public DishRepository(CafeDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    
    public async void AddNewDish(Dish dish)
    {
        await _dbContext.Dishes.AddAsync(dish);
        await _dbContext.SaveChangesAsync();
    }

    public async Task<IEnumerable<Dish>> GetAllDish()
    {
        var result = await _dbContext.Dishes.ToListAsync();
        return result;
    }
}