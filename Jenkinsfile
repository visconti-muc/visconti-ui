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

        stage('NPM dependency Installation') {
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

        stage('SonarQube Code Analysis') {
            steps {
                echo 'SonarQube is analyzing code...'
                withSonarQubeEnv('sonarqube-server') {
                    sh """${scannerhome}/bin/sonar-scanner"""
                }
            }
        }

    }
}
