INSTRUCTIONS:
** PLEASE RUN FIRST THE LARAVEL API **


FOR RUNNING PAWTASTIC BACKEND
**Laravel**
1. create a database in your localhost
2. edit .env file in backend-pawtastic folder and add your database name with username & password for DB
3. php artisan migrate
4. php artisan key:generate
5. php artisan serve





FOR RUNNING PAWTASTIC FRONTEND

 ** this is the most important step to be able to save the service data in your database **

1. after successfully running your laravel api backend, 

	>please go to pawtastic frontend folder and find the file Appointment.jsx

	>path: frontend-pawtastic/src/components/Appointment.jsx

        >please edit line #75

	>change url & port based on your running laravel api backend URL

2. npm run start


//PLEASE CONTACT ME VIA EMAIL IF YOU ENCOUNTERED A PROBLEM//

joelmarano1@gmail.com

Thankyou!
		





