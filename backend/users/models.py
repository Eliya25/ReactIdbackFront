from django.contrib.auth.models import AbstractUser
from django.db import models

class Role(models.TextChoices):
    ADMIN = "admin", "admin"
    USER = "user", "user"

class CustomUser(AbstractUser):
    role = models.CharField(max_length=10, choices=Role.choices, default=Role.USER)
    bio = models.TextField(blank=True, null=True)
    profile_image = models.ImageField(upload_to="profile/", blank=True, null=True)

    def __str__(self):
        return f"{self.username} ({self.role})"

    def __str__(self):
        return self.username


