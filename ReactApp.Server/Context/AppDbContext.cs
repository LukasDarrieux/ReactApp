using Microsoft.EntityFrameworkCore;
using ReactApp.Server.Models;

namespace ReactApp.Server.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Produtos>? Produtos { get; set; }
    }
}
