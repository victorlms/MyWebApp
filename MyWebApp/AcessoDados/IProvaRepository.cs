using System.Collections.Generic;
using MyWebApp.Entidades;

namespace MyWebApp.AcessoDados
{
    public interface IProvaRepository
    {
        List<Prova> ListarProvas();
        Prova ObterProvaPorId(int id);
        void Salvar(Prova prova);
    }
}