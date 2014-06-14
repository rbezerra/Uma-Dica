# Heroku Sample Application

This project is a template for [VRaptor](http://vraptor.caelum.com.br/en/) + [SpringData for MongoDB](http://www.springsource.org/spring-data/mongodb) running on [Heroku](http://www.heroku.com/).

Installation
============

Clone the repository from Github

    $ git clone git://github.com/cartagena/heroku-vraptor-mongodb.git
    
With the [Heroku gem](http://devcenter.heroku.com/articles/heroku-command), create your app

    $ cd heroku-vraptor-mongodb
    $ heroku create
    > Creating strange-turtle-1234... done, stack is cedar
    > http://strange-turtle-1234.herokuapp.com/ | git@heroku.com:strange-turtle-1234.git
    > Git remote heroku added
   
Deploy to Heroku

    $ git push heroku master
	> -----> Heroku receiving push
	> -----> Java app detected
	> -----> Installing OpenJDK 1.6...done
	> -----> Installing Maven 3.0.3... done
	> -----> Installing settings.xml... done
	> -----> executing /app/tmp/repo.git/.cache/.maven/bin/mvn -B -Duser.home=/tmp/build_f2rliuvvcwua -Dmaven.repo.local=/app/tmp/repo.git/.cache/.m2/repository -s /app/tmp/repo.git/.cache/.m2/settings.xml -DskipTests=true clean install
	> MAVEN OUTPUT
	> -----> Discovering process types
    >    	 Procfile declares types -> web
	> -----> Compiled slug size: 65.4MB
	> -----> Launching... done, v5
    		 http://secret-ridge-4402.herokuapp.com deployed to Heroku

	> To git@heroku.com:secret-ridge-4402.git
 		* [new branch]      master -> master


Have fun!

