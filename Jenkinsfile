pipeline {
    agent {
    docker {
     image 'node:16-alpine3.15'
     args '-p 3000:3000'
    }
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
