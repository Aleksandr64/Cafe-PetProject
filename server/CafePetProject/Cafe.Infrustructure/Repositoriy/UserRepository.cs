

using Cafe.Domain;
using Cafe.Infrustructure.Context;
using Cafe.Infrustructure.Repositoriy.Interface;
using Microsoft.EntityFrameworkCore;

namespace Cafe.Infrustructure.Repositoriy;

public class UserRepository : IUserRepository
{
    private readonly CafeDbContext _dbContext;

    public UserRepository(CafeDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    
    public async Task<bool> CheckByNameAsync(string userName)
    {
        return await _dbContext.Users.AnyAsync(x => x.UserName == userName);
    }

    public async Task<bool> CheckByEmailAsync(string email)
    {
        return await _dbContext.Users.AnyAsync(x => x.Email == email);
    }

    public async Task<User> FindByNameAsync(string userName)
    {
        var user = await _dbContext.Users.FirstOrDefaultAsync(x => x.UserName == userName);
        return user;
    }
    public async Task CreateUserAsync(User user)
    {
        await _dbContext.Users.AddAsync(user);
        await _dbContext.SaveChangesAsync();
    }
}