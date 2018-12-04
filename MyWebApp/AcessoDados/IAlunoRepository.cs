using System.Collections.Generic;
using MyWebApp.Entidades;

namespace MyWebApp.AcessoDados
{
    public interface IAlunoRepository
    {
        List<Aluno> ListarAlunos();
        Aluno ObterAlunoPorId(int id);
        void Salvar(Aluno aluno);
    }
}