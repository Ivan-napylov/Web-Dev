from django.shortcuts import render
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Company, Vacansy
import json


@csrf_exempt
def companies(request):
    if request.method == 'GET':
        company_list = Company.objects.all()
        return JsonResponse([c.to_json() for c in company_list], safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        try:
            company = Company.objects.create(
                name = data['name'],
                description = data['description'],
                city = data['city'],
                address = data['address']
            )
        except Exception as e:
            return JsonResponse({'error': str(e)}, status = 404)
        
        return JsonResponse(company.to_json(), status = 201)

@csrf_exempt
def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist() as e:
        return JsonResponse({'error': str(e)}, status = 404)
    
    if request.method == 'GET':
        return JsonResponse(company.to_json())
    
    elif request.method == 'PUT':
        new_data = json.loads(request.body)
        company.name = new_data['name']
        company.description = new_data['description']
        company.city = new_data['city']
        company.address = new_data['address']
        company.save()
        
        return JsonResponse(company.to_json(), status = 201)
    elif request.method == 'DELETE':
        company.delete()
        
        return JsonResponse({'message': 'Company deleted'})

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