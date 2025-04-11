import { Component, OnInit } from '@angular/core';
import { Company } from '../interfaces';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { VacancyListComponent } from '../vacancy-list/vacancy-list.component';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule, VacancyListComponent],
  templateUrl: './company-list.component.html'
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  selectedCompanyId: number | null = null;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getCompanies().subscribe(data => this.companies = data);
  }

  selectCompany(company: Company) {
    this.selectedCompanyId = company.id;
  }
}
