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
    public class ProvaController : Controller
    {

        private readonly IProvaRepository _provaRepository;

        public ProvaController(IProvaRepository provaRepository)
        {
            _provaRepository = provaRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_provaRepository.ListarProvas());
            }
            catch (Exception ex)
            {
                return BadRequest("Erro: " + ex.Message);
            }
        }
        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            try
            {
                var prova = _provaRepository.ObterProvaPorId(id);
                return Ok(prova);
            }
            catch (Exception ex)
            {
                return BadRequest("Erro: " + ex.Message);
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]Prova prova)
        {
            try
            {
                _provaRepository.Salvar(prova);
                return Created("/api/prova", prova);

            }
            catch (Exception ex)
            {
                return BadRequest("Erro: " + ex.Message);
            }
        }

    }
}
