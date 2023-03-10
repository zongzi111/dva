from sample.models import ProjectModel, SampleModel
from dvadmin.utils.serializers import CustomModelSerializer
from rest_framework import serializers

class ProjectModelSerializer(CustomModelSerializer):
    """
    序列化器
    """

    class Meta:
        model = ProjectModel
        fields = "__all__"


class ProjectModelCreateUpdateSerializer(CustomModelSerializer):
    """
    创建/更新时的列化器
    """

    class Meta:
        model = ProjectModel
        fields = '__all__'


class SampleModelSerializer(CustomModelSerializer):
    """
    序列化器
    """
    project_id_id = serializers.SerializerMethodField(read_only=True)
    
    def get_project_id_id(self, instance):
        if not hasattr(instance, "project_id_id"):
            return None
        queryset = (
            ProjectModel.objects.filter(id=instance.project_id_id)
            .values_list("name", flat=True)
            .first()
        )
        if queryset:
            return queryset
        return None
    
    class Meta:
        model = SampleModel
        fields = "__all__"

class SampleModelCreateUpdateSerializer(CustomModelSerializer):
    """
    创建/更新时的列化器
    """


    class Meta:
        model = SampleModel
        fields = '__all__'