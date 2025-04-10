from django.shortcuts import render
from django.http.response import JsonResponse
from .models import Company, Vacansy

def companies(request):
    company_list = Company.objects.all()
    return JsonResponse([c.to_json() for c in company_list], safe=False)


def company_detail(request, id):
    company = Company.objects.get(id=id)
    return JsonResponse(company.to_json())

def company_vacancies(request, id):
    vacancies = Company.objects.get(id=id).vacancies.all()
    return JsonResponse([v.to_json() for v in vacancies], safe=False)

def vacancies(request):
    vacancy_list = Vacansy.objects.all()
    return JsonResponse([v.to_json() for v in vacancy_list], safe=False)

def vacancy_detail(request, id):
    return JsonResponse(Vacansy.objects.get(id=id).to_json())

def top_ten_vacancies(request):
    top_vacancies = Vacansy.objects.order_by('-salary')[:10]
    return JsonResponse([v.to_json() for v in top_vacancies], safe=False)