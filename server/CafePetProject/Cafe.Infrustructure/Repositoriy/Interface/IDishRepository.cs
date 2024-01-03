using Cafe.Domain;

namespace Cafe.Infrustructure.Repositoriy.Interface;

public interface IDishRepository
{
    public void AddNewDish(Dish dish);
    public Task<IEnumerable<Dish>> GetAllDish();
}