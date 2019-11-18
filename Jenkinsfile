#!/usr/bin/env groovy

pipeline {

    environment {
        scannerhome = tool 'sonar-scanner';
    }

    agent {
        docker {
            image 'node'
            args '-u root'
        }
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
                    sh """${scannerhome}bin/sonar-scanner -D sonar.login=767958f27ecfb35d49ed8fc201ebf72f68"""
                }
            }
        }
    }
}