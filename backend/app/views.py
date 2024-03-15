from django.http import JsonResponse
from datetime import datetime


def current_time(request):
    current_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    data = {'current_time': current_time}
    return JsonResponse(data)
