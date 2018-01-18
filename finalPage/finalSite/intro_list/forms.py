from django import forms

from .models import Contact

class ContactForm(forms.ModelForm):
    name = forms.CharField(label='Name', max_length=100)
    phonenumber = forms.CharField(label='Phone Number', max_length=100)
    email = forms.EmailField(label='Email Address', max_length=100)
    content = forms.CharField(label='Content', widget=forms.Textarea)
    class Meta:
        model = Contact
        fields = ['name', 'email', 'phonenumber', 'content', 'timestamp']
