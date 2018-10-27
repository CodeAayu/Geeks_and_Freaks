from django.db import models

class EventData(models.Model):
	event_name = models.CharField(max_length=100,null=False)
	#event_cover_image = models.ImageField(upload_to="../media", blank=True, null=True)
	date_start = models.DateTimeField(null = False)
	date_end = models.DateTimeField(null = False)
	description = models.CharField(max_length=750,null=False)
	event_id = models.AutoField(primary_key=True)
	city = models.CharField(max_length=30)

# class UserData(models.Model):
# 	user_name = models.CharField(max_length=100,null=False)
# 	user_profile_image = models.ImageField(upload_to="../media", blank=True, null=True)
# 	user_cover_image = models.ImageField(upload_to="../media", blank=True, null=True)
	