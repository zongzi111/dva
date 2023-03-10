from rest_framework.routers import SimpleRouter

from .views import ProjectModelViewSet, SampleModelViewSet

router = SimpleRouter()
router.register("api/projects", ProjectModelViewSet)
router.register("api/samples", SampleModelViewSet)
urlpatterns = [
]
urlpatterns += router.urls