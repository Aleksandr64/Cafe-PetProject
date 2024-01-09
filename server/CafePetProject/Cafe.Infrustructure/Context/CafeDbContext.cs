using Cafe.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Cafe.Infrustructure.Context;

public class CafeDbContext : DbContext
{
    protected readonly IConfiguration _configuration;
    
    public CafeDbContext(DbContextOptions<CafeDbContext> options) : base(options)
    {
            
    }
    
    public DbSet<Dish> Dishes { get; set; }
    public DbSet<Order> Orders { get; set; }
    public DbSet<OrderItem> OrderItems { get; set; }
}