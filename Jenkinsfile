#!/usr/bin/env groovy
pipeline {

    environment {
        scanner_home = tool 'sonar-scanner';
    }

    agent {
        label 'master'
    }


    stages {

        stage('Project Dependency Installation') {
            steps {
                echo 'Installing dependencies with npm...'
                sh 'npm install'
            }
        }

        stage('Unit Testing Project') {
            steps {
                echo 'Unit testing project via Jasmine & Karma...'
                sh 'npm test-coverage'
            }
        }

        stage('SonarQube Project Code Analysis') {
            steps {
                echo 'SonarQube is analyzing code...'
                withSonarQubeEnv('sonarqube-server') {
                    sh """${scanner_home}/bin/sonar-scanner"""
                }
            }
        }

        stage('test') {
            steps {
                echo 'SonarQube is analyzing code...'
                withSonarQubeEnv('sonarqube-server') {
                    sh """npm run sonar"""
                }
            }
        }

    }
}
