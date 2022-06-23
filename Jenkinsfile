pipeline {
    agent { 
        docker { image 'node:16.13.1-alpine' }
    }
    environment {
        npm_config_cache = "npm-cache"
    }
    stages {
        stage("Check versions") {
            steps {
                sh '''
                    node --version
                    npm --version
                '''
            }
        }
        stage("Build") {
            steps {
                sh "npm install"
            }
        }
        stage("Release") {
            steps {
                sh "npm run build"
            }
        }
    }
}
