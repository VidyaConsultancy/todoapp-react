pipeline {
    agent {
  docker {
    args '-p 3000:3000'
    image 'node:16-bullseye'
    reuseNode true
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
