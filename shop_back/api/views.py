from django.shortcuts import render
from django.http import JsonResponse
from .models import Product, Category
from django.shortcuts import get_object_or_404

def product_to_dict(product):
    return {
        "id": product.id,
        "name": product.name,
        "price": product.price,
        "description": product.description,
        "count": product.count,
        "is_active": product.is_active,
        "category_id": product.category_id,
    }

def category_to_dict(category):
    return {
        "id": category.id,
        "name": category.name,
    }

def product_list(request):
    products = Product.objects.all()
    data = [product_to_dict(p) for p in products]
    return JsonResponse(data, safe=False)

def product_detail(request, id):
    product = get_object_or_404(Product, id=id)
    return JsonResponse(product_to_dict(product))

def category_list(request):
    categories = Category.objects.all()
    data = [category_to_dict(c) for c in categories]
    return JsonResponse(data, safe=False)

def category_detail(request, id):
    category = get_object_or_404(Category, id=id)
    return JsonResponse(category_to_dict(category))

def products_by_category(request, id):
    products = Product.objects.filter(category_id=id)
    data = [product_to_dict(p) for p in products]
    return JsonResponse(data, safe=False)
