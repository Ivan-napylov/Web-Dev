import { Component, Input, OnChanges } from '@angular/core';
import { Vacansy } from '../interfaces';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vacancy-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vacancy-list.component.html'
})
export class VacancyListComponent implements OnChanges {
  @Input() companyId!: number;
  vacancies: Vacansy[] = [];

  constructor(private api: ApiService) {}

  ngOnChanges(): void {
    this.api.getVacanciesByCompanyId(this.companyId)
      .subscribe(data => this.vacancies = data);
  }
}
