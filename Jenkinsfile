#!/usr/bin/env groovy

pipeline {

    environment {
        scannerhome = tool 'sonar-scanner';
        SONAR_SCANNER_OPTS = "-Xmx2g";
    }
  
    agent {
        label 'master'
    }


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
                    sh """${scannerhome}/bin/sonar-scanner"""
                }
            }
        }
    }
}
