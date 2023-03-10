from sample.models import ProjectModel, SampleModel
from sample.serializers import ProjectModelSerializer, ProjectModelCreateUpdateSerializer, SampleModelSerializer, SampleModelCreateUpdateSerializer
from dvadmin.utils.viewset import CustomModelViewSet
from rest_framework.response import Response




class ProjectModelViewSet(CustomModelViewSet):
    """
    list:查询
    create:新增
    update:修改
    retrieve:单例
    destroy:删除
    """
    queryset = ProjectModel.objects.all()
    serializer_class = ProjectModelSerializer
    create_serializer_class = ProjectModelCreateUpdateSerializer
    update_serializer_class = ProjectModelCreateUpdateSerializer
    filter_fields = ['name', 'project_no']
    search_fields = ['name']



class SampleModelViewSet(CustomModelViewSet):
    """
    list:查询
    create:新增
    update:修改
    retrieve:单例
    destroy:删除
    """
    queryset = SampleModel.objects.all()
    serializer_class = SampleModelSerializer
    create_serializer_class = SampleModelCreateUpdateSerializer
    update_serializer_class = SampleModelCreateUpdateSerializer
    filter_fields = ['sample_no', 'project_id']
    search_fields = ['sample_no']
