using Cafe.Domain;
using Cafe.Infrustructure.Context;
using Cafe.Infrustructure.Repositoriy.Interface;

namespace Cafe.Infrustructure.Repositoriy;

public class OrderItemRepository : IOrderItemRepository
{
    private readonly CafeDbContext _dbContext;

    public OrderItemRepository(CafeDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    
    public async Task AddOrderItem(OrderItem orderItem)
    {
        await _dbContext.OrderItems.AddAsync(orderItem);
        await _dbContext.SaveChangesAsync();
    }
}