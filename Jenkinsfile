#!/usr/bin/env groovy

pipeline {

    environment {
        scannerhome = tool 'sonar-scanner';
        SONAR_SCANNER_OPTS = "-Xmx2g";
    }
  
    agent any


    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
            }
        }
        stage('Code Analysis') {
            steps {
                echo 'Analyzing Code...'
                withSonarQubeEnv('sonarqube-server') {
                    sh "pwd"
                    sh """${scannerhome}/bin/sonar-scanner -Dproject.settings=sonar-project.properties -Dsonar.login=89e27315d2c39255c9e9dd19b685164826642209"""
                }
            }
        }
    }
}
