from django.shortcuts import render
import datetime , json
from testapp.models import EventData
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse , JsonResponse

@csrf_exempt
def savetheevent(request):
    #print (request.body)
    data = json.loads(request.body)
    event_name = data["event_name"]
    #event_cover_image = data["event_cover_image"]
    event_date_start = datetime.datetime.strptime(data["date_start"],"%d%m%Y").date()
    event_date_end = datetime.datetime.strptime(data["date_end"],"%d%m%Y").date()
    event_description = data["description"]
    event_city = data["city"]
    EventData.objects.create(event_name=event_name, date_start=event_date_start, date_end=event_date_end, description=event_description, city=event_city)
    return HttpResponse("Event successfully saved!")

@csrf_exempt
def showeventdetails(request):
    if request.method == 'GET':
        data = EventData.objects.all().values()
        listing = list(data)
        #print (listing)
        return JsonResponse(listing, safe=False)
    return HttpResponse("Wrong request!")

@csrf_exempt
def deleteevent(request, id):
    if request.method == 'DELETE':
        EventData.objects.get(event_id=id).delete()
        return HttpResponse("Event successfully removed!")
    else:
        return HtpResponse("Wrong Request!")


@csrf_exempt
def registertheuser(request):
    data = request.body
    print (type(data))
    # print (request)
    # data = json.loads(request.body)
    # user_name = data["user_name"]
    # user_profile_image = data["user_profile_image"]
    # user_cover_image = data["user_cover_image"]
    # EventData.objects.create(user_name=user_name, user_profile_image=user_profile_image, user_cover_image=user_cover_image)
    return HttpResponse("User successfully registered!")