using Microsoft.AspNetCore.Mvc;
using MyWebApp.AcessoDados;
using MyWebApp.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyWebApp.Controllers
{
    [Route("api/[Controller]")]
    public class AlunoController : Controller
    {
        private readonly IAlunoRepository _alunoRepository;

        public AlunoController(IAlunoRepository alunoRepository)
        {
            _alunoRepository = alunoRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_alunoRepository.ListarAlunos());
            }catch(Exception ex)
            {
                return BadRequest("Erro: "+ex.Message);
            }
        }
        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            try
            {
                var aluno = _alunoRepository.ObterAlunoPorId(id);
                return Ok(aluno);
            }catch(Exception ex)
            {
                return BadRequest("Erro: " + ex.Message);
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]Aluno aluno)
        {
            try
            {
                _alunoRepository.Salvar(aluno);
                return Created("/api/aluno",aluno);

            }catch(Exception ex)
            {
                return BadRequest("Erro: " + ex.Message);
            }
        }

    }
}
