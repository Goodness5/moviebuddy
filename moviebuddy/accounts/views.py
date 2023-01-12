from django.shortcuts import render

# Create your views here.
from multiprocessing import context
# from cgitb import html
from multiprocessing import AuthenticationError
# from xml.sax.handler import feature_external_ges
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.http import HttpResponse
from django.template import loader
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
from django.contrib.auth import logout


#REGISTRATION VIEW FUNCTION
def index(request):
    return render(request, 'accounts/signup.html')

def Signup(request):
    # if request.method == 'POST':
    #     username = request.POST['username']
    #     first_name = request.POST['first_name']
    #     last_name = request.POST['last_name']
    #     email = request.POST['email']
    #     password = request.POST['password']
    #     password1 = request.POST['password1']
        
    #     if password != password1:
    #         messages.warning(request, 'password does not match')
    #         return password
    #     user_count = User.objects.filter(email = email).count()

    #     if user_count > 0:
    #         messages.warning(request,'email already exists')
    #         return redirect('signup')
    #     if username == None:
    #         messages.warning(request, 'username field cannot be blank')
    #         return username
    #     else:
    #         user = User.objects.create_user(email = email, username = username, password = password, first_name = first_name, last_name = last_name)
    #         user.save()
    #         messages.success(request, 'account successfully created')
    #         auth_user = authenticate(username = username, password = password )
    #         def mail(request):
    #             send_mail('welcome message', 
    #                   'welcome test',
    #                   ['settings.EMAIL_HOST_USER'],
    #                   ['User.email'], 
    #                   fail_silently=False,
    #                 )
    #             return mail(send_mail())

    #         return redirect('signin')
    # else:
    return render(request, 'accounts/signup.html')