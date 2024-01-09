using Cafe.Domain;
using Cafe.Infrustructure.Context;

namespace Cafe.Infrustructure.Repositoriy.Interface;

public class OrderRepository : IOrderRepository
{
    private readonly CafeDbContext _dbContext;

    public OrderRepository(CafeDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    
    public async Task AddOrder(Order order)
    {
        await _dbContext.Orders.AddAsync(order);
        await _dbContext.SaveChangesAsync();
    }
}