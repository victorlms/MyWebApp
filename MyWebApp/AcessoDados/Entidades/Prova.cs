using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyWebApp.Entidades
{
    public class Prova
    {
        public int Id { get; set; }
        public int Tipo { get; set; }
        public float nota { get; set; }

        public Aluno Aluno { get; set; }

    }
}
