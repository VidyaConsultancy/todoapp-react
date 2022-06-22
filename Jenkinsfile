pipeline {
    agent any
    environment {
        npm_config_cache = "npm-cache"
    }
    stages {
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
