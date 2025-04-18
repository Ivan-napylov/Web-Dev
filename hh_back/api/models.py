from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(default='')
    city = models.CharField(max_length=100)
    address = models.TextField()

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address,
        }
    
class Vacansy(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(default='')
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='vacancies')
    
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            'company': self.company.id,
        }
