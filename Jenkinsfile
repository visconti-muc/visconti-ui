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
                sh 'npm run test-phantom'
            }
        }
        stage('Code Analysis') {
            steps {
                echo 'Analyzing Code...'
                withSonarQubeEnv('sonarqube') {
                    sh """echo ${scannerhome}/bin/sonar-runner"""
                }
            }
        }
    }
}