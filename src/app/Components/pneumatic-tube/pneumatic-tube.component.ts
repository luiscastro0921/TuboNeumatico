import { Component } from '@angular/core';

@Component({
  selector: 'app-pneumatic-tube',
  templateUrl: './pneumatic-tube.component.html',
  styleUrls: ['./pneumatic-tube.component.css']
})
export class PneumaticTubeComponent {
  fechaDesde: string = '';
  fechaHasta: string = '';
  identificacion: string = '';
  empresa: string = '';
  diagnostico: string = '';
  tipoProcedimiento: string = '';
  pacientes: any[] = [];  // Array para almacenar los datos de los pacientes

  consultar() {
    console.log('Consultando...');
    // Lógica para consultar y obtener pacientes
    // Aquí puedes simular datos para pruebas
    this.pacientes = [
      { identificacion: '12345678', nombre: 'Juan Pérez', diagnostico: 'Procedimiento de ejemplo', tipoProcedimiento: 'Tipo 1', estado: 'Pendiente', fecha: '2024-09-20' },
      { identificacion: '87654321', nombre: 'María López', diagnostico: 'Otro diagnóstico', tipoProcedimiento: 'Tipo 2', estado: 'Pendiente', fecha: '2024-09-15' },
      // Agrega más datos si es necesario
    ];
  }

  limpiar() {
    this.fechaDesde = '';
    this.fechaHasta = '';
    this.identificacion = '';
    this.empresa = '';
    this.diagnostico = '';
    this.tipoProcedimiento = '';
    this.pacientes = [];  // Limpiar la lista de pacientes
  }

  exportarExcel() {
    console.log('Exportando a Excel...');
    // Lógica para exportar a Excel
  }
}
