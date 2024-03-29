﻿using Cafe.Domain;

namespace Cafe.Infrustructure.Repositoriy.Interface;

public interface IDishRepository
{
    public Task<IEnumerable<Dish>> GetAllDish();
    public Task<Dish> GetDishById(Guid id);
    public Task AddNewDish(Dish dish);
    public Task ChangeDish(Dish dish);
    public Task<bool> DeleteDishById(Guid id);

}