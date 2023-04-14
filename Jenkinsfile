pipeline {
  agent any
  tools {nodejs "node"}
  stages {
    stage('Build') {
      steps {
        git branch: 'main', url: 'https://github.com/walsoulconsut/node_pipeline.git'
        sh 'npm install'
      }
        
    }
      
  }
    
}