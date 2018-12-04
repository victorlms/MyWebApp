using Microsoft.AspNetCore.Mvc;
using MyWebApp.AcessoDados;

namespace MyWebApp.Controllers
{
    public class HomeController : Controller
    {
        private readonly IAlunoRepository _alunoRepository;

        public HomeController(IAlunoRepository alunoRepository)
        {
            _alunoRepository = alunoRepository;
        }

        public IActionResult Index()
        {
           return View(_alunoRepository.ListarAlunos());
        }
    }
}
