pipeline {
    agent any

    stages {
        stage('Unit Test') {
            when {
                branch 'master'
            }
            steps {
                echo 'Execute Unit Tests..'
                // sh 'make test-unit'
            }
        }

        stage('Build Master') {
            when {
                branch 'master'
            }

            steps {
                echo 'Building Master...'              
                // sh 'docker rm -f my_vite_demo' // remove running docker container
                script {
                    docker.withRegistry('https://registry.gitlab.com', '') {
                        echo 'Build docker image....'                      
                        sh 'docker build -t annt/vite_demo:master .'
                        sh "docker tag annt/vite_demo:master vite_demo_latest"
                    }
                }
            }
        }

        stage('Deploy Master') {
            when {
                branch 'master'
            }

            steps {
                echo 'Pushing Master....'
                script {
                    docker.withRegistry('https://registry.gitlab.com', '') {
                        echo 'Push docker image....'                      
                    }
                }
                echo 'Deploying to Master....'
                sh 'ssh admin@127.0.0.1 "cd Project/React/react-vite-template; docker run -p 3000:80 --name my_vite_demo vite_demo_latest"'

                sh 'docker image prune -f' // cleanup pruned images  
            }
        }
    }
}
