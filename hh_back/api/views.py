from django.shortcuts import render
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Company, Vacansy
from .serializers import CompanySerializer, VacansySerializer
import json
from rest_framework import generics


# @csrf_exempt
# def companies(request):
#     if request.method == 'GET':
#         company_list = Company.objects.all()
#         serializer = CompanySerializer(company_list, many = True)
#         # company_json = [c.to_json() for c in company_list]  
        
#         return JsonResponse(serializer.data, safe=False)
        
        
        
#     elif request.method == 'POST':
#         data = json.loads(request.body)
#         serializer = CompanySerializer(data = data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data, status = 201)
#         return JsonResponse(serializer.errors, status = 400)


class CompanyListCreateView(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    

@csrf_exempt
def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist() as e:
        return JsonResponse({'error': str(e)}, status = 404)
    
    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return JsonResponse(serializer.data)
    
    elif request.method == 'PUT':
        new_data = json.loads(request.body)
        
        serializer = CompanySerializer(instance = company,
                                       data = new_data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status = 201)
        return JsonResponse(serializer.errors, status = 400)
        
    elif request.method == 'DELETE':
        company.delete()
        
        return JsonResponse({'message': 'Company deleted'})

@csrf_exempt
def company_vacancies(request, id):
    if request.method == 'GET':
        vacancies = Company.objects.get(id=id).vacancies.all()
        # vacancies_json = [v.to_json() for v in vacancies]
    
        serializer = VacansySerializer(vacancies, many = True)
        return JsonResponse(serializer.data, safe=False)
    
    
    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = VacansySerializer(data = data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status = 201)
        return JsonResponse(serializer.errors, status = 400)
    
    

def vacancies(request):
    vacancy_list = Vacansy.objects.all()
    return JsonResponse([v.to_json() for v in vacancy_list], safe=False)

@csrf_exempt
def vacancy_detail(request, id):
    try:
        vacansy = Vacansy.objects.get(id=id)
    except Company.DoesNotExist() as e:
        return JsonResponse({'error': str(e)}, status = 404)
    
    if request.method == 'GET':
        serializer = VacansySerializer(vacansy)
        return JsonResponse(serializer.data)
    elif request.method == 'PUT':
        new_data = json.loads(request.body)
        
        serializer = VacansySerializer(instance = vacansy,
                                       data = new_data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status = 201)
        return JsonResponse(serializer.errors, status = 400)
    
    elif request.method == 'DELETE':
        vacansy.delete()
        
        return JsonResponse({'message': 'Vacansy deleted'})

def top_ten_vacancies(request):
    top_vacancies = Vacansy.objects.order_by('-salary')[:10]
    return JsonResponse([v.to_json() for v in top_vacancies], safe=False)