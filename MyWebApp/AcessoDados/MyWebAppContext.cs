using Microsoft.EntityFrameworkCore;
using MyWebApp.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyWebApp
{
    public class MyWebAppContext : DbContext
    {
        public DbSet<Aluno> Alunos { get; set; }
        public DbSet<Prova> Provas { get; set; }

        public MyWebAppContext(DbContextOptions<MyWebAppContext>options):base(options) { }

        protected override void OnModelCreating (ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Aluno>().HasKey(p => p.Id);
            modelBuilder.Entity<Prova>().HasKey(p => p.Id);

            base.OnModelCreating(modelBuilder);

        }

        public override int SaveChanges()
        {
            ChangeTracker.DetectChanges();
            return base.SaveChanges();
        }
    }
}
