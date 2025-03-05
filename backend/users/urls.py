from django.urls import path
from .views import RegisterUserView, admin_only_view

urlpatterns = [
    path('register/', RegisterUserView.as_view(), name='register'),
    path('admin-only/', admin_only_view, name='admin-only'),
]