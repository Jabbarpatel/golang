pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Tag Info') {
            when {
                buildingTag()
            }
            steps {
                sh '''
                    echo "Building tag: $TAG_NAME"
                '''
            }
        }

        stage('Build') {
            steps {
                sh 'echo "Build started"'
            }
        }
    }
}
