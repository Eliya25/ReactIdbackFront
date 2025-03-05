from django.http import JsonResponse
from functools import wraps

def role_required(required_role):
    """Decorator for views that checks that the user is logged in and role is"""
    def decorator(view_func):
        @wraps(view_func)
        def _wrapped_view(request, *args, **kwargs):
            if not request.user.is_authenticated:
                return JsonResponse({'error': 'Authentication required'}, status=401)

            if request.user.role != required_role:
                return JsonResponse({'error': 'Permission denied'}, status=401)

            return view_func(request, *args, **kwargs)
        return _wrapped_view
    return decorator