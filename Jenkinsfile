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

        stage('Quality Gate') {
            steps {
                echo 'Failing pipeline if coverage not met...'
                timeout(time: 1, unit: 'HOURS') {
                    // def qg = waitForQualityGate() // Reuse taskId previously collected by withSonarQubeEnv
                    // if (qg.status != 'OK') {
                      // error "Pipeline aborted due to quality gate failure: ${qg.status}"
                    // }
                    // Parameter indicates whether to set pipeline to UNSTABLE if Quality Gate fails
                    // true = set pipeline to UNSTABLE, false = don't
                    waitForQualityGate abortPipeline: true
                }
            }
        }


    }
}
