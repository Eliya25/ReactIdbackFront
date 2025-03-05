from rest_framework.generics import CreateAPIView
from rest_framework.permissions import AllowAny
from .serializers import UserSerializer
from django.contrib.auth import get_user_model
from  django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .decorators import role_required

# Create your views here.

User = get_user_model()

class RegisterUserView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


@csrf_exempt
@role_required('admin')
def admin_only_view(request):
    return JsonResponse({'message': 'Welcome, admin!'})

#jfbjbjfjb