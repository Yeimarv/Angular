import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent implements OnInit {

  servicios: any = [
    {
      nombre: "Mantenimiento preventivo de computador",
      desde: 20000,
      hasta: 35000
    },
    {
      nombre: "Mantenimiento correctivo de computador",
      desde: 40000,
      hasta: 70000
    },
    {
      nombre: "Formateo de computadorr",
      desde: 0,
      hasta: 70000
    },
    {
      nombre: "Inst, y configuración de redes",
      desde: 60000,
      hasta: 120000
    },
    {
      nombre: "Instalación de punto de datos de red ",
      desde: 40000,
      hasta: 70000
    },
    {
      nombre: "Servicio de mantenimiento para impresoras",
      desde: 80000,
      hasta: 150000
    },
    {
      nombre: "Instalación de programas",
      desde: 30000,
      hasta: 80000
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    servicios: new FormControl('', [Validators.required]),
    observaciones: new FormControl('', [Validators.required]),
  })

  create() {
    if (this.form.valid) {
      console.log("Enviando información");
      alert("Enviando información");
    }
  }

}
