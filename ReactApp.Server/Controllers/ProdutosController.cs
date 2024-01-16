using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactApp.Server.Context;
using ReactApp.Server.Models;

namespace ReactApp.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdutosController : ControllerBase
    {

        private readonly AppDbContext _context;

        public ProdutosController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var produtos = await _context.Produtos.ToListAsync();
            if (produtos is null) return NotFound();
            return Ok(produtos);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult> Get(int id)
        {
            var produto = await _context.Produtos.FindAsync(id);
            if (produto is null) return NotFound();
            return Ok(produto);
        }

        [HttpPost]
        public async Task<ActionResult> Post(Produtos produto)
        {
            if (produto is null) return BadRequest();

            _context.Produtos.Add(produto);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Get", new { id = produto.Id }, produto);
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id, Produtos produto)
        {
            if (produto is null || id != produto.Id) return BadRequest();

            _context.Entry(produto).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return Ok(produto);
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var produto = await _context.Produtos.FindAsync(id);
            if (produto is null) return NotFound();

            _context.Produtos.Remove(produto);
            await _context.SaveChangesAsync();

            return NoContent();
        }

    }
}
