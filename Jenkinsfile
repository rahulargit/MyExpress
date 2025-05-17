pipeline {
    agent any

    stages {
        stage('Clone MyExpress') {
            steps {
                git 'https://github.com/rahulargit/MyExpress.git'
            }
        }

        stage('Install Node Modules') {
            steps {
                bat 'npm install'
            }
        }

        stage('Deploy MyExpress') {
            steps {
                bat 'pm2 restart MyExpress || pm2 start npm --name MyExpress -- start'
            }
        }
    }
}
