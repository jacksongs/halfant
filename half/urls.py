from django.conf.urls import patterns, include, url
from django.contrib import admin
from ant.views import index

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'half.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
	url(r'^data/', index, name='index'),
    url(r'^admin/', include(admin.site.urls)),
)
