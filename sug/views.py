from django.shortcuts import render
from .models import Item,Category


# Create your views here.
def index(request):
    item = Item.objects.filter()[0:6]
    Categories = Category.objects.all()
    return render(request,"sug/index.html",{
        'item': item,
        'categories': Categories
    })

def cake(request):
    return render(request,"sug/cake.html")