from django.db import models

# Create your models here.
from dvadmin.utils.models import CoreModel


class ProjectModel(CoreModel):
    name = models.CharField(max_length=255, verbose_name='项目名称')
    project_no = models.CharField(max_length=255, verbose_name='项目号')

    def __str__(self):
        return self.name

    class Meta:
        db_table = "projects"
        verbose_name = '项目表'
        verbose_name_plural = verbose_name
        ordering = ('-id',)

class SampleModel(CoreModel):
    sample_no = models.CharField(max_length=255, verbose_name='样本编号')
    project_id = models.ForeignKey(ProjectModel, on_delete=models.PROTECT ,verbose_name='项目号')