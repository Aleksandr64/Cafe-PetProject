using Cafe.Domain;

namespace Cafe.Infrustructure.Repositoriy.Interface;

public interface IOrderItemRepository
{
    public Task AddOrderItem(OrderItem orderItem);
}