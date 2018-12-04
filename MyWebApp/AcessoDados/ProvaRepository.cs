using MyWebApp.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyWebApp.AcessoDados
{
    public class ProvaRepository : IProvaRepository
    {
        private readonly MyWebAppContext _myWebAppContext;

        public ProvaRepository(MyWebAppContext myWebAppContext)
        {
            _myWebAppContext = myWebAppContext;
        }

        public List<Prova> ListarProvas()
        {
            return _myWebAppContext.Provas.ToList();
        }

        public Prova ObterProvaPorId(int id)
        {
            return _myWebAppContext.Provas.FirstOrDefault(p => p.Id == id);
        }

        public void Salvar(Prova prova)
        {
            _myWebAppContext.Provas.Add(prova);
            _myWebAppContext.SaveChanges();

        }
    }
}
