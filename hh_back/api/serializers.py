from rest_framework import serializers
from .models import Vacansy, Company

# class CompanySerializer(serializers.Serializer):
#     id = serializers.IntegerField()
#     name = serializers.CharField(max_length=100)
#     description = serializers.CharField(allow_blank=True)
#     city = serializers.CharField(max_length=100)
#     address = serializers.CharField()

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'
    
class VacansySerializer(serializers.ModelSerializer):
    company = serializers.PrimaryKeyRelatedField(queryset=Company.objects.all())
    class Meta:
        model = Vacansy
        # fields = '__all__'
        fields = ('id', 'name', 'salary', 'company')
    