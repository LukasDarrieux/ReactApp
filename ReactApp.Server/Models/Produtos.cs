using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ReactApp.Server.Models
{
    [Table("Produtos")]
    public class Produtos
    {
        [Column("Id")]
        public int Id { get; set; }

        [Column("Descrição")]
        [MaxLength(200)]
        public string? Descricao { get; set; }

        [Column("Preco", TypeName = "decimal(10,2)")]
        public double Preco { get; set; }
    }
}

