@component('mail::message')
<h1>Contact From</h1>
<h2>{{ $name }},</h2>
<h3>Email: {{ $email }}</h3>
<h3>Contact: {{ $number ? $number : 'No Contact number is provided.' }}</h3>


{{ $msg }}


Thanks,<br>
{{ config('app.name') }}
@endcomponent
