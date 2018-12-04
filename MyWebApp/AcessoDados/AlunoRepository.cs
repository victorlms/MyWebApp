using MyWebApp.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyWebApp.AcessoDados
{
    public class AlunoRepository : IAlunoRepository
    {
        private readonly MyWebAppContext _myWebAppContext;

        public AlunoRepository(MyWebAppContext myWebAppContext)
        {
            _myWebAppContext = myWebAppContext;
        }

        public List<Aluno> ListarAlunos()
        {
            return _myWebAppContext.Alunos.ToList();
        }

        public Aluno ObterAlunoPorId(int id)
        {
            return _myWebAppContext.Alunos.FirstOrDefault(p => p.Id == id);
        }

        public void Salvar(Aluno aluno)
        {
            _myWebAppContext.Alunos.Add(aluno);
            _myWebAppContext.SaveChanges();

        }
    }
}
