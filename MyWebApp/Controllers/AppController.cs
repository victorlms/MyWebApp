using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyWebApp.Controllers
{
    public class AppController : Controller
    {
        public IActionResult Turma()
        {
            return View();
        }
    }
}
