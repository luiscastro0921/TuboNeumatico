import { Component, OnInit } from '@angular/core';
import { ExamService } from '../../exam.service';

@Component({
  selector: 'app-master-configurations',
  templateUrl: './master-configurations.component.html',
})
export class MasterConfigurationsComponent implements OnInit {
  exams = [];

  constructor(private examService: ExamService) {}

  ngOnInit() {
    this.loadExams();
  }

  loadExams() {
    this.examService.getExams().subscribe(data => {
      this.exams = data;
    });
  }

  consult() {
    // Lógica para consultar exámenes
  }

  insert() {
    // Lógica para insertar nuevo examen
  }

  update() {
    // Lógica para actualizar examen
  }

  delete() {
    // Lógica para eliminar examen
  }
}
